import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { getCartItemsDetails, onClickCountButton } from '@/shared/lib'
import { CartStateItem } from '@/shared/lib/get-cart-details'
import { removeCartItem } from '@/shared/services/cart'
import { TUpdateCountQuantity } from '@/shared/store'
import React from 'react'
import { WhiteBlock } from '../white-block'
import { CheckoutItem } from './checkout-item'

interface Props {
	items: CartStateItem[]
	className?: string
	updateItemQuantity: TUpdateCountQuantity
}

export const CheckoutCart: React.FC<Props> = ({ items, className, updateItemQuantity }) => {
	return (
		<WhiteBlock className={className} title='1. Корзина'>
			<div className='flex flex-col gap-5'>
				{items.map(item => (
					<CheckoutItem
						key={item.id}
						id={item.id}
						imageUrl={item.imageUrl}
						name={item.name}
						price={item.price}
						quantity={item.quantity}
						details={getCartItemsDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)}
						disabled={item.disabled}
						onClickCountButton={type => onClickCountButton(item.id, item.quantity, type, updateItemQuantity)}
						onClickRemove={() => removeCartItem(item.id)}
					/>
				))}
			</div>
		</WhiteBlock>
	)
}
