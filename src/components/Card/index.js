import { useState } from 'react'

import styles from './Card.module.scss'

function Index({ id, title, price, image, onAddCard, onAddFavorites, favorited = false }) {
	const [isAdded, setIsAdded] = useState()
	const [isFavorite, setIsFavorite] = useState(favorited)

	const onAddedCard = () => {
		onAddCard({ title, price, image })
		setIsAdded(!isAdded)
	}

	const onAddedFavorite = () => {
		onAddFavorites({ id, title, price, image })
		setIsFavorite(!isFavorite)
	}

	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img
					src={isFavorite ? '/img/addFavorite.svg' : '/img/favorite.svg'}
					height='20px' alt='Unliked'
					onClick={onAddedFavorite} />
			</div>
			<img width={133} height={112} src={image} alt={title} />
			<h5>{title}</h5>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{price} руб.</b>
				</div>
				<img className={styles.addCard} width={32} height={32} onClick={onAddedCard}
						 src={isAdded ? '/img/checked.svg' : '/img/plus.svg'}
						 alt='add cart' />
			</div>
		</div>
	)
}

export default Index