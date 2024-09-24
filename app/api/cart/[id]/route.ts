import { prismaControllers } from '@/prisma/controllers'
import { updateCartTotalAmount } from '@/shared/lib'
import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
	const { cartItem } = prismaControllers
	try {
		const id = Number(params.id)
		const data = (await req.json()) as { quantity: number }
		const token = req.cookies.get('cartToken')?.value

		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' })
		}

		const item = await cartItem.findItemById(id)

		if (!item) {
			return NextResponse.json({ error: 'Cart item not found' })
		}

		await cartItem.updateQuantity(id, data.quantity)

		const updatedUserCart = await updateCartTotalAmount(token)

		return NextResponse.json(updatedUserCart)
	} catch (error) {
		console.log('[CART_PATCH] Server error', error)
		return NextResponse.json({ message: 'Не удалось обновить корзину' }, { status: 500 })
	}
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
	const { cartItem } = prismaControllers

	try {
		const id = Number(params.id)
		const token = req.cookies.get('cartToken')?.value
		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' }, { status: 400 })
		}

		const item = await cartItem.findItemById(id)

		if (!item) {
			return NextResponse.json({ error: 'Cart item not found' }, { status: 404 })
		}

		await cartItem.deleteItemById(id)

		const updatedUserCart = await updateCartTotalAmount(token)
		return NextResponse.json(updatedUserCart)
	} catch (e) {
		console.log('[CART_DELETE] Server error', e)
		return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
	}
}
