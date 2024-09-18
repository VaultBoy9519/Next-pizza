'use client'

import { ProductWithRelations } from '@/@types/prisma'
import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { cn } from '@/shared/lib/utils'
import { useCartStore } from '@/shared/store'
import { useRouter } from 'next/navigation'
import React from 'react'
import { ChoosePizzaForm } from '../choose-pizza-form'
import { ChooseProductForm } from '../choose-product-form'

interface Props {
	product: ProductWithRelations
	className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
	const router = useRouter()
	const addCartItem = useCartStore(state => state.addCartItem)
	const firstItem = product.items[0]
	const isPizzaForm = Boolean(product.items[0].pizzaType)

	const onAddProduct = () => {
		addCartItem({
			productItemId: firstItem.id,
		})
	}

	const onAddPizza = (productItemId: number, ingredients: number[]) => {
		addCartItem({
			productItemId,
			ingredients,
		})
	}

	const { name, imageUrl } = product
	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[550px] bg-white overflow-hidden', className)}>
				{isPizzaForm ? (
					<ChoosePizzaForm onClickAddCart={onAddPizza} name={name} items={product.items} imageUrl={imageUrl} ingredients={product.ingredients} />
				) : (
					<ChooseProductForm onSubmit={onAddProduct} name={name} price={firstItem.price} imageUrl={imageUrl} />
				)}
			</DialogContent>
		</Dialog>
	)
}
