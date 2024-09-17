import { Ingredient } from '@prisma/client'
import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza'

/**
 * Generate a string of details about the pizza, given the type, size, and list of ingredients.
 * The string will be in the format: "typeName (size) см, ingredient1, ingredient2, ..."
 * If there are no ingredients, the string will only contain the type and size.
 *
 * @param {PizzaType} pizzaType - the type of pizza
 * @param {PizzaSize} pizzaSize - the size of the pizza
 * @param {Ingredient[]} ingredients - the list of ingredients
 * @returns {string} the string of details
 */
export const getCartItemsDetails = (pizzaType: PizzaType, pizzaSize: PizzaSize, ingredients: Ingredient[]) => {
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
