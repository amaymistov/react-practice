import Info from './Info'
import { useContext, useState } from 'react'
import AppContext from '../context'
import axios from 'axios'

function Drawer({ closeCart, items, removeItem }) {
	const { cartItems, setCartItems } = useContext(AppContext)
	const [orderId, setOrderId] = useState(null)
	const [isOrderCompleted, setIsOrderCompleted] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const onClickOrder = async () => {

		try {
			setIsLoading(true)
			const { data } = await axios.post('https://63d6a9c8e60d5743697cf129.mockapi.io/orders', {
				items: cartItems
			})
			await axios.put('https://63d1614d3f08e4a8ff96b9c5.mockapi.io/cart', [])
			setOrderId(data.id)
			setIsOrderCompleted(true)
			setCartItems([])
		} catch (error) {
			console.error(error)
			alert('Не удалось оформить заказ')
		}
		setIsLoading(false)
	}

	return (
		<div className='overlay'>
			<div className='drawer d-flex flex-column'>
				<div className='d-flex align-center justify-between'>
					<h2>Корзина</h2>
					<img className='removeButton' src='/img/removeBtn.svg' alt='Close' onClick={closeCart} />
				</div>
				{items.length > 0
					? (
						<>
							<div className='items d-flex flex-column'>
								{items.map(item => (
									<div key={item.id} className='cartItem d-flex align-center'>
										<img width={70} height={70} src={item.image} alt={item.image} />
										<div>
											<p className='mb-5'>{item.title}</p>
											<b>{item.price}</b>
										</div>
										<img className='removeButton' src='/img/removeBtn.svg' alt='Remove'
												 onClick={() => removeItem(item.id)} />
									</div>
								))}
							</div>
							<div className='cartTotalBlock'>
								<ul className='d-flex flex-column'>
									<li>
										<span>Итого: </span>
										<div></div>
										<b>21 498 руб. </b>
									</li>
									<li>
										<span>Налог 5%: </span>
										<div></div>
										<b>1074 руб. </b>
									</li>
								</ul>
								<button disabled={isLoading} onClick={onClickOrder} className='greenButton'>
									Оформить заказ
									<img src='/img/arrow.svg' alt='Arrow' />
								</button>
							</div>
						</>
					)
					: <Info
						title={isOrderCompleted ? 'Заказ оформлен!' : 'Корзина пустая'}
						description={isOrderCompleted
							? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
							: 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
						image={isOrderCompleted ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'}
					/>
				}
			</div>
		</div>
	)
}

export default Drawer