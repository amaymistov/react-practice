import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [favorites, setFavorites] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [cartOpen, setCartOpen] = useState(false)
	console.log(favorites)
	useEffect(() => {
		axios
			.get('https://63d1614d3f08e4a8ff96b9c5.mockapi.io/items')
			.then(res => setItems(res.data))
		axios
			.get('https://63d1614d3f08e4a8ff96b9c5.mockapi.io/cart')
			.then(res => setCartItems(res.data))
	}, [])

	const onAddToCart = (obj) => {
		axios.post('https://63d1614d3f08e4a8ff96b9c5.mockapi.io/cart', obj)
		setCartItems(prev => [...prev, obj])
	}

	const onRemoveItem = (id) => {
		axios.delete(`https://63d1614d3f08e4a8ff96b9c5.mockapi.io/cart/${id}`)
		setCartItems(cartItems.filter(item => item.id !== id))
	}

	const onAddToFavorite = (obj) => {
		axios.post('https://63d6a9c8e60d5743697cf129.mockapi.io/favorites', obj)
		setFavorites(prev => [...prev, obj])
	}

	const onSearchValue = (event) => {
		setSearchValue(event.target.value)
	}

	return (
		<div className='wrapper clear'>
			{cartOpen && <Drawer items={cartItems} closeCart={() => setCartOpen(false)} removeItem={onRemoveItem} />}
			<Header openCart={() => setCartOpen(true)} />
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
					{items
						.filter((item) => item.title.toLowerCase().includes(searchValue))
						.map((item) => (
							<Card
								key={item.id}
								title={item.title}
								price={item.price}
								image={item.image}
								onAddCard={(item) => onAddToCart(item)}
								onAddFavorites={(item) => onAddToFavorite(item)}
							/>
						))}
				</div>
			</div>
		</div>)
}

export default App
