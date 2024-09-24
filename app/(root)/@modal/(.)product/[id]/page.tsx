import { prismaControllers } from '@/prisma/controllers'
import { ChooseProductModal } from '@/shared/components/shared'
import { notFound } from 'next/navigation'

export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
	const products = await prismaControllers.product.findWithCategories(Number(id))

	if (!products) {
		return notFound()
	}

	return <ChooseProductModal product={products} />
}
