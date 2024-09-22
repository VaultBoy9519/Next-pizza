'use client'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Textarea } from '../../ui'
import { ErrorText } from '../error-text'
import { WhiteBlock } from '../white-block'
import { AddressInput } from './address-input'

interface Props {
	className?: string
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
	const { control } = useFormContext()
	return (
		<WhiteBlock className={className} title='3. Адрес доставки'>
			<div className='flex flex-col gap-5'>
				<Controller
					render={({ field, fieldState }) => (
						<>
							<AddressInput onChange={field.onChange} />
							{fieldState.error?.message && <ErrorText text={fieldState.error.message} />}
						</>
					)}
					name='address'
					control={control}
				/>
				<Textarea rows={5} className='text-base' placeholder='Комментарий к заказу' />
			</div>
		</WhiteBlock>
	)
}
