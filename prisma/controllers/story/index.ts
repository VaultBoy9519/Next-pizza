import { prisma } from '@/prisma/prisma-client'

export class Story {
	async getAll() {
		return await prisma.story.findMany({
			include: {
				items: true,
			},
		})
	}
}
