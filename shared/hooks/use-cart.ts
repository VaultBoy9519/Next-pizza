import { useEffect } from 'react'
import { CartStateItem } from '../lib/get-cart-details'
import { TUpdateCountQuantity, useCartStore } from '../store'

interface ReturnProps {
	totalAmount: number
	items: CartStateItem[]
	getCartItems: () => Promise<void>
	removeCartItem: (id: number) => Promise<void>
	loading: boolean
	updateItemQuantity: TUpdateCountQuantity
}

export const useCart = (): ReturnProps => {
	const cartState = useCartStore(state => state)

	useEffect(() => {
		cartState.getCartItems()
	}, [])

	return cartState
}
