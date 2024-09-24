import { prismaControllers } from '@/prisma/controllers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	const { user, verificationCode: verificationCodeTable } = prismaControllers
	try {
		const code = ''

		if (!code) {
			return NextResponse.json({ error: 'Неверный код' }, { status: 400 })
		}

		const verificationCode = await verificationCodeTable.find(code)

		if (!verificationCode) {
			return NextResponse.json({ error: 'Неверный код' }, { status: 400 })
		}

		await user.updateById(verificationCode.userId, { verified: new Date() })

		await verificationCodeTable.delete(verificationCode.id)

		return NextResponse.redirect(new URL('/?verified', req.url))
	} catch (error) {
		console.error(error)
		console.log('[VERIFY_GET] Server error', error)
	}
}
