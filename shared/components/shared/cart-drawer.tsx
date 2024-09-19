'use client'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/components/ui/sheet'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { getCartItemsDetails } from '@/shared/lib'
import { cn } from '@/shared/lib/utils'
import { updateItemQuantity } from '@/shared/services/cart'
import { useCartStore } from '@/shared/store'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Button } from '../ui'
import { CartDrawerItem, TCountButton } from './cart-drawer-item'
import { Title } from './title'

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [totalAmount, items, getCartItems, removeCartItem] = useCartStore(state => [state.totalAmount, state.items, state.getCartItems, state.removeCartItem])

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
				<div className={cn('flex flex-col h-full', !totalAmount && 'justify-center')}>
					{totalAmount > 0 && (
						<SheetHeader>
							<SheetTitle>
								В корзине <span className='font-bold'>{items.length} товара</span>
							</SheetTitle>
						</SheetHeader>
					)}

					{!totalAmount && (
						<div className='flex  flex-col items-center justify-center w-72 mx-auto'>
							<Title size='sm' text='Корзина пустая' className='text-center font-bold my-2'></Title>
							<Image src='/assets/images/empty-box.png' alt='Empty Cart' width={120} height={120} />
							<p className='text-center text-neutral-500 mb-5'>Добавьте хотя бы одну пиццу, чтобы совершить заказ</p>

							<SheetClose>
								<Button className='w-56 h-12 text-base' size='lg'>
									<ArrowLeft className='w-5 mr-2' />
									Вернуться назад
								</Button>
							</SheetClose>
						</div>
					)}

					{totalAmount > 0 && (
						<>
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
						</>
					)}
				</div>
			</SheetContent>
		</Sheet>
	)
}
