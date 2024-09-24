import { Prisma } from '@prisma/client'
import { hashSync } from 'bcrypt'
import { categories, ingredients, products } from './constants'
import { prisma } from './prisma-client'

const randomDecimalNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
}

const generateProductItem = ({ productId, pizzaType, size }: { productId: number; pizzaType?: 1 | 2; size?: 20 | 30 | 40 }) => {
	return {
		productId,
		price: randomDecimalNumber(190, 600),
		pizzaType,
		size,
	} as Prisma.ProductItemUncheckedCreateInput
}

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'User Test',
				email: 'user@test.ru',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'USER',
			},
			{
				fullName: 'Admin Admin',
				email: 'admin@test.ru',
				password: hashSync('111111', 10),
				verified: new Date(),
				role: 'ADMIN',
			},
		],
	})

	await prisma.category.createMany({ data: categories })
	await prisma.ingredient.createMany({ data: ingredients })

	await prisma.product.createMany({ data: products })

	const pizza1 = await prisma.product.create({
		data: {
			name: 'Пепперони фреш',
			imageUrl: '/assets/pizzas/11EE7D6130241E75B0AB33725248C0D0.webp',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(0, 5),
			},
		},
	})

	const pizza2 = await prisma.product.create({
		data: {
			name: 'Сырная',
			imageUrl: '/assets/pizzas/11EE7D610D91679BB519F38C3F45880F.webp',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(5, 10),
			},
		},
	})

	const pizza3 = await prisma.product.create({
		data: {
			name: 'Чоризо фреш',
			imageUrl: '/assets/pizzas/11EE7D6170D5F99C89E91A2B3B91D16E.webp',
			categoryId: 1,
			ingredients: {
				connect: ingredients.slice(10, 40),
			},
		},
	})

	await prisma.productItem.createMany({
		data: [
			// Пицца "Пепперони фреш"
			generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
			generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
			generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),

			// Пицца "Сырная"
			generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
			generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

			// Пицца "Чоризо фреш"
			generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
			generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
			generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),

			// Остальные продукты
			generateProductItem({ productId: 1 }),
			generateProductItem({ productId: 2 }),
			generateProductItem({ productId: 3 }),
			generateProductItem({ productId: 4 }),
			generateProductItem({ productId: 5 }),
			generateProductItem({ productId: 6 }),
			generateProductItem({ productId: 7 }),
			generateProductItem({ productId: 8 }),
			generateProductItem({ productId: 9 }),
			generateProductItem({ productId: 10 }),
			generateProductItem({ productId: 11 }),
			generateProductItem({ productId: 12 }),
			generateProductItem({ productId: 13 }),
			generateProductItem({ productId: 14 }),
			generateProductItem({ productId: 15 }),
			generateProductItem({ productId: 16 }),
			generateProductItem({ productId: 17 }),
		],
	})

	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: '11111',
			},
			{
				userId: 2,
				totalAmount: 0,
				token: '222222',
			},
		],
	})

	await prisma.cartItem.create({
		data: {
			productItemId: 1,
			cartId: 1,
			quantity: 2,
			ingredients: {
				connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
			},
		},
	})

	await prisma.story.createMany({
		data: [
			{
				previewImageUrl: '/assets/stories/logo-350x440_1.webp',
			},
			{
				previewImageUrl: '/assets/stories/logo-350x440_2.webp',
			},
			{
				previewImageUrl: '/assets/stories/logo-350x440_3.webp',
			},
			{
				previewImageUrl: '/assets/stories/logo-350x440_4.webp',
			},
			{
				previewImageUrl: '/assets/stories/logo-350x440_5.webp',
			},
			{
				previewImageUrl: '/assets/stories/logo-350x440_6.webp',
			},
		],
	})

	await prisma.storyItem.createMany({
		data: [
			{
				storyId: 1,
				sourceUrl: '/assets/stories/story/oqx9feuljibke3mknab7ilb35t.webp',
			},
			{
				storyId: 1,
				sourceUrl: '/assets/stories/story/io7c5zarojdm7eus0trn7czdet.webp',
			},
			{
				storyId: 2,
				sourceUrl: '/assets/stories/story/zktyxdxnjqbzufonxd8ffk44cb.webp',
			},
			{
				storyId: 2,
				sourceUrl: '/assets/stories/story/uyqzmdojadcbw7o0a35ojxlcul.webp',
			},
			{
				storyId: 3,
				sourceUrl: '/assets/stories/story/oqx9feuljibke3mknab7ilb35t.webp',
			},
			{
				storyId: 3,
				sourceUrl: '/assets/stories/story/io7c5zarojdm7eus0trn7czdet.webp',
			},
			{
				storyId: 4,
				sourceUrl: '/assets/stories/story/zktyxdxnjqbzufonxd8ffk44cb.webp',
			},
			{
				storyId: 4,
				sourceUrl: '/assets/stories/story/uyqzmdojadcbw7o0a35ojxlcul.webp',
			},
			{
				storyId: 5,
				sourceUrl: '/assets/stories/story/oqx9feuljibke3mknab7ilb35t.webp',
			},
			{
				storyId: 5,
				sourceUrl: '/assets/stories/story/io7c5zarojdm7eus0trn7czdet.webp',
			},
			{
				storyId: 6,
				sourceUrl: '/assets/stories/story/zktyxdxnjqbzufonxd8ffk44cb.webp',
			},
			{
				storyId: 6,
				sourceUrl: '/assets/stories/story/uyqzmdojadcbw7o0a35ojxlcul.webp',
			},
		],
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Story" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "StoryItem" RESTART IDENTITY CASCADE`
}

async function main() {
	try {
		await down()
		await up()
	} catch (e: any) {
		console.log(e.message)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
