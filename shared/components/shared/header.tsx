'use client'

import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { CartButton } from './cart-button'
import { Container } from './container'
import { AuthModal } from './modals'
import { ProfileButton } from './profile-button'
import { SearchInput } from './search-input'

interface Props {
	className?: string
	hasSearch?: boolean
	hasCart?: boolean
}

export const Header: FC<Props> = ({ className, hasSearch = true, hasCart = true }) => {
	const router = useRouter()
	const [openAuthModal, setOpenAuthModal] = useState(false)

	const searchParams = useSearchParams()

	useEffect(() => {
		let toastMessage = ''

		if (searchParams.has('paid')) {
			toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.'
		}

		if (searchParams.has('verified')) {
			toastMessage = 'Почта успешно подтверждена!'
		}

		if (toastMessage) {
			setTimeout(() => {
				router.replace('/')
				toast.success(toastMessage, {
					duration: 3000,
				})
			}, 1000)
		}
	}, [])

	return (
		<div className={cn('border-b', className)}>
			<Container className='flex items-center justify-between py-8'>
				<Link href='/'>
					<div className='flex items-center gap-4'>
						<Image src='/logo.png' alt='Logo' width={35} height={35} />
						<div>
							<h1 className='text-2xl uppercase font-black'>Fast Food Store</h1>
							<p className='text-sm text-gray-400 leading-3'>Онлайн-ресторан вкусной еды</p>
						</div>
					</div>
				</Link>

				{hasSearch && (
					<div className='mx-10 flex-1'>
						<SearchInput />
					</div>
				)}

				<div className='flex items-center gap-3'>
					<AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
					<ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
					{hasCart && (
						<div>
							<CartButton />
						</div>
					)}
				</div>
			</Container>
		</div>
	)
}
