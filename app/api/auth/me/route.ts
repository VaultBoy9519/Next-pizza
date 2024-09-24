import { prismaControllers } from '@/prisma/controllers'
import { getUserSession } from '@/shared/lib/get-user-session'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
	const { user: userTable } = prismaControllers
	try {
		const user = await getUserSession()

		if (!user) {
			return NextResponse.json({ message: 'Вы не авторизованы' }, { status: 401 })
		}

		const data = await userTable.findUnique(Number(user.id))

		return NextResponse.json(data)
	} catch (error) {
		console.log(error)
		return NextResponse.json({ message: '[USER_GET] Server error' }, { status: 500 })
	}
}
