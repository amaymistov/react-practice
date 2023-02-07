import Card from '../components/Card'
import { useContext } from 'react'
import AppContext from '../context'

function Favorites() {
	const { favorites, onAddToFavorite } = useContext(AppContext)
	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between'>
				<h1>Мои закладки</h1>
			</div>
			<div className='d-flex items flex-wrap'>
				{favorites
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