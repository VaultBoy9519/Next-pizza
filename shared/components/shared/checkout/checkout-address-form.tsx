import React from 'react'
import { Input, Textarea } from '../../ui'
import { WhiteBlock } from '../white-block'

interface Props {
	className?: string
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
	return (
		<WhiteBlock className={className} title='3. Адрес доставки'>
			<div className='flex flex-col gap-5'>
				<Input name='firstName' className='text-base' placeholder='Адрес' />
				<Textarea rows={5} className='text-base' placeholder='Комментарий к заказу' />
			</div>
		</WhiteBlock>
	)
}
