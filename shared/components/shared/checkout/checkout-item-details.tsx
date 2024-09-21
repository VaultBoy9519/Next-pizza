import { cn } from '@/shared/lib/utils'
import React, { ReactNode } from 'react'
import { Skeleton } from '../../ui'

interface Props {
	title?: ReactNode
	value?: ReactNode
	loading?: boolean
	className?: string
}

export const CheckoutItemDetails: React.FC<Props> = ({ title, value, loading, className }) => {
	return (
		<div className={cn(className, 'flex my-4')}>
			<span className='flex flex-1 text-lg text-neutral-500'>
				{title}
				<div className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'></div>
			</span>
			<span className='font-bold text-lg'>{loading ? <Skeleton className='w-16 h-6 rounded-[12px]' /> : value}</span>
		</div>
	)
}
