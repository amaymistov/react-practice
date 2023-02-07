import Card from '../components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Orders() {
	const [orders, setOrders] = useState([])
	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get('https://63d6a9c8e60d5743697cf129.mockapi.io/orders')
				setOrders(data.map((obj) => obj.items).flat())
			} catch (error) {
				alert('Ощибка при запросе заказов')
				console.error(error)
			}

		})()
	}, [])
	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between'>
				<h1>Мои заказы</h1>
			</div>
			<div className='d-flex items flex-wrap'>
				{orders
					.map((item, index) => (
						<Card
							key={index}
							{...item}
						/>
					))}
			</div>
		</div>
	)
}

export default Orders