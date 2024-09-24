import { prisma } from '@/prisma/prisma-client'

export class Product {
	async findItemsAndIngredients(id: number) {
		return await prisma.product.findFirst({
			where: {
				id,
			},
			include: {
				ingredients: true,
				items: true,
			},
		})
	}

	async findWithCategories(id: number) {
		return await prisma.product.findFirst({
			where: { id },
			include: {
				ingredients: true,
				category: {
					include: {
						products: {
							include: {
								items: true,
							},
						},
					},
				},
				items: true,
			},
		})
	}

	async getByCountWithQuery(query: string, count: number) {
		return await prisma.product.findMany({
			where: {
				name: {
					contains: query,
					mode: 'insensitive',
				},
			},
			take: count,
		})
	}
}
