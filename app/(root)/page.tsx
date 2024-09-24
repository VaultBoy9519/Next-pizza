import { Container, Filters, ProductsGroupList, Stories, Title, TopBar } from '@/shared/components/shared'
import { findPizzas } from '@/shared/lib'
import { GetSearchParams } from '@/shared/lib/find-pizzas'

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
	const categories = await findPizzas(searchParams)

	return (
		<div className='mx-10 lg:mx-5'>
			<Container className='mt-10'>
				<Title text='Все товары' size='lg' className='font-extrabold' />
			</Container>
			<TopBar categories={categories.filter(category => category.products.length > 0)} />

			<Stories />
			<Container className='pb-14 mt-10'>
				<div className='flex gap-[60px]'>
					<div className='w-[250px] hidden lg:block'>
						<Filters />
					</div>

					<div className='flex-1'>
						<div className='flex flex-col gap-20'>
							{categories.map(category => category.products.length > 0 && <ProductsGroupList key={category.id} title={category.name} categoryId={category.id} items={category.products} />)}
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
