import { useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'
import { useSet } from 'react-use'

interface QueryFilters extends PriceProps {
	pizzaTypes: string
	sizes: string
	ingredients: string
}

interface PriceProps {
	priceFrom?: number
	priceTo?: number
}

export interface Filters {
	sizes: Set<string>
	pizzaTypes: Set<string>
	selectedIngredients: Set<string>
	prices: PriceProps
}

interface ReturnProps extends Filters {
	setPrices: (name: keyof PriceProps, value: number) => void
	setPizzaTypes: (value: string) => void
	setSizes: (value: string) => void
	setSelectedIngredients: (value: string) => void
}

/**
 * Hook to manage filters state.
 * It returns object with current sizes, pizza types, selected ingredients, prices and functions to update them.
 * @returns {ReturnProps}
 */
export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

	const [selectedIngredients, { toggle: setSelectedIngredients }] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',') || []))

	const [sizes, { toggle: setSizes }] = useSet(new Set<string>(searchParams.get('sizes')?.split(',') || []))

	const [pizzaTypes, { toggle: setPizzaTypes }] = useSet(new Set<string>(searchParams.get('pizzaTypes')?.split(',') || []))

	const [prices, setPrices] = useState<PriceProps>({
		priceFrom: Number(searchParams.get('priceFrom')) || undefined,
		priceTo: Number(searchParams.get('priceTo')) || undefined,
	})

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrices(prev => ({ ...prev, [name]: value }))
	}

	return useMemo(() => ({ sizes, pizzaTypes, selectedIngredients, prices, setPrices: updatePrice, setPizzaTypes, setSizes, setSelectedIngredients }), [sizes, pizzaTypes, selectedIngredients, prices])
}
