'use client'
import { createOrder } from '@/app/actions'
import { Container, Title } from '@/shared/components/shared'
import { CheckoutAddressForm, CheckoutCart, CheckoutPersonalForm, CheckoutSidebar } from '@/shared/components/shared/checkout'
import { checkoutFormSchema, CheckoutFormValues } from '@/shared/constants/checkout-form-schema'
import { useCart } from '@/shared/hooks'
import { cn } from '@/shared/lib/utils'
import { Api } from '@/shared/services/api-client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function CheckoutPage() {
	const { totalAmount, items, updateItemQuantity, loading } = useCart()
	const [submitting, setSubmitting] = useState(false)
	const { data: session } = useSession()

	const disabledFormClass = cn({ 'opacity-40 pointer-events-none': loading && items.length === 0 })

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

	useEffect(() => {
		const getProfileData = async () => {
			try {
				const data = await Api.auth.getProfileData()
				const [firstName, lastName] = data.fullName.split(' ')

				form.setValue('firstName', firstName)
				form.setValue('lastName', lastName)
				form.setValue('email', data.email)
			} catch (e) {
				console.log(`[getProfileData] Server error`, e)
			}
		}

		if (session) {
			getProfileData()
		}
	}, [])

	const onSubmit = async (data: CheckoutFormValues) => {
		try {
			setSubmitting(true)
			const url = await createOrder(data)
			toast.success('Заказ создан! Переход на страницу оплаты...', {
				icon: '✅',
			})

			if (url) {
				location.href = url
			}
		} catch (e) {
			console.log(e)
			toast.error('Не удалось создать заказ', {
				icon: '❌',
			})
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<Container className='mt-10'>
			<Title text='Оформление заказа' size='xl' className='font-extrabold mb-8 text-[36px]' />
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className='flex gap-10'>
						<div className='flex flex-col gap-10 flex-1 mb-20'>
							<CheckoutCart items={items} updateItemQuantity={updateItemQuantity} loading={loading} />
							<CheckoutPersonalForm className={disabledFormClass} />
							<CheckoutAddressForm className={disabledFormClass} />
						</div>
						<div className='w-[450px]'>
							<CheckoutSidebar submitting={submitting} totalAmount={totalAmount} loading={loading} />
						</div>
					</div>
				</form>
			</FormProvider>
		</Container>
	)
}
