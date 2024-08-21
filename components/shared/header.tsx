import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'
import { Button } from '../ui'
import { Container } from './container'

interface IProps {
	className?: string
}

export const Header: FC<IProps> = className => {
	return (
		<div className={cn('border border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				<div className='flex items-center gap-4'>
					<Image src='/logo.png' alt='Logo' width={35} height={35} />
					<div>
						<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
						<p className='text-sm text-gray-400 leading-3'>Вкусней уже некуда</p>
					</div>
				</div>

				<div className='flex items-center gap-3'>
					<Button variant={'outline'} className='flex items-center gap-1'>
						<User size={16} />
						Войти
					</Button>
				</div>
			</Container>
		</div>
	)
}
