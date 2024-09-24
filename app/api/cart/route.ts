import { prismaControllers } from '@/prisma/controllers'
import { findOrCreateCart, updateCartTotalAmount } from '@/shared/lib'
import { CreateCartItemValues } from '@/shared/services/dto/cart-dto'
import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server'
export async function GET(req: NextRequest) {
	const { cart } = prismaControllers
	try {
		const token = req.cookies.get('cartToken')?.value

		if (!token) {
			return NextResponse.json({ totalAmount: 0, items: [] })
		}

		const userCart = await cart.getByTokenSorted(token)

		return NextResponse.json(userCart)
	} catch (error) {
		console.log('[CART_GET] Server error', error)
		return NextResponse.json({ message: 'Не удалось получить корзину' }, { status: 500 })
	}
}

export async function POST(req: NextRequest) {
	const { cartItem } = prismaControllers
	try {
		let token = req.cookies.get('cartToken')?.value
		if (!token) {
			token = crypto.randomUUID()
		}

		const userCart = await findOrCreateCart(token)

		const data = (await req.json()) as CreateCartItemValues

		const { productItemId, ingredients } = data

		const findCartItem = await cartItem.findItem(userCart.id, productItemId, ingredients)

		if (findCartItem) {
			await cartItem.updateQuantity(findCartItem.id, findCartItem.quantity + 1)
		} else {
			const ingredients = data.ingredients?.map(id => ({ id }))
			await cartItem.create(userCart.id, productItemId, 1, ingredients)
		}

		const updatedUserCart = await updateCartTotalAmount(token)
		const response = NextResponse.json(updatedUserCart)

		response.cookies.set('cartToken', token)

		return response
	} catch (e) {
		console.log('[CART_POST] Server error', e)
		return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
	}
}
