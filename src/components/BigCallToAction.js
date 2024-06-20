import React from 'react';
import { useNavigate } from 'react-router-dom';

const BigCallToAction = (props) => {
    const navigate = useNavigate();

    if (props.bool){
        return (
            <> 
                <div className="container-container">
                    <div className="container-wallpaper">
                        <div className="wallpaper">
                            <div className="info-container">
                                <div className="header">
                                    {props.text}
                                </div>
                                <div className="call-action">
                                    Our roducts are all made to standard sizes so that you can mix and match them freely.
                                </div>
                                <button className="shop-now" onClick={() => {navigate("/categories/all")}}>
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                        <div className="wallpaper-container-img">
                            <img alt="Wallpaper" className="wallpaper-img" src={props.img}></img>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="container-container">
                    <div className="container-wallpaper">
                        <div className="wallpaper-container-img">
                            <img alt="Wallpaper" className="wallpaper-img" src={props.img}></img>
                        </div>
                        <div className="wallpaper">
                            <div className="info-container">
                                <div className="header">
                                    {props.text}
                                </div>
                                <div className="call-action">
                                    Our roducts are all made to standard sizes so that you can mix and match them freely.
                                </div>
                                <button className="shop-now" onClick={() => {navigate("/categories/all")}}>
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default BigCallToAction;