import React from 'react';

const CartCard = () => {
    return (
        <>
            <div className="cart-card-container">
                <div className="left-cart-card">
                    <img className="img-cart-card" alt="Card" src="/static/media/chanel.jpeg"></img>
                </div>
                <div className="right-cart-card">
                    <div className="right-cart-card-2">
                        <div>
                            <div className="cart-card-text-two">
                            Boy De Chanel Toning Lotion
                            </div>
                        </div>
                        <div className="cart-card-text cart-text-two">
                            <div className="cart-text">
                            $5868
                            </div>
                        </div>
                    </div>
                    <div className="right-cart-card-2">
                        <div className="">

                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartCard;