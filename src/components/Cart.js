import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Newsletter from './Newsletter';
import BottomHeader from './BottomHeader';
import UseWindowWidth from './WindowWidth';
import UseScrollPosition from './Scroll';

const Cart = (props) => {
    props.updatePrevPage("/cart");
    const widthBoolNav = UseWindowWidth(700);
    const [scroll, setScroll] = useState(false);
    const scrollPosition = UseScrollPosition();
    const widthPhone = UseWindowWidth(300);

    useEffect(() => {
        if (scrollPosition > 20) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }, [scrollPosition]);

    return (
        <div>
            <div className={scroll ? "nav-bar-small" : "nav-bar"}>
                <NavBar cartCount={props.cartCount} prevPage={props.prevPage} widthBool={widthBoolNav}/>
            </div>
            <div className="cart-content-container">
                <div className="cart-content-container-left">
                    <div className="spacer-2"></div>
                    <div className="spacer"></div>
                    <div className="left-content-cart">

                    </div>
                    <div className="spacer"></div>
                </div>
                <div className="cart-content-container-right">
                    <div className="spacer-2"></div>
                    <div className="spacer"></div>
                    <div className="right-content-cart">

                    </div>
                    <div className="spacer"></div>
                </div>
            </div>
            <Newsletter />
            <BottomHeader widthPhone={widthPhone}/>
        </div>
    );

}

export default Cart;