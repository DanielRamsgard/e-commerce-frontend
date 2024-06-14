import React from 'react';
import CartCard from './CartCard';

const Cart = (props) => {
    return (
        <>
            <div className="cart-container"></div>
            <div className="cart-container-2">
                <div className="cart-content-container">
                    <div className="text-container-cart">
                        <div className="your">
                            {`Your Shopping Cart (${props.cartCount})`}
                        </div>
                        <div className="cart-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </div>
                    </div>
                    <div className="content-cards">

                    </div>
                    <div className="total">

                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;