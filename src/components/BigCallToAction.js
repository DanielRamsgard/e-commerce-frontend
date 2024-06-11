import React from 'react';

const BigCallToAction = (props) => {
    if (props.bool){
        return (
            <>
                <div className="container-wallpaper">
                    <div className="wallpaper">
                        <div className="header">
                            {props.text}
                        </div>
                        <div className="call-action">
                            Our roducts are all made to standard sizes so that you can mix and match them freely.
                        </div>
                        <div className="shop-now-container">
                            <button className="shop-now">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                    <div>
                        <img className="wallpaper" src={props.img}></img>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="container-wallpaper">
                    <div>
                        <img className="wallpaper" src={props.img}></img>
                    </div>
                    <div className="wallpaper">
                        <div className="header-two">
                            {props.text}
                        </div>
                        <div className="call-action">
                            Our roducts are all made to standard sizes so that you can mix and match them freely.
                        </div>
                        <div className="shop-now-container">
                            <button className="shop-now">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default BigCallToAction;