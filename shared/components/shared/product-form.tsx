'use client'
import { ProductWithRelations } from '@/@types/prisma'
import { useCartStore } from '@/shared/store'
import React from 'react'
import toast from 'react-hot-toast'
import { ChoosePizzaForm } from './choose-pizza-form'
import { ChooseProductForm } from './choose-product-form'

interface Props {
	product: ProductWithRelations
	endAction?: VoidFunction
}

export const ProductForm: React.FC<Props> = ({ product, endAction }) => {
	const [addCartItem, loading] = useCartStore(state => [state.addCartItem, state.loading])

	const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
		try {
			const itemId = productItemId ?? firstItem.id

			await addCartItem({
				productItemId: itemId,
				ingredients,
			})

			toast.success(product.name + ': товар добавлен в корзину')
			endAction?.()
		} catch (err) {
			toast.error('Не удалось добавить товар в корзину')
			console.error(err)
		}
	}

	const { items, name, imageUrl, ingredients } = product

	const firstItem = items[0]
	const isPizzaForm = Boolean(items[0].pizzaType)
	{
		return isPizzaForm ? (
			<ChoosePizzaForm onClickAddCart={onSubmit} name={name} items={items} imageUrl={imageUrl} ingredients={ingredients} loading={loading} />
		) : (
			<ChooseProductForm onSubmit={onSubmit} name={name} price={firstItem.price} imageUrl={imageUrl} loading={loading} />
		)
	}
}
