import { cn } from '@/lib/utils'
import { Category } from '@prisma/client'
import React from 'react'
import { Categories, Container, SortPopup } from './index'

interface Props {
	categories: Category[]
	className?: string
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
	return (
		<div className={cn('sticky top-0 bg-white z-10 py-5 shadow-lg shadow-black/5', className)}>
			<Container className='flex items-center justify-between'>
				<Categories items={categories} />
				<SortPopup />
			</Container>
		</div>
	)
}
