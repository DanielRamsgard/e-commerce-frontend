import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import UseWindowWidth from './WindowWidth';
import UseScrollPosition from './Scroll';
import Newsletter from './Newsletter';
import BottomHeader from './BottomHeader';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Skincare = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        props.updatePrevPage("/categories/skincare");
        window.scrollTo(0, 0);
      }, [props]);

    const scrollPosition = UseScrollPosition();
    const [scroll, setScroll] = useState(false);
    const widthBoolNav = UseWindowWidth(700);
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
                <NavBar total={props.total} cartCount={props.cartCount} prevPage={props.prevPage} widthBool={widthBoolNav}/>
            </div>
            <div className="spacer"></div>
            <div className="spacer-2"></div>
            <div className="middle">SKINCARE</div>
            <div className="spacer-2"></div>
            <div className="button-container-cat">
                <button className="cat-button" onClick={() => {navigate("/categories/all")}}> All </button>
                <button className="cat-button" onClick={() => {navigate("/categories/furniture")}}> Furniture </button>
                <button className="cat-button" onClick={() => {navigate("/categories/electronics")}}> Electronics </button>
                <button className="cat-button" onClick={() => {navigate("/categories/lamps")}}> Lamps </button>
                <button className="cat-button" onClick={() => {navigate("/categories/kitchen")}}> Kitchen </button>
                <button className="cat-button" onClick={() => {navigate("/categories/chairs")}}> Chairs </button>
                <button className="cat-button" onClick={() => {navigate("/categories/skincare")}}> Skincare </button>
            </div>
            <div className="spacer-2"></div>
            <div className="box">
                <div className="products-container" id="top">
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/skincream.jpeg" imgTwo="" imgThree="" title="Anti-Aging, Microbiome Cream" price={68} texture="Cream" weight="2kg" size="2cm x 2cm" description="Revitalize your skin with Anti-Aging Microbiome Cream. This innovative formula supports a balanced microbiome, reducing wrinkles and fine lines while enhancing skin’s natural radiance. Ideal for all skin types, it promotes a youthful, healthy complexion."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/oil.jpeg" imgTwo="" imgThree="" title="Jimmy Boyd Body oil 2000ml" price={30} texture="Oil" weight="1kg" size="3cm x 3cm" description="Indulge in luxury with Jimmy Boyd Body Oil. This 2000ml bottle provides long-lasting hydration, leaving skin soft and radiant. Infused with natural ingredients, it nourishes and revitalizes, making it perfect for daily use or special pampering."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/chanel.jpeg" imgTwo="/static/media/chanel1.jpeg" imgThree="/static/media/chanel2.jpeg" title="Boy De Chanel Toning Lotion" price={65} texture="Plastic" weight="1kg" size="5cm x 4cm" description="Boy De Chanel Toning Lotion revitalizes and refreshes your skin, leaving it hydrated and balanced. Infused with soothing ingredients, it minimizes pores and controls excess oil, offering a matt finish. Perfect for daily use, enhancing your skincare routine effortlessly."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/skin.jpeg" imgTwo="/static/media/skin1.jpeg" imgThree="/static/media/skin2.jpeg" title="Blue Lagoon Skincare Lotion" price={60} texture="Plastic" weight="2kg" size="4cm x 4cm" description="Blue Lagoon Skincare Lotion hydrates and rejuvenates your skin with natural minerals. Infused with algae extracts, it promotes a radiant, youthful complexion. Suitable for all skin types, this lotion provides deep moisture and revitalization for a healthy, glowing look."/>
                </div>
            </div>
            <div className="spacer"></div>
            <Newsletter />
            <BottomHeader widthPhone={widthPhone}/>
        </div>
    );
}

export default Skincare;