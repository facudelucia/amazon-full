import React from 'react'
import { useStateValue } from './StateProvider'
import "./Product.css"



function Product({ id, title, price, image, rating }) {

    const [{ }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                price,
                image,
                rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <p>{"⭐".repeat(rating)}</p>
                </div>
            </div>
            <img src={image} />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
