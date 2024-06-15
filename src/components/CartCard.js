import React from 'react';

const CartCard = (props) => {
    return (
        <>
            <div className="cart-card-container">
                <div className="left-cart-card">
                    <img className="img-cart-card" alt="Card" src={props.img}></img>
                </div>
                <div className="right-cart-card">
                    <div className="right-cart-card-2">
                        <div>
                            <div className="cart-card-text-two">
                            {props.title}
                            </div>
                        </div>
                        <div className="cart-card-text cart-text-two">
                            <div className="cart-text">
                            {"$" + props.price + ".00"}
                            </div>
                        </div>
                    </div>
                    <div className="right-cart-card-2">
                        <div className="">
                            <div className="quant-change-container">
                                    <div className="left-right-control left new-size" onClick={() => {}}>
                                        -
                                    </div>
                                    <div className="middle-number left-right-control new-size">
                                        1
                                    </div>
                                    <div className="left-right-control right new-size" onClick={() => {}}>
                                        +
                                    </div>
                                </div>
                        </div>
                        <div className="">
                            <svg className="x" xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartCard;