'use server'

import { prismaControllers } from '@/prisma/controllers'
import { prisma } from '@/prisma/prisma-client'
import { PayOrderTemplate, VerificationUserTemplate } from '@/shared/components'
import { CheckoutFormValues } from '@/shared/constants/checkout-form-schema'
import { createPayment, sendEmail } from '@/shared/lib'
import { getUserSession } from '@/shared/lib/get-user-session'
import { OrderStatus, Prisma } from '@prisma/client'
import { hashSync } from 'bcrypt'
import { cookies } from 'next/headers'

export async function createOrder(data: CheckoutFormValues) {
	try {
		const { cart } = prismaControllers
		const cookieStore = cookies()
		const cartToken = cookieStore.get('cartToken')?.value
		if (!cartToken) throw new Error('Cart token not found')

		const userCart = await cart.getByToken(cartToken)

		if (!userCart) {
			throw new Error('Cart not found')
		}

		if (userCart?.totalAmount === 0) {
			throw new Error('Cart is empty')
		}

		const order = await prisma.order.create({
			data: {
				token: cartToken,
				fullName: data.firstName + ' ' + data.lastName,
				email: data.email,
				phone: data.phone,
				address: data.address,
				comment: data.comment,
				totalAmount: userCart.totalAmount,
				status: OrderStatus.PENDING,
				items: JSON.stringify(userCart.items),
			},
		})

		await cart.clearTotalAmount(userCart.id)
		await cart.deleteAllProducts(userCart.id)

		const paymentData = await createPayment({ amount: order.totalAmount, orderId: order.id, description: `Оплата заказа #${order.id}` })

		if (!paymentData) {
			throw new Error('Payment data not found')
		}

		await prisma.order.update({
			where: { id: order.id },
			data: {
				paymentId: paymentData.id,
			},
		})

		const paymentUrl = paymentData.confirmation.confirmation_url

		await sendEmail(data.email, `Fast Food Store: Оплата заказа #${order.id}`, PayOrderTemplate({ orderId: order.id, totalAmount: order.totalAmount, paymentUrl }))

		return paymentUrl
	} catch (e) {
		console.log(`[CreateOrder] Server error`, e)
	}
}

export async function updateUserInfo(data: Prisma.UserCreateInput) {
	try {
		const session = await getUserSession()
		if (!session) throw new Error('Session not found')

		const { fullName, email, password } = data

		await prisma.user.update({
			where: {
				id: Number(session.id),
			},
			data: {
				fullName,
				email,
				password: data.password && hashSync(password, 10),
			},
		})
	} catch (e) {
		console.log(`[UpdateUserInfo] Server error`, e)
	}
}

export async function registerUser(body: Prisma.UserCreateInput) {
	try {
		const user = await prisma.user.findFirst({
			where: {
				email: body.email,
			},
		})

		if (user) {
			if (!user.verified) {
				throw new Error('Почта не подтверждена')
			}

			throw new Error('Пользователь уже существует')
		}

		const createdUser = await prisma.user.create({
			data: {
				fullName: body.fullName,
				email: body.email,
				password: hashSync(body.password, 10),
			},
		})

		const code = Math.floor(100000 + Math.random() * 900000).toString()

		await prisma.verificationCode.create({
			data: {
				code,
				userId: createdUser.id,
			},
		})

		await sendEmail(
			createdUser.email,
			'Fast Food Store / 📝 Подтверждение регистрации',
			VerificationUserTemplate({
				code,
			}),
		)
	} catch (err) {
		console.log('Error [CREATE_USER]', err)
		throw err
	}
}
