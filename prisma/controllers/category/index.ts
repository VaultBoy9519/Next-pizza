import { prisma } from '@/prisma/prisma-client'

export class Category {
	async getAll({ ingredients, sizes, pizzaTypes, minPrice, maxPrice }: { ingredients?: number[]; sizes?: number[]; pizzaTypes?: number[]; minPrice: number; maxPrice: number }) {
		return await prisma.category.findMany({
			include: {
				products: {
					orderBy: {
						id: 'desc',
					},
					where: {
						ingredients: ingredients
							? {
									some: {
										id: {
											in: ingredients,
										},
									},
							  }
							: undefined,
						items: {
							some: {
								size: {
									in: sizes,
								},
								pizzaType: {
									in: pizzaTypes,
								},
								price: {
									gte: minPrice,
									lte: maxPrice,
								},
							},
						},
					},
					include: {
						ingredients: true,
						items: {
							where: {
								price: {
									gte: minPrice,
									lte: maxPrice,
								},
							},
							orderBy: {
								price: 'asc',
							},
						},
					},
				},
			},
		})
	}
}
