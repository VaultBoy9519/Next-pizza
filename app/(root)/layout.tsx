import { Footer, Header } from '@/shared/components/shared'
import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Fast Food Store | Главная',
}

export default function HomeLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode
	modal: React.ReactNode
}>) {
	return (
		<main className='min-h-screen flex flex-col'>
			<Suspense>
				<Header />
			</Suspense>
			<div className='flex-grow'>{children}</div>
			{modal}
			<Footer className='mt-auto' />
		</main>
	)
}
