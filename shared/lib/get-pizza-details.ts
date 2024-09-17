import { Ingredient, ProductItem } from '@prisma/client'
import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza'
import { calcTotalPizzaPrice } from './calc-total-pizza-price'

/**
 * Calculate total price and text details for given pizza.
 *
 * @param type - type of pizza
 * @param size - size of pizza
 * @param items - list of all products
 * @param ingredients - list of all available ingredients
 * @param selectedIngredients - set of ids of selected ingredients
 * @returns object with `totalPrice` and `textDetails` properties
 */
export const getPizzaDetails = (type: PizzaType, size: PizzaSize, items: ProductItem[], ingredients: Ingredient[], selectedIngredients: Set<number>) => {
	const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients)
	const textDetails = `${size} см, ${mapPizzaType[type]} пицца`
	return {
		totalPrice,
		textDetails,
	}
}
