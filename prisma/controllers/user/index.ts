import { prisma } from '@/prisma/prisma-client'

export class User {
	async create(email: string, fullName: string, password: string, provider?: string, providerId?: string) {
		return await prisma.user.create({
			data: {
				email,
				fullName,
				password,
				verified: new Date(),
				provider,
				providerId,
			},
		})
	}

	async updateById(
		id: number,
		{ fullName, email, password, verified, provider, providerId }: { fullName?: string; email?: string; password?: string; verified?: Date; provider?: string; providerId?: string },
	) {
		return await prisma.user.update({
			where: {
				id,
			},
			data: {
				fullName,
				email,
				password,
				verified,
				provider,
				providerId,
			},
		})
	}

	async find({ email, id }: { email?: string; id?: number }) {
		return await prisma.user.findFirst({
			where: {
				email,
				id,
			},
		})
	}

	async findByEmailOrProviders({ email, provider, providerId }: { email: string; provider?: string; providerId?: string }) {
		return await prisma.user.findFirst({
			where: {
				OR: [{ provider, providerId }, { email }],
			},
		})
	}

	async findUnique(id: number) {
		return await prisma.user.findUnique({
			where: {
				id,
			},
			select: {
				fullName: true,
				email: true,
				password: false,
			},
		})
	}
}
