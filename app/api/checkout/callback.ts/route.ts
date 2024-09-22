import { PaymentCallbackData } from '@/@types/yookassa'
import { prisma } from '@/prisma/prisma-client'
import { OrderSuccessTemplate } from '@/shared/components'
import { sendEmail } from '@/shared/lib'
import { CartItemDto } from '@/shared/services/dto/cart-dto'
import { OrderStatus } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	try {
		const body: PaymentCallbackData = await req.json()
		const order = await prisma.order.findFirst({
			where: {
				id: Number(body.object.metadata.order_id),
			},
		})

		if (!order) {
			return NextResponse.json({ error: 'Order not found' })
		}

		const isSucceeded = body.object.status === 'succeeded'

		await prisma.order.update({
			where: {
				id: order.id,
			},
			data: {
				status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
			},
		})

		const items: CartItemDto[] = JSON.parse(order?.items as string)
		if (isSucceeded) await sendEmail(order.email, 'Next Pizza | Заказ успешно оформлен', OrderSuccessTemplate({ orderId: order.id, items }))

		return NextResponse.json({ success: true })
	} catch (e) {
		console.log('[Checkout Callback] Server error', e)
	}
}
