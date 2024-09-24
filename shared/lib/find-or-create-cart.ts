import { prismaControllers } from '@/prisma/controllers'

export const findOrCreateCart = async (token: string) => {
	const { cart } = prismaControllers

	let userCart = await cart.getByToken(token)

	if (!userCart) {
		userCart = await cart.create(token)
	}
	return userCart
}
