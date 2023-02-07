import Card from '../components/Card'

function Home({
								items,
								searchValue,
								onAddToCart,
								onAddToFavorite,
								onSearchValue,
								setSearchValue,
								favorites,
								isLoading
							}) {
	const renderItems = () => {
		const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue))
		return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
			<Card
				key={index}
				onAddCard={(item) => onAddToCart(item)}
				onAddFavorites={(item) => onAddToFavorite(item)}
				favorited={favorites.some(obj => Number(obj.id) === Number(item.id))}
				loading={isLoading}
				{...item}
			/>
		))
	}
	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between'>
				<h1>Все кроссовки</h1>
				<div className='search-block d-flex'>
					<img src='/img/search.svg' alt='Search' />
					{searchValue &&
						<img className='removeButton' onClick={() => setSearchValue('')} src='/img/removeBtn.svg'
								 alt='Clear' />}
					<input onChange={onSearchValue} value={searchValue} type='text' placeholder='Поиск' />
				</div>
			</div>
			<div className='d-flex items flex-wrap'>
				{renderItems()}
			</div>
		</div>
	)
}

export default Home