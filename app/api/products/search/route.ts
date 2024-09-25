import { prismaControllers } from '@/prisma/controllers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get('query') || ''
	const products = await prismaControllers.product.getByCountWithQuery(query, 5)
	return NextResponse.json(products)
}
