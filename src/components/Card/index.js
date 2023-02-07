import { useContext } from 'react'

import styles from './Card.module.scss'
import Loader from '../Loader'
import AppContext from '../../context'

function Card({
								 id,
								 title,
								 price,
								 image,
								 onAddCard,
								 onAddFavorites,
								 loading = false
							 }) {
	const { isItemAdded, isFavoriteAdded } = useContext(AppContext)
	const obj = { id, parentId: id, title, price, image }

	const onAddedCard = () => {
		onAddCard(obj)
	}

	const onAddedFavorite = () => {
		onAddFavorites(obj)
	}

	return (
		<div className={styles.card}>
			{loading ? <Loader /> : (
				<>
					<div className={styles.favorite}>
						{onAddFavorites && (
							<img
								src={isFavoriteAdded(id) ? '/img/addFavorite.svg' : '/img/favorite.svg'}
								height='20px'
								alt='Unliked'
								onClick={onAddedFavorite} />)}
					</div>
					<img width={133} height={112} src={image} alt={title} />
					<h5>{title}</h5>
					<div className='d-flex justify-between align-center'>
						<div className='d-flex flex-column'>
							<span>Цена:</span>
							<b>{price} руб.</b>
						</div>
						{onAddCard && (
							<img
								className={styles.addCard}
								width={32}
								height={32}
								onClick={onAddedCard}
								src={isItemAdded(id) ? '/img/checked.svg' : '/img/plus.svg'}
								alt='add cart' />)}
					</div>
				</>
			)}
		</div>
	)
}

export default Card