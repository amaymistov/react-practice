import styles from "./Card.module.scss"

function Index({title, price, image}) {
    return (
        <div className={styles.card}>
            <div className="favorite">
                <img src="/img/favorite.svg" height="20px" alt="Unliked"/>
            </div>
            <img width={133} height={112} src={image} alt={title}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="add cart"/>
                </button>
            </div>
        </div>
    )
}

export default Index;