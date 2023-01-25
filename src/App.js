import Index from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12990, image: '/img/sneakers/1.jpg'},
    {title: 'Мужские Кроссовки Nike Air Max 270', price: 12990, image: '/img/sneakers/2.jpg'},
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8990, image: '/img/sneakers/3.jpg'},
    {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8990, image: '/img/sneakers/4.jpg'}
]

function App() {
    return (<div className="wrapper clear">
        <Drawer/>
        <Header/>
        <div className="content p-40">
            <div className="d-flex align-center justify-between">
                <h1>Все кроссовки</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input type="text" placeholder="Поиск"/>
                </div>
            </div>
            <div className="d-flex justify-center items">
                {arr.map((item) => (
                    <Index key={item.image} title={item.title} price={item.price} image={item.image}/>
                ))}
            </div>
        </div>
    </div>);
}

export default App;
