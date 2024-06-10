import React from 'react'

import { useStateValue } from './StateProvider'
import Order from './Order'
import "./Orders.css"

function Orders() {

    const [{ orders }] = useStateValue()


    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders?.map((order, index) => (
                    <Order key={index} order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
