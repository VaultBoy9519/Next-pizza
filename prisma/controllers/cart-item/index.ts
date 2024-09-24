import { prisma } from '@/prisma/prisma-client'

export class CartItem {
	async clear(cartId: number) {
		return await prisma.cartItem.deleteMany({
			where: {
				cartId,
			},
		})
	}

	async findItem(cartId: number, productItemId: number, ingredients?: number[]) {
		return await prisma.cartItem.findFirst({
			where: {
				cartId,
				productItemId,
				ingredients: {
					every: {
						id: { in: ingredients },
					},
				},
			},
		})
	}

	async findItemById(id: number) {
		return await prisma.cartItem.findFirst({
			where: {
				id,
			},
		})
	}

	async deleteItemById(id: number) {
		return await prisma.cartItem.delete({
			where: {
				id,
			},
		})
	}

	async updateQuantity(id: number, quantity: number) {
		return await prisma.cartItem.update({
			where: {
				id,
			},
			data: {
				quantity,
			},
		})
	}

	async create(
		cartId: number,
		productItemId: number,
		quantity: number,
		ingredients?: {
			id: number
		}[],
	) {
		return await prisma.cartItem.create({
			data: {
				cartId,
				productItemId,
				quantity,
				ingredients: { connect: ingredients },
			},
		})
	}
}
