import React from 'react'
import Product from './Product'
import "./Home.css"

function Home() {

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
            
            <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How constant innovation creates radically successful businesses paperback"
                    price={11.99}
                    image={"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}
                    rating={5}
                />
                <Product 
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Mixer Kitchen with K-beater, Dough hook and whisk, 5 litre glass bowl"
                    price={239.0}
                    rating={4}
                    image={"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"}
                    
                />
            </div>
            <div className="home__row">
                <Product 
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved Led Gaming Monitor"
                    price={199.99}
                    image={"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}
                    rating={3}
                />
                <Product 
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    image={"https://media.very.co.uk/i/very/P6LTG_5Q1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}
                    rating={5}
                />
                <Product 
                    id="3254354345"
                    title="New Apple Ipad Pro (12.9-inch, Wi-Fi, 128gb) - Silver (4th generation)"
                    price={598.99}
                    image={"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX835_.jpg"}
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product 
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved Led Gaming Monitor"
                    price={1094.99}
                    image={"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"}
                    rating={5}
                />
            </div>
        </div>
        </div>
    )
}

export default Home
