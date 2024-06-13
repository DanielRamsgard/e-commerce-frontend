import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import UseWindowWidth from './WindowWidth';
import UseScrollPosition from './Scroll';
import Newsletter from './Newsletter';
import BottomHeader from './BottomHeader';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Chairs = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        props.updatePrevPage("/categories/chairs");
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
                <NavBar prevPage={props.prevPage} widthBool={widthBoolNav}/>
            </div>
            <div className="spacer"></div>
            <div className="spacer-2"></div>
            <div className="middle">CHAIRS</div>
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
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/chair.jpeg" imgTwo="/static/media/chair1.jpeg" imgThree="/static/media/chair2.jpeg" title="Little Armchair Sheepskin" price={489} texture="Sheepskin" weight="20kg" size="70cm x 70cm" description="Cozy and stylish, the Little Armchair Sheepskin is perfect for adding warmth and comfort to any space. Crafted with genuine sheepskin, it offers a luxurious, soft seating experience, ideal for nurseries, reading nooks, or living rooms."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/whitechair.jpg" imgTwo="" imgThree="" title="Traditional Armchair" price={93} texture="Cloth" weight="40kg" size="60cm x 55cm" description="The Traditional Armchair offers timeless elegance and comfort. Featuring a classic design with plush upholstery and sturdy wooden legs, it fits seamlessly into any decor. Perfect for living rooms or reading nooks, it provides a cozy and stylish seating option."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/spanish2.jpeg" imgTwo="/static/media/spanish1.jpeg" imgThree="/static/media/spanish.jpeg" title="Natural Leather Spanish Chair" price={5040} texture="Leather" weight="30kg" size="70cm x 60cm" description="The Natural Leather Spanish Chair combines timeless craftsmanship with modern comfort. Featuring high-quality leather and a sturdy wooden frame, it exudes elegance and durability. Ideal for living rooms or offices, it adds a touch of classic Spanish charm to any interior."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/cow2.jpg" imgTwo="" imgThree="" title="Authentic Cowhide Leather Chair" price={1158} texture="Leather" weight="35kg" size="50cm x 50cm" description="The Authentic Cowhide Leather Chair blends rustic charm with modern comfort. Made from genuine cowhide and a sturdy wooden frame, it offers durability and style. Perfect for any room, this chair adds a unique, natural touch to your décor."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone}imgOne="/static/media/chairspecial.jpeg" imgTwo="/static/media/chairspecial1.jpeg" imgThree="" title="Kaydan Chair" price={1598} texture="Cloth" weight="40kg" size="74cm x 66cm" description="The Kaydan Chair combines contemporary design with ergonomic comfort. Upholstered in plush fabric and supported by a sleek metal frame, it offers both style and support. Ideal for modern living spaces, bringing sophistication and relaxation together seamlessly."/>
                </div>
            </div>
            <div className="spacer"></div>
            <Newsletter />
            <BottomHeader widthPhone={widthPhone}/>
        </div>
    );
}

export default Chairs;