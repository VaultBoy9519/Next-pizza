import { ArrowRight, Package, Percent, Truck } from 'lucide-react'
import React from 'react'
import { Button, Skeleton } from '../../ui'
import { WhiteBlock } from '../white-block'
import { CheckoutItemDetails } from './checkout-item-details'

interface Props {
	totalAmount: number
	submitting: boolean
	loading: boolean
}

const VAT = 15
const DELIVERY_PRICE = 250

export const CheckoutSidebar: React.FC<Props> = ({ totalAmount, loading, submitting }) => {
	const vatPrice = (totalAmount * VAT) / 100
	const deliveryPrice = totalAmount === 0 ? 0 : DELIVERY_PRICE
	const fullPrice = vatPrice + totalAmount + deliveryPrice
	const renderSkeleton = totalAmount === 0 && loading

	return (
		<WhiteBlock className='p-6 sticky top-4'>
			<div className='flex flex-col gap-1'>
				<span className='text-xl'>Итого:</span>
				{renderSkeleton ? <Skeleton className='w-full h-10 w-48' /> : <span className='text-3xl font-extrabold'>{fullPrice} ₽</span>}
			</div>

			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Package size={18} className='mr-2 text-gray-300' />
						Стоимость товаров
					</div>
				}
				value={`${totalAmount} ₽`}
				loading={renderSkeleton}
			/>
			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Percent size={18} className='mr-2 text-gray-300' />
						Налог
					</div>
				}
				value={`${vatPrice} ₽`}
				loading={renderSkeleton}
			/>
			<CheckoutItemDetails
				title={
					<div className='flex items-center'>
						<Truck size={18} className='mr-2 text-gray-300' />
						Доставка
					</div>
				}
				value={`${deliveryPrice} ₽`}
				loading={renderSkeleton}
			/>

			<Button loading={renderSkeleton || submitting} type='submit' className='w-full h-14 rounded-2xl mt-6 text-base font-bold'>
				Перейти к оплате
				<ArrowRight className='w-5 ml-2' />
			</Button>
		</WhiteBlock>
	)
}
