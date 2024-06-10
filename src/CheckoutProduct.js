import React from 'react'
import { useStateValue } from './StateProvider'
import "./CheckoutProduct.css"

function CheckoutProduct({ id, title, price, rating, image, hideButton }) {

    const [{ }, dispatch] = useStateValue()

    const RemoveFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    <p>{"⭐".repeat(rating)}</p>
                </div>
                {!hideButton && (<button onClick={RemoveFromBasket}>Remove from basket</button>)}

            </div>
        </div>
    )
}

export default CheckoutProduct
