import React, { useState } from 'react';
import CartCard from './CartCard';
import UseWindowWidth from './WindowWidth';
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {
    const [boolOne, setBoolOne] = useState(false);
    const [boolTwo, setBoolTwo] = useState(false);
    const [boolThree, setBoolThree] = useState(false);
    const [congrats, setCongrats] = useState(false);
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const stringItem = () => {
        let itemList = ""
        let i = 0
        const max = props.cartContent.length

        for (let item of props.cartContent) {
            if (i === max - 1) {
                itemList += ", and " + item.title;
                return itemList;
            }
            (i > 0 && item.quantity > 0) ? itemList += ", " + item.title : itemList += item.title;
            i += 1;
          }
    }

    const handleCheckout = async () => {
        const items = stringItem();

        if (boolOne && boolTwo && boolThree) {
            setCongrats(true);
            
            setTimeout(() => {
                setCongrats(false);
            }, 5000);

            try {
                const url = 'http://3.238.248.235:8000/order/'; 
                const orderData = {
                    email: email, 
                    total: props.total,  
                    item_list: items,  
                    address: address  
                };
                const requestOptions = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orderData)
                };
                const res = await fetch(url, requestOptions);
                if (!res.ok) {
                    throw new Error('Failed to send email');  // Handle error if fetch request fails
                }
    
                // Handle success if needed
                console.log('Email sent successfully');

            } catch (err) {
                console.log(err);
            }
        }
    }

    const countQuant = () => {
        let quant = 0
        // eslint-disable-next-line
        props.cartContent.map((item) => {
            quant += item.quantity;
        })
        return quant
    }

    const navigate = useNavigate();
    const widthCart = UseWindowWidth(500);
    const [checkout, setCheckout] = useState(false);

    return (
        <>
            <div className="cart-container" onClick={() => {props.updateCart(false); setCheckout(false); props.updateCartTwo(false)}}></div>
                <div className={widthCart ? "cart-container-3" : "cart-container-2"}>
                    <div className="cart-content-container">
                        <div className="text-container-cart">
                            <div className="your">
                            Your Shopping Cart ({countQuant()})
                            </div>
                            <div className="cart-2" onClick={() => {props.updateCart(false); setCheckout(false); props.updateCartTwo(false)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                            </div>
                        </div>
                        {countQuant() === 0 ?
                        <>
                            <div className="cart-img-container">
                                <div className="cart-img-container-2">
                                    <img className="cart-img-container-3" alt="Empty Cart" src="/static/media/emptyBlack.png"></img>
                                </div>
                                <div className="your pad">
                                    Your Cart is Empty
                                </div>
                                <div className="pad-top">
                                    
                                    <button className="shop-now" onClick={() => {props.updateCartTwo(false); props.updateCart(false); navigate("/categories/all")}}>
                                        SHOP NOW
                                    </button>
                                </div>
                            </div>
                        </> 
                        : 
                        <>
                            <div className="content-cards-container">
                                {props.cartContent.map((item) => {
                                    if (item.quantity !== 0) {
                                        
                                        return <CartCard updateTotal={props.updateTotal} updateCartContent={props.updateCartContent} total={props.total} img={item.img} title={item.title} price={item.price} quantity={item.quantity} key={item.img}/>
                                    } else {
                                        // eslint-disable-next-line
                                        return;
                                    }
                                    
                                })}
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
                                            <button className="shop-now shop-now-2" onClick={() => {setCheckout(false)}}>
                                                <svg className="pad-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                                                </svg>
                                                Back to Cart
                                            </button>
                                            <div className="input-container">
                                                <div className="quant-price quant-price-ship">
                                                    Shipping Info.
                                                </div>
                                                <input className="subscribe-news-new" placeholder="your@email.com" id="input-email" onChange={(e) => { setBoolOne(e.target.value.trim().length > 0); setEmail(e.target.value); }}></input>
                                                <input className="subscribe-news-new" placeholder="# Address, Unit #, City, ZIP, Country" id="input-address" onChange={(e) => { setBoolTwo(e.target.value.trim().length > 0); setAddress(e.target.value); }}></input>
                                                <input className="subscribe-news-new" placeholder="Credit Card #" id="input-credit-card" onChange={(e) => { setBoolThree(e.target.value.trim().length > 0) }}></input>
                                                <button className={congrats ? "shop-now shop-now-2 shop-now-3 subscribe-news-new congrats" : "shop-now shop-now-2 shop-now-3 subscribe-news-new"} onClick={handleCheckout}>
                                                {congrats ? "Your order is on its way!" : "Checkout Now"}
                                            </button>
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
                                            <svg className="pad-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                            </svg>
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