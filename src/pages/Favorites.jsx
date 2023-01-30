import Card from '../components/Card'

function Favorites({ items, onAddToFavorite }) {
	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between'>
				<h1>Мои закладки</h1>
			</div>
			<div className='d-flex items flex-wrap'>
				{items
					.map((item) => (
						<Card
							key={item.id}
							favorited={true}
							onAddFavorites={onAddToFavorite}
							{...item}
						/>
					))}
			</div>
		</div>
	)
}

export default Favorites