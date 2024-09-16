import { Api } from '@/shared/services/api-client'
import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'

interface ReturnProps {
	ingredients: Ingredient[]
	loading: boolean
}

export const useIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function getIngredients() {
			try {
				setLoading(true)
				const ingredients = await Api.ingredients.getAll()
				setIngredients(ingredients)
				setLoading(false)
			} catch (e: any) {
				console.log(e.message)
			}
		}
		getIngredients()
	}, [])

	return { ingredients, loading }
}
