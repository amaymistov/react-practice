import { useContext } from 'react'
import AppContext from '../context'

function Info({ title, description, image }) {
	const { setCartOpen } = useContext(AppContext)
	return (
		<div className='emptyCart d-flex flex-column align-center justify-center'>
			<img width={120} src={image} alt='Empty cart' />
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<button onClick={() => setCartOpen(false)} className='greenButton'>
				<img src='/img/arrow.svg' alt='Arrow' />
				Вернуться назад
			</button>
		</div>
	)
}

export default Info