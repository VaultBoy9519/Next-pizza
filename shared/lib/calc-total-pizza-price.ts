import { Ingredient, ProductItem } from '@prisma/client'
import { PizzaSize, PizzaType } from '../constants/pizza'

/**
 * Calculate total price of pizza based on its type, size, and ingredients.
 *
 * @param type - type of pizza
 * @param size - size of pizza
 * @param items - list of all products
 * @param ingredients - list of all available ingredients
 * @param selectedIngredients - set of ids of selected ingredients
 * @returns total price of pizza
 */
export const calcTotalPizzaPrice = (type: PizzaType, size: PizzaSize, items: ProductItem[], ingredients: Ingredient[], selectedIngredients: Set<number>) => {
	const pizzaPrice = items.find(item => item.pizzaType === type && item.size === size)?.price || 0
	const totalIngredientsPrice = ingredients.filter(ingredient => selectedIngredients.has(ingredient.id)).reduce((acc, ingredient) => acc + ingredient.price, 0)
	const totalPrice = pizzaPrice + totalIngredientsPrice
	return totalPrice
}
