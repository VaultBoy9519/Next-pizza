import { prisma } from '@/prisma/prisma-client'

export class Ingredient {
	async getAll() {
		return await prisma.ingredient.findMany()
	}
}
