import React, { useState } from 'react';

const BuyProduct = (props) => {
    const [num, setNum] = useState(1);
    const [img, setImg] = useState("/static/media/spanish2.jpeg");

    const decreaseNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }

    const increaseNum = () => {
        if (num < 100) {
            setNum(num + 1);
        }
    }

    return (
        <>
            <div className="product-buy-container">
                <div className={ props.widthScreen ? "product-buy-container-two-new" : "product-buy-container-two"}>
                    <div className={ props.widthSmall ? "product-title-text-new" : "product-title-text"}> Comfy Chair </div>
                    <div className={ props.widthSmall ? "product-images-container-new" : "product-images-container"}>
                        <div className="product-images-container-2">
                            <div className={ props.widthSmall ? "product-big-image-container-new" : "product-big-image-container"}>
                                <img src={img} className="product-image-check"></img>
                            </div>
                            <div className="spacer-2"></div>
                            <div className={ props.widthSmallSmall ? "three-max-image-container-new" : "three-max-image-container"}>
                                <div className="product-image-check-container" onMouseOver={() => { setImg("/static/media/spanish.jpeg"); }}>
                                    <img src="/static/media/spanish.jpeg" className="product-image-check"></img>
                                </div>
                                <div className="product-image-check-container" onMouseOver={() => { setImg("/static/media/spanish1.jpeg"); }}>
                                    <img src="/static/media/spanish1.jpeg" className="product-image-check"></img>
                                </div>
                                <div className="product-image-check-container" onMouseOver={() => { setImg("/static/media/spanish2.jpeg"); }}>
                                    <img src="/static/media/spanish2.jpeg" className="product-image-check"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={props.widthSmall ? "product-info-container-new" : "product-info-container"}>
                        <div className={props.widthSmall ? "product-info-container-2-new" : "product-info-container-2"}>
                            <div className={props.widthSmall ? "product-description-container-new" : "product-description-container"}>
                                <div className="product-description">
                                Sink into the plush cushions, enveloped in soft, velvety upholstery that invites you to unwind after a long day. The ergonomic design ensures optimal support for your back, neck, and shoulders, promoting relaxation and reducing strain.

    
                                </div>
                            </div>
                            <div className={props.widthText ? "quantity-container-new" : "quantity-container"}>
                                <div className={props.widthScreen ? "quant-price-new" : "quant-price"}>
                                    Quantity
                                </div>
                                <div className="quant-change-container">
                                    <div className="left-right-control left" onClick={decreaseNum}>
                                        -
                                    </div>
                                    <div className="middle-number left-right-control">
                                        {num}
                                    </div>
                                    <div className="left-right-control right" onClick={increaseNum}>
                                        +
                                    </div>
                                </div>
                                <div className={props.widthScreen ? "quant-price-new" : "quant-price"}>
                                    $119.00
                                </div>
                            </div>
                            <div className={props.widthSmall ? "add-to-cart-container-new" : "add-to-cart-container"}>
                                <div className="add-to-cart">
                                    ADD TO CART
                                </div>
                                <div className="buy-now">
                                    BUY NOW
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className={ props.widthThree ? "context-container-new" : "context-container"}>
                    <div className={ props.widthThree ? "context-container-2-new" : "context-container-2"}>
                        <div className="context-container-3">
                            <div className="mini-title"> Texture: </div>
                            <div className="mini-mini-title"> Comfy Material </div>

                        </div>
                    </div>
                    <div className={ props.widthThree ? "context-container-2-new" : "context-container-2"}>
                        <div className="context-container-3">
                            <div className="mini-title"> Weight: </div>
                            <div className="mini-mini-title"> 25kg </div>

                        </div>
                    </div>
                    <div className={ props.widthThree ? "context-container-2-new" : "context-container-2"}>
                        <div className="context-container-3">
                            <div className="mini-title"> Test: </div>
                            <div className="mini-mini-title"> 60cm x 30cm </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BuyProduct;