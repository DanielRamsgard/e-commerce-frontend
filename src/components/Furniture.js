import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import UseWindowWidth from './WindowWidth';
import UseScrollPosition from './Scroll';
import Newsletter from './Newsletter';
import BottomHeader from './BottomHeader';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Furniture = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        props.updatePrevPage("/categories/furniture");
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
                <NavBar cartCount={props.cartCount} prevPage={props.prevPage} widthBool={widthBoolNav}/>
            </div>
            <div className="spacer"></div>
            <div className="spacer-2"></div>
            <div className="middle">FURNITURE</div>
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
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/cabinet2.jpeg" imgTwo="/static/media/cabinet1.jpeg" imgThree="/static/media/cabinet.jpeg" title="Oak Sauder Collection Bookcase" price={649} texture="Oak Wood" weight="35kg" size="130cm 120cm" description="The Oak Sauder Collection Bookcase blends classic design with practical storage. Crafted from sturdy oak, it features multiple adjustable shelves, accommodating books and decor. Its timeless style and durable construction make it a versatile addition to any room."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/vase.jpeg" imgTwo="" imgThree="" title="Cube Lolo Vase Black" price={263} texture="Clay" weight="10kg" size="14cm x 14cm" description="The Cube Lolo Vase in Black epitomizes modern elegance with its sleek, minimalist design. Crafted from high-quality ceramic, it adds a touch of sophistication to any space. Perfect for showcasing your favorite flowers or as a standalone decor piece, enhancing your home with understated charm."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/shelve.jpeg" imgTwo="" imgThree="" title="Insight Series Four Shelf" price={148} texture="Steel" weight="15kg" size="100cm x 15cm" description="The Insight Series Four Shelf unit combines contemporary design with practical functionality. Crafted from durable materials, it offers ample storage and display space. Ideal for organizing books, decor, or media, it enhances any room with modern style and versatility."/>
                </div>
            </div>
            <div className="spacer"></div>
            <Newsletter />
            <BottomHeader widthPhone={widthPhone}/>
        </div>
    );
}

export default Furniture;