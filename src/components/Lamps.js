import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import UseWindowWidth from './WindowWidth';
import UseScrollPosition from './Scroll';
import Newsletter from './Newsletter';
import BottomHeader from './BottomHeader';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Lamps = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        props.updatePrevPage("/categories/lamps");
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
                <NavBar updateTotal={props.updateTotal} updateCartContent={props.updateCartContent} cartContent={props.cartContent} updateCartTwo={props.updateCartTwo} cartTwo={props.cartTwo} total={props.total} cartCount={props.cartCount} prevPage={props.prevPage} widthBool={widthBoolNav}/>
            </div>
            <div className="spacer"></div>
            <div className="spacer-2"></div>
            <div className="middle">LAMPS</div>
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
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/lamp2.jpeg" imgTwo="/static/media/lamp.jpeg" imgThree="/static/media/lamp1.jpeg" title="Ceramic Whisper Pendant Lamp" price={354} texture="Clay" weight="7kg" size="10cm x 10cm" description="The Ceramic Whisper Pendant Lamp elegantly illuminates any space with its soft, diffused light. Crafted from high-quality ceramic, its minimalist design complements modern interiors, making it an ideal choice for dining areas, kitchens, or cozy corners."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/dome.jpeg" imgTwo="/static/media/dome1.jpeg" imgThree="/static/media/dome2.jpeg" title="Matt Black Dome Pendant" price={460} texture="Clay" weight="20kg" size="30cm x 30cm" description="The Matt Black Dome Pendant adds a touch of modern elegance to any space. Its sleek, matte finish and minimalist design provide a sophisticated ambiance. Perfect for kitchens, dining areas, or living rooms, enhancing your home's contemporary aesthetic beautifully."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/light1.jpeg" imgTwo="/static/media/light.jpeg" imgThree="/static/media/light2.jpeg" title="Here Comes the Sun Pendant" price={1304} texture="Clay" weight="15kg" size="12cm x 12cm" description="The Here Comes the Sun Pendant radiates warmth and charm with its sun-inspired design. Crafted from durable materials, its artistic silhouette enhances any space with a touch of celestial elegance. Ideal for lighting up dining areas or cozy nooks, creating a welcoming ambiance wherever it shines."/>
                </div>
            </div>
            <div className="spacer"></div>
            <Newsletter />
            <BottomHeader widthPhone={widthPhone}/>
        </div>
    );
}

export default Lamps;