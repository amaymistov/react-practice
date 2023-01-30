import { Route } from 'react-router-dom'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [favorites, setFavorites] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [cartOpen, setCartOpen] = useState(false)

	useEffect(() => {
		axios
			.get('https://63d1614d3f08e4a8ff96b9c5.mockapi.io/items')
			.then(res => setItems(res.data))
		axios
			.get('https://63d1614d3f08e4a8ff96b9c5.mockapi.io/cart')
			.then(res => setCartItems(res.data))
		axios
			.get('https://63d6a9c8e60d5743697cf129.mockapi.io/favorites')
			.then(res => setFavorites(res.data))
	}, [])

	const onAddToCart = (obj) => {
		axios.post('https://63d1614d3f08e4a8ff96b9c5.mockapi.io/cart', obj)
		setCartItems(prev => [...prev, obj])
	}

	const onRemoveItem = (id) => {
		axios.delete(`https://63d1614d3f08e4a8ff96b9c5.mockapi.io/cart/${id}`)
		setCartItems(cartItems.filter(item => item.id !== id))
	}

	const onAddToFavorite = async (obj) => {

		try {
			if (favorites.find((favoritteObj) => favoritteObj.id === obj.id)) {
				axios.delete(`https://63d6a9c8e60d5743697cf129.mockapi.io/favorites/${obj.id}`)
			} else {
				const { data } = await axios.post('https://63d6a9c8e60d5743697cf129.mockapi.io/favorites', obj)
				setFavorites(prev => [...prev, data])
			}
		} catch (error) {
			console.log(error)
			alert('Не удалось добавить в закладки')
		}
	}

	const onSearchValue = (event) => {
		setSearchValue(event.target.value)
	}

	return (
		<div className='wrapper clear'>
			{cartOpen && <Drawer items={cartItems} closeCart={() => setCartOpen(false)} removeItem={onRemoveItem} />}
			<Header openCart={() => setCartOpen(true)} />
			<Route path='/' exact>
				<Home
					items={items}
					searchValue={searchValue}
					onAddToCart={onAddToCart}
					onAddToFavorite={onAddToFavorite}
					onSearchValue={onSearchValue}
					setSearchValue={setSearchValue}
				/>
			</Route>
			<Route path='/favorites'>
				<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
			</Route>
		</div>)
}

export default App
