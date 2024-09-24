import { PaymentCallbackData } from '@/@types/yookassa'
import { prismaControllers } from '@/prisma/controllers'
import { OrderSuccessTemplate } from '@/shared/components'
import { sendEmail } from '@/shared/lib'
import { CartItemDto } from '@/shared/services/dto/cart-dto'
import { OrderStatus } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const { order } = prismaControllers
	try {
		const body: PaymentCallbackData = await req.json()
		const orderId = Number(body.object.metadata.order_id)
		const userOrder = await order.findById(orderId)

		if (!userOrder) {
			return NextResponse.json({ error: 'Order not found' })
		}

		const isSucceeded = body.object.status === 'succeeded'

		const status = isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED

		await order.updateById(userOrder.id, { status })

		const items: CartItemDto[] = JSON.parse(userOrder?.items as string)
		if (isSucceeded) await sendEmail(userOrder.email, 'Fastfood Store | Заказ успешно оформлен', OrderSuccessTemplate({ orderId: userOrder.id, items }))

		return NextResponse.json({ success: true })
	} catch (e) {
		console.log('[Checkout Callback] Server error', e)
	}
}
