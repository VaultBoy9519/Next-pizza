'use client'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/components/ui/sheet'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { getCartItemsDetails } from '@/shared/lib'
import { cn } from '@/shared/lib/utils'
import { updateItemQuantity } from '@/shared/services/cart'
import { useCartStore } from '@/shared/store'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Button } from '../ui'
import { CartDrawerItem, TCountButton } from './cart-drawer-item'

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [totalAmount, items, getCartItems, removeCartItem] = useCartStore(state => [state.totalAmount, state.items, state.getCartItems, state.removeCartItem])
	console.log('🚀 ~ items:', items)

	useEffect(() => {
		getCartItems()
	}, [])

	const onClickCountButton = (id: number, quantity: number, type: TCountButton) => {
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>

			<SheetContent className='flex flex-col justify-between pb-0 bg-[#F4F1EE]'>
				<div className={cn('flex flex-col h-full justify-between')}>
					<SheetHeader>
						<SheetTitle>
							В корзине <span className='font-bold'>{items.length} товара</span>
						</SheetTitle>
					</SheetHeader>

					<div className={'-mx-6 mt-5 overflow-auto flex-1'}>
						{items.map(item => (
							<div key={item.id} className='mb-2'>
								<CartDrawerItem
									id={item.id}
									imageUrl={item.imageUrl}
									details={getCartItemsDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)}
									disabled={item.disabled}
									name={item.name}
									price={item.price}
									quantity={item.quantity}
									onClickCountButton={type => onClickCountButton(item.id, item.quantity, type)}
									onClickRemove={() => removeCartItem(item.id)}
								/>
							</div>
						))}
					</div>

					<SheetFooter className='-mx-6 bg-white p-8'>
						<div className='w-full'>
							<div className='flex mb-4'>
								<span className='flex flex-1 text-lg text-neutral-500'>
									Итого
									<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2' />
								</span>

								<span className='font-bold text-lg'>{totalAmount} ₽</span>
							</div>

							<Link href='/checkout'>
								<Button type='submit' className='w-full h-12 text-base'>
									Оформить заказ
									<ArrowRight className='w-5 ml-2' />
								</Button>
							</Link>
						</div>
					</SheetFooter>
				</div>
			</SheetContent>
		</Sheet>
	)
}
