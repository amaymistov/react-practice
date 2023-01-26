import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";

function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        fetch('https://63d1614d3f08e4a8ff96b9c5.mockapi.io/items').then(res => {
            return res.json()
        }).then(json => {
            setItems(json)
        })
    }, [])

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj])
    }

    return (
        <div className="wrapper clear">
            {cartOpen && <Drawer items={cartItems} closeCart={() => setCartOpen(false)}/>}
            <Header openCart={() => setCartOpen(true)}/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search"/>
                        <input type="text" placeholder="Поиск"/>
                    </div>
                </div>
                <div className="d-flex justify-between items flex-wrap">
                    {items.map((item) => (
                        <Card key={item.title} title={item.title} price={item.price} image={item.image}
                              onAddCard={(item) => onAddToCart(item)}/>
                    ))}
                </div>
            </div>
        </div>);
}

export default App;
