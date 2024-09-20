import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza'
import { CartStateItem } from './get-cart-details'

/**
 * Generate a string of details about the pizza, given the type, size, and list of ingredients.
 * The string will be in the format: "typeName (size) см, ingredient1, ingredient2, ..."
 * If there are no ingredients, the string will only contain the type and size.
 * @param {CartStateItem['ingredients']} ingredients - list of ingredients
 * @param {PizzaType} pizzaType - type of pizza
 * @param {PizzaSize} pizzaSize - size of pizza
 * @returns {string} the string of details
 */
export const getCartItemsDetails = (ingredients: CartStateItem['ingredients'], pizzaType?: PizzaType, pizzaSize?: PizzaSize) => {
	const details = []

	if (pizzaSize && pizzaType) {
		const typeName = mapPizzaType[pizzaType]
		details.push(`${typeName} (${pizzaSize}) см`)
	}

	if (ingredients) {
		details.push(...ingredients.map(ingredient => ingredient.name))
	}

	return details.join(', ')
}
