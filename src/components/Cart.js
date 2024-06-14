import React, { useState } from 'react';
import CartCard from './CartCard';

const Cart = (props) => {
    const [checkout, setCheckout] = useState(false);

    return (
        <>
            <div className="cart-container" onClick={() => {props.setCart(false); setCheckout(false)}}></div>
                <div className="cart-container-2">
                    <div className="cart-content-container">
                        <div className="text-container-cart">
                            <div className="your">
                                {`Your Shopping Cart (${props.cartCount})`}
                            </div>
                            <div className="cart-2" onClick={() => {props.setCart(false); setCheckout(false)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </div>
                        </div>
                        {props.cartCount === 0 ?
                        <>
                            <div className="cart-img-container">
                                <div className="cart-img-container-2">
                                    <img className="cart-img-container-3" alt="Empty Cart" src="/static/media/emptyBlack.png"></img>
                                </div>
                                <div className="your pad">
                                    Your Cart is Empty
                                </div>
                                <div className="pad-top">
                                    <button className="shop-now" onClick={() => {props.setCart(false)}}>
                                        SHOP NOW
                                    </button>
                                </div>
                            </div>
                        </> 
                        : 
                        <>
                            <div className="content-cards-container">
                            
                            </div>
                            {checkout ? 
                                <>
                                    <div className="total-container-new">
                                        <div className="bar-cart"></div>
                                        <div className="bottom-content-container">
                                            <div className="bottom-content-container-2">
                                                <div className="quant-price">
                                                    Subtotal
                                                </div>
                                                <div>
                                                    <div className="quant-price">
                                                        ${props.total.toString() + ".00"}
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="shop-now shop-now-2" onClick={() => {/* send info to server */}}>
                                                Checkout Now
                                            </button>
                                            <div className="input-container">
                                                <div className="quant-price quant-price-ship">
                                                    Shipping Info.
                                                </div>
                                                <input className="subscribe-news-new" placeholder="your@email.com" id="input-email"></input>
                                                <input className="subscribe-news-new" placeholder="Number Street Name, City, ZIP Code, Country" id="input-email"></input>
                                                <input className="subscribe-news-new" placeholder="Credit Card Number" id="input-email"></input>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            :
                                <div className="total-container">
                                    <div className="bar-cart"></div>
                                    <div className="bottom-content-container">
                                        <div className="bottom-content-container-2">
                                            <div className="quant-price">
                                                Subtotal
                                            </div>
                                            <div>
                                                <div className="quant-price">
                                                    ${props.total.toString() + ".00"}
                                                </div>
                                            </div>
                                        </div>
                                        <button className="shop-now shop-now-2" onClick={() => {setCheckout(true)}}>
                                            Go To Checkout
                                        </button>
                                    </div>
                                </div>
                            }
                        </>}
                    </div>
                </div>
        </>
    );
}

export default Cart;