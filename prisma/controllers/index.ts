import { Cart } from './cart'

class PrismaControllers {
	public cart: Cart

	constructor() {
		this.cart = new Cart()
	}
}

export const prismaControllers = new PrismaControllers()
