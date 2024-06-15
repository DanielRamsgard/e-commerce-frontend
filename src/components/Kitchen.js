import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import UseWindowWidth from './WindowWidth';
import UseScrollPosition from './Scroll';
import Newsletter from './Newsletter';
import BottomHeader from './BottomHeader';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Kitchen = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        props.updatePrevPage("/categories/kitchen");
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
                <NavBar cartContent={props.cartContent} updateCartTwo={props.updateCartTwo} cartTwo={props.cartTwo} total={props.total} cartCount={props.cartCount} prevPage={props.prevPage} widthBool={widthBoolNav}/>
            </div>
            <div className="spacer"></div>
            <div className="spacer-2"></div>
            <div className="middle">KITCHEN</div>
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
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/toaster.jpeg" imgTwo="/static/media/toaster1.jpeg" imgThree="/static/media/toaster2.jpeg" title="GE Stainless Steel Toaster" price={49} texture="Aluminum" weight="10kg" size="20cm x 12cm" description="The GE Stainless Steel Toaster combines sleek design with functionality. It features multiple browning settings for perfect toast every time, along with wide slots for various bread types. Durable and easy to clean, it's a stylish addition to any kitchen."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/cutting.jpeg" imgTwo="/static/media/cutting1.jpeg" imgThree="/static/media/cutting2.jpeg" title="Ironwood Charleston Board" price={117} texture="Spruce Wood" weight="2kg" size="20cm x 18cm" description="The Ironwood Charleston Board is a premium cutting and serving board, crafted from high-quality ironwood. Its durable construction and elegant grain patterns make it perfect for both kitchen prep and stylish presentation, enhancing any culinary experience."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/china.jpeg" imgTwo="" imgThree="" title="Oneida Moda 65-Piece Set" price={145} texture="Porcelain" weight="10kg" size="20cm x 20cm" description="The Oneida Moda 65-Piece Set offers timeless elegance and practicality. Crafted from fine china, it includes essential dining pieces for 12 settings. Perfect for formal occasions or everyday use, it elevates dining experiences with sophisticated style and lasting quality."/>
                </div>
            </div>
            <div className="spacer"></div>
            <Newsletter />
            <BottomHeader widthPhone={widthPhone}/>
        </div>
    );
}

export default Kitchen;