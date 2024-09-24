import { prismaControllers } from '@/prisma/controllers'
import { calcCartItemTotalPrice } from './calc-cart-item-total-price'

export const updateCartTotalAmount = async (token: string) => {
	const { cart } = prismaControllers
	const userCart = await cart.getByTokenSorted(token)

	if (!userCart) {
		return
	}

	const totalAmount = userCart.items.reduce((acc, item) => {
		return acc + calcCartItemTotalPrice(item)
	}, 0)

	return await cart.updateTotalAmount(userCart.id, totalAmount)
}
