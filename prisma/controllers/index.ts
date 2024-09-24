import { Cart } from './cart'
import { CartItem } from './cart-item'
import { Category } from './category'
import { Ingredient } from './ingredient'
import { Order } from './order'
import { Product } from './product'
import { Story } from './story'
import { User } from './user'
import { VerificationCode } from './verification-code'

class PrismaControllers {
	public cart: Cart
	public cartItem: CartItem
	public category: Category
	public ingredient: Ingredient
	public order: Order
	public product: Product
	public story: Story
	public user: User
	public verificationCode: VerificationCode

	constructor() {
		this.cart = new Cart()
		this.cartItem = new CartItem()
		this.category = new Category()
		this.ingredient = new Ingredient()
		this.order = new Order()
		this.product = new Product()
		this.story = new Story()
		this.user = new User()
		this.verificationCode = new VerificationCode()
	}
}

export const prismaControllers = new PrismaControllers()
