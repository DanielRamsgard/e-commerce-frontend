import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import UseWindowWidth from './WindowWidth';
import UseScrollPosition from './Scroll';
import Newsletter from './Newsletter';
import BottomHeader from './BottomHeader';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Electronics = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        props.updatePrevPage("/categories/electronics");
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
            <div className="middle">ELECTRONICS</div>
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
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/tv2.jpeg" imgTwo="/static/media/tv1.jpeg" imgThree="/static/media/tv.jpeg" title="FHD Flat-Screem Moniter" price={143} texture="Plastics" weight="8kg" size="30cm x 15cm" description="The FHD Flat-Screen Monitor combines crisp Full HD resolution with sleek, space-saving design. Ideal for work or entertainment, its vibrant display ensures clarity and detail. Perfect for enhancing productivity or enjoying multimedia, providing a modern visual experience with minimal footprint."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/key.jpeg" imgTwo="/static/media/key1.jpeg" imgThree="/static/media/key2.jpeg" title="Wireless Mechanical Keyboard" price={49} texture="Plastics" weight="3kg" size="30cm x 10cm" description="The Wireless Mechanical Keyboard combines responsive typing with cable-free convenience. Featuring tactile switches for a satisfying keystroke feel, it offers freedom of movement without sacrificing performance. Perfect for gamers and professionals alike, ensuring seamless connectivity and precise control in any workspace."/>
                </div>
            </div>
            <div className="spacer"></div>
            <Newsletter />
            <BottomHeader widthPhone={widthPhone}/>
        </div>
    );
}

export default Electronics;