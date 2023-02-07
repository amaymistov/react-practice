import { Route } from 'react-router-dom'
import Header from './components/Header'
import Drawer from './components/Drawer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import AppContext from './context'

function App() {
	const [items, setItems] = useState([])
	const [cartItems, setCartItems] = useState([])
	const [favorites, setFavorites] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [cartOpen, setCartOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true)
			const cartResponse = await axios.get('https://63d1614d3f08e4a8ff96b9c5.mockapi.io/cart')
			const favoritesResponse = await axios.get('https://63d6a9c8e60d5743697cf129.mockapi.io/favorites')
			const itemsResponse = await axios.get('https://63d1614d3f08e4a8ff96b9c5.mockapi.io/items')

			setIsLoading(false)

			setCartItems(cartResponse.data)
			setFavorites(favoritesResponse.data)
			setItems(itemsResponse.data)
		}

		fetchData()
	}, [])

	const onAddToCart = async (obj) => {
		try {
			const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
			if (findItem) {
				setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))
				await axios.delete(`https://63d1614d3f08e4a8ff96b9c5.mockapi.io/cart/${findItem.id}`)
			} else {
				setCartItems((prev) => [...prev, obj])
				const { data } = await axios.post('https://63d1614d3f08e4a8ff96b9c5.mockapi.io/cart', obj)
				setCartItems((prev) => prev.map(item => {
					if (item.parentId === data.parentId) {
						return {
							...item,
							id: data.id
						}
					}
					return item
				}))
			}
		} catch (error) {
			console.error(error)
			alert('Неудалось добавить товар в корзину')
		}
	}

	const onRemoveItem = async (id) => {
		await axios.delete(`https://63d1614d3f08e4a8ff96b9c5.mockapi.io/cart/${id}`)
		setCartItems(cartItems.filter(item => Number(item.id) !== Number(id)))
	}

	const onAddToFavorite = async (obj) => {
		console.error('favoriteObj', obj)
		try {
			if (favorites.find((favorite) => Number(favorite.id) === Number(obj.id))) {
				await axios.delete(`https://63d6a9c8e60d5743697cf129.mockapi.io/favorites/${obj.id}`)
				setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
			} else {
				const { data } = await axios.post('https://63d6a9c8e60d5743697cf129.mockapi.io/favorites', obj)
				setFavorites(prev => [...prev, data])
			}
		} catch (error) {
			console.error(error)
			alert('Не удалось добавить в закладки')
		}
	}

	const onSearchValue = (event) => {
		setSearchValue(event.target.value)
	}

	const isItemAdded = (id) => {
		return cartItems.some(obj => Number(obj.parentId) === Number(id))
	}

	return (
		<AppContext.Provider
			value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpen, setCartItems }}>
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
						favorites={favorites}
						cartItems={cartItems}
						isLoading={isLoading}
					/>
				</Route>
				<Route path='/favorites'>
					<Favorites />
				</Route>
			</div>
		</AppContext.Provider>
	)
}

export default App
