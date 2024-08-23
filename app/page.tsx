import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>
			<TopBar />

			<Container className='pb-14 mt-10'>
				<div className='flex gap-[60px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/* Товары */}
					<div className='flex-1'>
						<div className='flex flex-col gap-20'>
							<ProductsGroupList
								title='Пиццы'
								categoryId={1}
								items={[
									{ id: 1, name: 'Пицца 1', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif', price: 100, items: [{ price: 100 }] },
									{ id: 2, name: 'Пицца 2', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEBEEDA4B0427DB077A5ADBD30D154.avif', price: 200, items: [{ price: 200 }] },
									{ id: 3, name: 'Пицца 3', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', price: 200, items: [{ price: 300 }] },
									{ id: 4, name: 'Пицца 4', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif', price: 200, items: [{ price: 400 }] },
								]}
							/>
							<ProductsGroupList
								title='Завтрак'
								categoryId={2}
								items={[
									{ id: 1, name: 'Пицца 1', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif', price: 100, items: [{ price: 100 }] },
									{ id: 2, name: 'Пицца 2', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEBEEDA4B0427DB077A5ADBD30D154.avif', price: 200, items: [{ price: 200 }] },
									{ id: 3, name: 'Пицца 3', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif', price: 200, items: [{ price: 300 }] },
									{ id: 4, name: 'Пицца 4', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif', price: 200, items: [{ price: 400 }] },
								]}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
