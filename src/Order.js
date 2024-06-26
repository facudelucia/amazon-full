import React from 'react'
import moment from "moment"
import CurrencyFormat from "react-currency-format"
import CheckoutProduct from "./CheckoutProduct"
import "./Order.css"

function Order({ order }) {

    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.basket?.map(item => (
                <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order total: {value}</h3>
                )}
                decimalScale={2}
                value={order.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order
