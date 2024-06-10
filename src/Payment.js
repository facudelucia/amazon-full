import React, { useState } from 'react'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import { Link, useHistory } from "react-router-dom"
import { CardElement } from '@stripe/react-stripe-js'
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer'
import "./Payment.css"

function Payment() {

    const history = useHistory()
    const [{ basket, user }, dispatch] = useStateValue()
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setProcessing(true)

        dispatch({
            type: "CREATE_ORDER",
            order: {
                basket: basket,
                amount: getBasketTotal(basket) * 100,
                created: new Date()
            }
        })

        setTimeout(() => {

            setSucceeded(true)
            setError(null)
            setProcessing(false)
            dispatch({
                type: "EMPTY_BASKET"
            })
            history.replace("/orders")

        }, 1200);

    }

    const handleChange = (e) => {
        setError(e.error ? e.error.message : "")
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className="payment__adress">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(({ id, title, price, image, rating }) => (
                            <CheckoutProduct
                                key={id}
                                id={id}
                                title={title}
                                price={price}
                                image={image}
                                rating={rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || succeeded}>{processing ? <p>processing...</p> : "Buy Now"}</button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
