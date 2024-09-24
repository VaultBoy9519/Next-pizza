import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import { prismaControllers } from '@/prisma/controllers'
import { UserRole } from '@prisma/client'
import { compare, hashSync } from 'bcrypt'

export const authOptions: AuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_ID || '',
			clientSecret: process.env.GITHUB_SECRET || '',
			profile(profile) {
				return {
					id: profile.id,
					name: profile.name || profile.login,
					email: profile.email,
					image: profile.avatar_url,
					role: 'USER' as UserRole,
				}
			},
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials) {
					return null
				}

				const { user } = prismaControllers

				const findUser = await user.find({
					email: credentials.email,
				})

				if (!findUser) {
					return null
				}

				const isPasswordValid = await compare(credentials.password, findUser.password)

				if (!isPasswordValid) {
					return null
				}

				if (!findUser.verified) {
					return null
				}

				return {
					id: findUser.id,
					email: findUser.email,
					name: findUser.fullName,
					role: findUser.role,
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async signIn({ user, account }) {
			const { user: userTable } = prismaControllers
			try {
				if (account?.provider === 'credentials') {
					return true
				}

				if (!user.email) {
					return false
				}

				const findUser = await userTable.findByEmailOrProviders({ email: user.email, provider: account?.provider, providerId: account?.providerAccountId })

				if (findUser) {
					await userTable.updateById(findUser.id, { provider: account?.provider, providerId: account?.providerAccountId })

					return true
				}

				const { email, name, id } = user
				const fullName = name || 'User #' + id
				const hashedPassword = hashSync(user.id.toString(), 10)

				await userTable.create(email, fullName, hashedPassword, account?.provider, account?.providerAccountId)

				return true
			} catch (error) {
				console.error('Error [SIGNIN]', error)
				return false
			}
		},
		async jwt({ token }) {
			if (!token.email) {
				return token
			}
			const { user } = prismaControllers
			const findUser = await user.find({ email: token.email })

			if (findUser) {
				token.id = String(findUser.id)
				token.email = findUser.email
				token.fullName = findUser.fullName
				token.role = findUser.role
			}

			return token
		},
		session({ session, token }) {
			if (session?.user) {
				session.user.id = token.id
				session.user.role = token.role
			}

			return session
		},
	},
}
