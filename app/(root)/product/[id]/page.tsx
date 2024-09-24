import { prismaControllers } from '@/prisma/controllers'
import { Container, ProductForm } from '@/shared/components/shared'
import { notFound } from 'next/navigation'

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
	const product = await prismaControllers.product.findWithCategories(Number(id))

	if (!product) {
		return notFound()
	}

	return (
		<Container className='flex flex-col my-10'>
			<ProductForm product={product} />
		</Container>
	)
}
