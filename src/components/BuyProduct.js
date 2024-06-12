import React from 'react';

const BuyProduct = (props) => {
    return (
        <>
            <div className="product-buy-container">
                <div className={ props.widthScreen ? "product-buy-container-two-new" : "product-buy-container-two"}>
                    <div className="product-title-text"> Comfy Chair </div>
                    <div className="product-images-container">
                        <div className="product-images-container-2">
                            <div className="product-big-image-container">
                                <img src="/static/media/spanish2.jpeg" className="product-image-check"></img>
                            </div>
                            <div className="spacer-2"></div>
                            <div className="three-max-image-container">
                                <div className="product-image-check-container">
                                    <img src="/static/media/spanish.jpeg" className="product-image-check"></img>
                                </div>
                                <div className="product-image-check-container">
                                    <img src="/static/media/spanish1.jpeg" className="product-image-check"></img>
                                </div>
                                <div className="product-image-check-container">
                                    <img src="/static/media/spanish2.jpeg" className="product-image-check"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-info-container">
                        <div className="product-info-container-2">
                            <div className="product-description-container">
                                <div className="product-description">
                                Sink into the plush cushions, enveloped in soft, velvety upholstery that invites you to unwind after a long day. The ergonomic design ensures optimal support for your back, neck, and shoulders, promoting relaxation and reducing strain.

    
                                </div>
                            </div>
                            <div className="quantity-container">
                                <div className={props.widthScreen ? "quant-price-new" : "quant-price"}>
                                    Quantity
                                </div>
                                <div className="quant-change-container">
                                    <div className="left-right-control left">
                                        -
                                    </div>
                                    <div className="middle-number left-right-control">
                                        1
                                    </div>
                                    <div className="left-right-control right">
                                        +
                                    </div>
                                </div>
                                <div className={props.widthScreen ? "quant-price-new" : "quant-price"}>
                                    $119.00
                                </div>
                            </div>
                            <div className="add-to-cart-container">
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