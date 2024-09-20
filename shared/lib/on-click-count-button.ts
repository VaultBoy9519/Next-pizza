import { TCountButton } from '../components/shared/cart-drawer-item'
import { TUpdateCountQuantity } from '../store'

export const onClickCountButton = (id: number, quantity: number, type: TCountButton, updateItemQuantity: TUpdateCountQuantity) => {
	const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
	updateItemQuantity(id, newQuantity)
}
