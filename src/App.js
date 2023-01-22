function App() {
    return (<div className="wrapper clear">
        <div className="overlay">
            <div className="drawer d-flex flex-column">
                <div className="d-flex align-center justify-between">
                    <h2>Корзина</h2>
                    <img className="removeButton" src="/img/removeBtn.svg" alt="Remove"/>
                </div>
                <div className="items d-flex flex-column">
                    <div className="cartItem d-flex align-center">
                        <img width={70} height={70} src="/img/sneakers/1.jpg" alt="1"/>
                        <div>
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeButton" src="/img/removeBtn.svg" alt="Remove"/>
                    </div>
                    <div className="cartItem d-flex align-center">
                        <img width={70} height={70} src="/img/sneakers/2.jpg" alt="2"/>
                        <div>
                            <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="removeButton" src="/img/removeBtn.svg" alt="Remove"/>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul className="d-flex flex-column">
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
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Оформить заказ"/></button>
                </div>
            </div>
        </div>
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt="Sneakers shop"/>
                <div>
                    <h3>React Sneakers</h3>
                    <p className="opacity-5">Магазин эксклюзивных кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} height={18} src="/img/cart.svg"/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg"/>
                </li>
            </ul>
        </header>
        <div className="content p-40">
            <div className="d-flex align-center justify-between">
                <h1>Все кроссовки</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input type="text" placeholder="Поиск"/>
                </div>
            </div>
            <div className="d-flex justify-center items">
                <div className="card">
                    <div className="favorite">
                        <img src="/img/favorite.svg" height="20px" alt="Unliked"/>
                    </div>
                    <img width={133} height={112} src="/img/sneakers/1.jpg" alt="1"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="add cart"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/2.jpg" alt="2"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="add cart"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/3.jpg" alt="3"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="add cart"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/4.jpg" alt="4"/>
                    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>12 999 руб.</b>
                        </div>
                        <button className="button">
                            <img width={11} height={11} src="/img/plus.svg" alt="add cart"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default App;
