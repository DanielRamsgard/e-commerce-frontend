import React from 'react';

const SmallCallToAction = (props) => {
    return (
            <>  
                <div className="container-container">
                    <div className="container-wallpaper">
                        <div className="wallpaper-new">
                            <div className="info-container">
                                <div className="header">
                                    {props.text}
                                </div>
                                <div className="call-action">
                                    Our roducts are all made to standard sizes so that you can mix and match them freely.
                                </div>
                                <button className="shop-now">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
}

export default SmallCallToAction;