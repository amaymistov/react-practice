import {useState} from "react";

import styles from "./Card.module.scss"

function Index({title, price, image, onAddCard, onFavorite}) {
    const [isAdded, setIsAdded] = useState();

    const onAddedCard = () => {
        onAddCard({title, price, image})
        setIsAdded(!isAdded)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/favorite.svg" height="20px" alt="Unliked" onClick={onFavorite}/>
            </div>
            <img width={133} height={112} src={image} alt={title}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img className={styles.addCard} width={32} height={32} onClick={onAddedCard}
                     src={isAdded ? "/img/checked.svg" : "/img/plus.svg"}
                     alt="add cart"/>
            </div>
        </div>
    )
}

export default Index;