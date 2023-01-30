import { Link } from 'react-router-dom'

function Header({ openCart }) {
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
					<span>1205 руб.</span>
				</li>
				<li>
					<Link to='/favorites'>
						<img width={18} height={18} src='/img/heart.svg' alt='favorite' />
					</Link>
				</li>
				<li>
					<img width={18} height={18} src='/img/user.svg' alt='user' />
				</li>
			</ul>
		</header>
	)
}

export default Header