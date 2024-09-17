import { ProductItem } from '@prisma/client'
import { Variant } from '../components/shared/group-variants'
import { pizzaSizes, PizzaType } from '../constants/pizza'

/**
 * Return list of available pizza sizes for given pizza type from list of all products.
 * Each item in the list will have `disabled` property set to `true` if there is no product with given size.
 *
 * @example
 * getAvailablePizzaSizes(1, [
 *  { pizzaType: 1, size: 20 },
 *  { pizzaType: 2, size: 30 },
 *  { pizzaType: 1, size: 40 },
 * ])
 * // => [
 * //     { name: '20 см', value: 20, disabled: false },
 * //     { name: '30 см', value: 30, disabled: true },
 * //     { name: '40 см', value: 40, disabled: false },
 * // ]
 *
 * @param {number} type - pizza type
 * @param {ProductItem[]} items - list of all products
 * @returns {Variant[]}
 */
export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
	const filteredPizzasByType = items.filter(item => item.pizzaType === type)
	const availablePizzaSizes = pizzaSizes.map(item => ({ name: item.name, value: item.value, disabled: !filteredPizzasByType.some(pizza => Number(pizza.size) === Number(item.value)) }))
	return availablePizzaSizes
}
