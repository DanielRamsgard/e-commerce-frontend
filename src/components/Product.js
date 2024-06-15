import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import UseWindowWidth from './WindowWidth';
import UseScrollPosition from './Scroll';
import Newsletter from './Newsletter';
import BottomHeader from './BottomHeader';
import CustomCarousel from './CarouselCustom';
import BuyProduct from './BuyProduct';

const Product = (props) => {
    useEffect(() => {
        props.updatePrevPage("/product");
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const scrollPosition = UseScrollPosition();
    const [scroll, setScroll] = useState(false);
    const widthBoolNav = UseWindowWidth(700);
    const widthPhone = UseWindowWidth(300);
    const widthThree = UseWindowWidth(450);
    const widthScreen = UseWindowWidth(1150);
    const widthSmall = UseWindowWidth(1150);
    const widthText = UseWindowWidth(500);
    const widthSmallSmall = UseWindowWidth(350);

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
                <NavBar cartTwo={props.cartTwo} updateCartTwo={props.updateCartTwo} total={props.total} cartCount={props.cartCount} prevPage={props.prevPage} widthBool={widthBoolNav}/>
            </div>
            <div className="spacer"></div>
            <div className="spacer-2"></div>
            <BuyProduct updateTotal={props.updateTotal} total={props.total} updateCartTwo={props.updateCartTwo} cartCount={props.cartCount} setCartCount={props.setCartCount} size={props.size} weight={props.weight} texture={props.texture} title={props.title} price={props.price} description={props.description} imgThree={props.imgThree} imgTwo={props.imgTwo} imgOne={props.imgOne} widthThree={widthThree} widthScreen={widthScreen} widthSmall={widthSmall} widthText={widthText} widthSmallSmall={widthSmallSmall}/>
            <div className="spacer"></div>
            <div className="trend-container">
                <div className="trend">
                    <div className="trend-text">
                        Trending Now
                    </div>
                </div>
            </div>
            <div className="spacer-2"></div>
            <CustomCarousel updateProduct={props.updateProduct} widthPhone={widthPhone}/>
            <div className="spacer"></div>
            <Newsletter />
            <BottomHeader widthPhone={widthPhone}/>
        </div>
    );
}

export default Product;