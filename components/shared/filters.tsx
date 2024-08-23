import React from 'react'
import { Input } from '../ui'
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from './index'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text={'Фильтрация'} size={'sm'} className='mb-5 font-bold'></Title>

			<div className='flex flex-col gap-4'>
				<FilterCheckbox text={'Можно собирать'} value={'1'} />
				<FilterCheckbox text={'Новинки'} value={'2'} />
			</div>

			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input type='number' placeholder='0' min={0} max={30000} defaultValue={0} />
					<Input type='number' placeholder='30000' min={100} max={30000} />
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>
			<CheckboxFiltersGroup
				title={'Ингридиенты'}
				className='mt-5'
				limit={6}
				items={[
					{ text: 'Сырный соус', value: '3' },
					{ text: 'Моцарелла', value: '4' },
					{ text: 'Чеснок', value: '5' },
					{ text: 'Соленые огурчики', value: '6' },
					{ text: 'Сырный соус', value: '7' },
					{ text: 'Моцарелла', value: '8' },
					{ text: 'Чеснок', value: '9' },
					{ text: 'Соленые огурчики', value: '10' },
				]}
				defaultItems={[
					{ text: 'Сырный соус', value: '11' },
					{ text: 'Моцарелла', value: '12' },
					{ text: 'Чеснок', value: '13' },
					{ text: 'Соленые огурчики', value: '14' },
				]}
			/>
		</div>
	)
}
