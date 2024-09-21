import { CartItemDto } from '@/shared/services/dto/cart-dto'
import * as React from 'react'

export interface OrderSuccessTemplateProps {
	orderId: number
	items: CartItemDto[]
}

export const OrderSuccessTemplate: React.FC<Readonly<OrderSuccessTemplateProps>> = ({ orderId, items }) => (
	<div>
		<h1>Спасибо за покупку!</h1>
		<p>Ваш заказ #{orderId} оплачен. Список товаров:</p>
		<hr />
		<ul>
			{items.map(item => (
				<li key={item.id}>
					{item.productItem.product.name} | {item.productItem.price} ₽ х {item.quantity} шт. = {item.productItem.price * item.quantity} ₽
				</li>
			))}
		</ul>
	</div>
)
