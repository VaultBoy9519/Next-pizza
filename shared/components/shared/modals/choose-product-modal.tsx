'use client'

import { ProductWithRelations } from '@/@types/prisma'
import { Dialog, DialogContent } from '@/shared/components/ui/dialog'
import { cn } from '@/shared/lib/utils'
import { useCartStore } from '@/shared/store'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import { ChoosePizzaForm } from '../choose-pizza-form'
import { ChooseProductForm } from '../choose-product-form'

interface Props {
	product: ProductWithRelations
	className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
	const router = useRouter()
	const [addCartItem, loading] = useCartStore(state => [state.addCartItem, state.loading])
	const firstItem = product.items[0]
	const isPizzaForm = Boolean(product.items[0].pizzaType)

	const onSubmit = (productItemId?: number, ingredients?: number[]) => {
		const itemId = productItemId ?? firstItem.id

		try {
			addCartItem({
				productItemId: itemId,
				ingredients,
			})
			toast.success(`Товер "${product.name}" добавлен корзину`)
			router.back()
		} catch (e) {
			toast.error('Не удалось добавить в корзину')
			console.error(e)
		}
	}

	const { name, imageUrl } = product
	return (
		<Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
			<DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[550px] bg-white overflow-hidden', className)}>
				{isPizzaForm ? (
					<ChoosePizzaForm onClickAddCart={onSubmit} name={name} items={product.items} imageUrl={imageUrl} ingredients={product.ingredients} loading={loading} />
				) : (
					<ChooseProductForm onSubmit={onSubmit} name={name} price={firstItem.price} imageUrl={imageUrl} loading={loading} />
				)}
			</DialogContent>
		</Dialog>
	)
}
