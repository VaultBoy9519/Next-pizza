import { prisma } from '@/prisma/prisma-client'

export class Cart {
	async getByToken(token: string) {
		return await prisma.cart.findFirst({
			where: { token },
		})
	}

	async getByTokenWithItems(cartToken: string) {
		return await prisma.cart.findFirst({
			include: {
				user: true,
				items: {
					include: {
						productItem: {
							include: {
								product: true,
							},
						},
						ingredients: true,
					},
				},
			},
			where: {
				token: cartToken,
			},
		})
	}

	async getByTokenSorted(cartToken: string) {
		return await prisma.cart.findFirst({
			where: {
				token: cartToken,
			},
			include: {
				items: {
					orderBy: {
						createdAt: 'desc',
					},
					include: {
						productItem: {
							include: {
								product: true,
							},
						},
						ingredients: true,
					},
				},
			},
		})
	}

	async updateTotalAmount(id: number, totalAmount: number) {
		return await prisma.cart.update({
			where: {
				id,
			},
			data: {
				totalAmount,
			},
			include: {
				items: {
					orderBy: {
						createdAt: 'desc',
					},
					include: {
						productItem: {
							include: {
								product: true,
							},
						},
						ingredients: true,
					},
				},
			},
		})
	}

	async create(token: string) {
		return await prisma.cart.create({
			data: {
				token,
			},
		})
	}
}
