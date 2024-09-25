'use server'

import { prismaControllers } from '@/prisma/controllers'
import { PayOrderTemplate, VerificationUserTemplate } from '@/shared/components'
import { CheckoutFormValues } from '@/shared/constants/checkout-form-schema'
import { createPayment, sendEmail } from '@/shared/lib'
import { getUserSession } from '@/shared/lib/get-user-session'
import { Prisma } from '@prisma/client'
import { hashSync } from 'bcrypt'
import { cookies } from 'next/headers'

export async function createOrder(data: CheckoutFormValues) {
	try {
		const { cart, cartItem, order } = prismaControllers
		const cookieStore = cookies()
		const cartToken = cookieStore.get('cartToken')?.value
		if (!cartToken) throw new Error('Cart token not found')

		const userCart = await cart.getByTokenWithItems(cartToken)

		if (!userCart) {
			throw new Error('Cart not found')
		}

		if (userCart?.totalAmount === 0) {
			throw new Error('Cart is empty')
		}

		const { email, phone, address, comment } = data
		const userOrder = await order.create(cartToken, data.firstName + ' ' + data.lastName, email, phone, address, userCart.totalAmount, JSON.stringify(userCart.items), comment)

		await cart.updateTotalAmount(userCart.id, 0)

		await cartItem.clear(userCart.id)

		const paymentData = await createPayment({ amount: userOrder.totalAmount, orderId: userOrder.id, description: `Оплата заказа #${userOrder.id}` })

		if (!paymentData) {
			throw new Error('Payment data not found')
		}

		await order.updateById(userOrder.id, { paymentId: paymentData.id })

		const paymentUrl = paymentData.confirmation.confirmation_url

		await sendEmail(data.email, `Fast Food Store: Оплата заказа #${userOrder.id}`, PayOrderTemplate({ orderId: userOrder.id, totalAmount: userOrder.totalAmount, paymentUrl }))

		return paymentUrl
	} catch (e) {
		console.log(`[CreateOrder] Server error`, e)
	}
}

export async function updateUserInfo(data: Prisma.UserCreateInput) {
	const { user } = prismaControllers
	try {
		const session = await getUserSession()
		if (!session) throw new Error('Session not found')

		const { fullName, email, password } = data

		const hashedPassword = hashSync(password, 10)

		await user.updateById(Number(session.id), { fullName, email, password: hashedPassword })
	} catch (e) {
		console.log(`[UpdateUserInfo] Server error`, e)
	}
}

export async function registerUser(body: Prisma.UserCreateInput) {
	const { user: userTable, verificationCode } = prismaControllers
	try {
		const user = await userTable.find({ email: body.email })

		if (user) {
			if (!user.verified) {
				throw new Error('Почта не подтверждена')
			}

			throw new Error('Пользователь уже существует')
		}

		const createdUser = await userTable.create(body.email, body.fullName, hashSync(body.password, 10))

		const code = Math.floor(100000 + Math.random() * 900000).toString()
		await verificationCode.create(code, createdUser.id)

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
