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
        props.updatePrevPage("/categories/all");
        window.scrollTo(0, 0);
      }, [props]);

    const scrollPosition = UseScrollPosition();
    const [scroll, setScroll] = useState(false);
    const widthBoolNav = UseWindowWidth(700);
    const widthPhone = UseWindowWidth(300);
    const widthThree = UseWindowWidth(450);

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
                <NavBar prevPage={props.prevPage} widthBool={widthBoolNav}/>
            </div>
            <div className="spacer"></div>
            <div className="spacer-2"></div>
            <BuyProduct widthThree={widthThree}/>
            <div className="spacer"></div>
            <div className="trend-container">
                <div className="trend">
                    <div className="trend-text">
                        Trending Now
                    </div>
                </div>
            </div>
            <div className="spacer-2"></div>
            <CustomCarousel widthPhone={widthPhone}/>
            <div className="spacer"></div>
            <Newsletter />
            <BottomHeader widthPhone={widthPhone}/>
        </div>
    );
}

export default Product;