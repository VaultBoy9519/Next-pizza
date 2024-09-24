import { prisma } from '@/prisma/prisma-client'

export class VerificationCode {
	async create(code: string, userId: number) {
		return await prisma.verificationCode.create({
			data: {
				code,
				userId,
			},
		})
	}

	async find(code: string) {
		return await prisma.verificationCode.findFirst({
			where: {
				code,
			},
		})
	}

	async delete(id: number) {
		return await prisma.verificationCode.delete({
			where: {
				id,
			},
		})
	}
}
