import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
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

export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>

	//Фильтр ингридиентов
	const [selectedIngredients, { toggle: setSelectedIngredients }] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',') || []))

	//Фильтр размеров
	const [sizes, { toggle: setSizes }] = useSet(new Set<string>(searchParams.get('sizes')?.split(',') || []))

	//Фильтр типов
	const [pizzaTypes, { toggle: setPizzaTypes }] = useSet(new Set<string>(searchParams.get('pizzaTypes')?.split(',') || []))

	//Фильтр цен
	const [prices, setPrices] = useState<PriceProps>({ priceFrom: Number(searchParams.get('priceFrom')) || undefined, priceTo: Number(searchParams.get('priceTo') || undefined) })

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrices(prev => ({ ...prev, [name]: value }))
	}

	return { sizes, pizzaTypes, selectedIngredients, prices, setPrices: updatePrice, setPizzaTypes, setSizes, setSelectedIngredients }
}
