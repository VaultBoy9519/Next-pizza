import { prisma } from '@/prisma/prisma-client'
import { OrderStatus } from '@prisma/client'

export class Order {
	async create(token: string, fullName: string, email: string, phone: string, address: string, totalAmount: number, items: string, comment?: string) {
		return await prisma.order.create({
			data: {
				token,
				fullName,
				email,
				phone,
				address,
				comment,
				totalAmount,
				status: OrderStatus.PENDING,
				items,
			},
		})
	}

	async findById(id: number) {
		return await prisma.order.findFirst({
			where: {
				id,
			},
		})
	}

	async updateById(id: number, { paymentId, status }: { paymentId?: string; status?: OrderStatus }) {
		return await prisma.order.update({
			where: { id },
			data: {
				paymentId,
				status,
			},
		})
	}
}
