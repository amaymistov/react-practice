import { Link } from 'react-router-dom'
import { useCart } from '../Hooks/useCart'

function Header({ openCart }) {
	const { totalPrice } = useCart()
	return (
		<header className='d-flex justify-between align-center p-40'>
			<Link to='/'>
				<div className='d-flex align-center'>
					<img width={40} height={40} src='/img/logo.png' alt='Sneakers shop' />
					<div>
						<h3>React Sneakers</h3>
						<p className='opacity-5'>Магазин эксклюзивных кроссовок</p>
					</div>
				</div>
			</Link>
			<ul className='d-flex'>
				<li className='mr-30 cu-p' onClick={openCart}>
					<img width={18} height={18} src='/img/cart.svg' alt='cart' />
					<span>{totalPrice} руб.</span>
				</li>
				<li>
					<Link to='/favorites'>
						<img width={18} height={18} src='/img/heart.svg' alt='favorite' />
					</Link>
				</li>
				<li>
					<Link to='/orders'>
						<img width={18} height={18} src='/img/user.svg' alt='user' />
					</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header