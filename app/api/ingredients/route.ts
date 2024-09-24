import { prismaControllers } from '@/prisma/controllers'
import { NextResponse } from 'next/server'

export async function GET() {
	const ingredients = await prismaControllers.ingredient.getAll()
	return NextResponse.json(ingredients)
}
