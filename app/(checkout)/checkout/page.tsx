'use client'
import { Container, Title, WhiteBlock } from '@/shared/components/shared'
import { CheckoutSidebar } from '@/shared/components/shared/checkout'
import { CheckoutItem } from '@/shared/components/shared/checkout/checkout-item'
import { Input, Textarea } from '@/shared/components/ui'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { useCart } from '@/shared/hooks'
import { getCartItemsDetails, onClickCountButton } from '@/shared/lib'

export default function CheckoutPage() {
	const { totalAmount, items, removeCartItem, updateItemQuantity } = useCart()

	return (
		<Container className='mt-10'>
			<Title text='Оформление заказа' size='xl' className='font-extrabold mb-8 text-[36px]' />
			<div className='flex gap-10'>
				<div className='flex flex-col gap-10 flex-1 mb-20'>
					<WhiteBlock title='1. Корзина'>
						<div className='flex flex-col gap-5'>
							{items.map(item => (
								<CheckoutItem
									key={item.id}
									id={item.id}
									imageUrl={item.imageUrl}
									name={item.name}
									price={item.price}
									quantity={item.quantity}
									details={getCartItemsDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)}
									disabled={item.disabled}
									onClickCountButton={type => onClickCountButton(item.id, item.quantity, type, updateItemQuantity)}
									onClickRemove={() => removeCartItem(item.id)}
								/>
							))}
						</div>
					</WhiteBlock>
					<WhiteBlock title='2. Персональные данные'>
						<div className='grid grid-cols-2 gap-5'>
							<Input name='firstName' className='text-base' placeholder='Имя' />
							<Input name='lastName' className='text-base' placeholder='Фамилия' />
							<Input name='email' className='text-base' placeholder='E-Mail' />
							<Input name='phone' className='text-base' placeholder='Телефон' />
						</div>
					</WhiteBlock>
					<WhiteBlock title='3. Адрес доставки'>
						<div className='flex flex-col gap-5'>
							<Input name='firstName' className='text-base' placeholder='Адрес' />
							<Textarea rows={5} className='text-base' placeholder='Комментарий к заказу' />
						</div>
					</WhiteBlock>
				</div>
				<div className='w-[450px]'>
					<CheckoutSidebar totalAmount={totalAmount} />
				</div>
			</div>
		</Container>
	)
}
