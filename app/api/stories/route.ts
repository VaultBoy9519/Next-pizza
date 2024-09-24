import { prismaControllers } from '@/prisma/controllers'
import { NextResponse } from 'next/server'

export async function GET() {
	const stories = await prismaControllers.story.getAll()

	return NextResponse.json(stories)
}
