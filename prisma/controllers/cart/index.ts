import { prisma } from '@/prisma/prisma-client'

export class Cart {
	async getByToken(cartToken: string) {
		return await prisma.cart.findFirst({
			include: {
				user: true,
				items: {
					include: {
						ingredients: true,
						productItem: {
							include: {
								product: true,
							},
						},
					},
				},
			},
			where: {
				token: cartToken,
			},
		})
	}
	async clearTotalAmount(id: number) {
		return await prisma.cart.update({
			where: { id },
			data: {
				totalAmount: 0,
			},
		})
	}

	async deleteAllProducts(cartId: number) {
		return await prisma.cartItem.deleteMany({
			where: {
				cartId,
			},
		})
	}

	async create({ cartId, productItemId, quantity, ingredients }: { cartId: number; productItemId: number; quantity: number; ingredients: { connect: { id: number }[] } }) {
		return await prisma.cartItem.create({
			data: {
				cartId,
				productItemId,
				quantity,
				ingredients,
			},
		})
	}
}
