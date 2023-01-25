function Drawer() {
    return (
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
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Оформить заказ"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;