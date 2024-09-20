'use client'
import { Container, Title } from '@/shared/components/shared'
import { CheckoutAddressForm, CheckoutCart, CheckoutPersonalForm, CheckoutSidebar } from '@/shared/components/shared/checkout'
import { checkoutFormSchema, CheckoutFormValues } from '@/shared/constants/checkout-form-schema'
import { useCart } from '@/shared/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

export default function CheckoutPage() {
	const { totalAmount, items, removeCartItem, updateItemQuantity } = useCart()

	const form = useForm<CheckoutFormValues>({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
			email: '',
			firstName: '',
			lastName: '',
			phone: '',
			address: '',
			comment: '',
		},
	})

	const onSubmit = (data: CheckoutFormValues) => {
		console.log(data)
	}

	return (
		<Container className='mt-10'>
			<Title text='Оформление заказа' size='xl' className='font-extrabold mb-8 text-[36px]' />
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className='flex gap-10'>
						<div className='flex flex-col gap-10 flex-1 mb-20'>
							<CheckoutCart items={items} updateItemQuantity={updateItemQuantity} />
							<CheckoutPersonalForm />
							<CheckoutAddressForm />
						</div>
						<div className='w-[450px]'>
							<CheckoutSidebar totalAmount={totalAmount} />
						</div>
					</div>
				</form>
			</FormProvider>
		</Container>
	)
}
