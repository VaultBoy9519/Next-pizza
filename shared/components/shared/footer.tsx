import { cn } from '@/shared/lib/utils'
import Link from 'next/link'
import { FC } from 'react'
import { Container } from './container'

interface Props {
	className?: string
}

export const Footer: FC<Props> = ({ className }) => {
	return (
		<div className={cn('border-t', className)}>
			<Container className='flex items-center justify-end py-8'>
				<Link href='https://t.me/Vault_Boy13' target='_blank' rel='noreferrer'>
					<div className='flex items-center'>
						<div>
							<p className='text-sm text-gray-400 leading-3 mr-20'>
								<img src='/assets/images/telegram-logo.svg' alt='Telegram logo' width={50} />
							</p>
						</div>
					</div>
				</Link>
			</Container>
		</div>
	)
}
