import { cn } from '@/shared/lib/utils'
import React from 'react'
import { Button } from '../ui'
import { Title } from './title'

interface Props {
	imageUrl: string
	name: string
	loading?: boolean
	price: number
	onSubmit: VoidFunction
	className?: string
}

export const ChooseProductForm: React.FC<Props> = ({ name, imageUrl, loading, onSubmit, price, className }) => {
	return (
		<div className={cn(className, 'flex flex-1 flex-col md:flex-row')}>
			<div className='flex items-center justify-center flex-1 relative w-full'>
				<img src={imageUrl} alt={name} className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]' />
			</div>
			<div className='md:w-[490px] w-full h-[420px] bg-[#f7f6f5] p-7 relative rounded-lg'>
				<Title text={name} size='md' className='absolute font-extrabold mb-1' />
				<div className='flex h-full justify-center items-center '>
					<Button onClick={() => onSubmit()} loading={loading} className='h-[55px] px-10 text-base rounded-[18px] w-full'>
						Добавить в корзину за {price} ₽
					</Button>
				</div>
			</div>
		</div>
	)
}
