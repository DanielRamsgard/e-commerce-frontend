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
                    <Card widthPhone={widthPhone} img="/static/media/chair.jpeg" title="Little Armchair Sheepskin" price="$489"/>
                    <Card widthPhone={widthPhone} img="/static/media/whitechair.jpg" title="Traditional Armchair" price="$93"/>
                    <Card widthPhone={widthPhone} img="/static/media/spanish2.jpeg" title="Natural Leather Spanish Chair" price="$5040"/>
                    <Card widthPhone={widthPhone} img="/static/media/cow2.jpg" title="Authentic Cowhide Leather Chair" price="$1158"/>
                    <Card widthPhone={widthPhone} img="/static/media/chairspecial.jpeg" title="Kaydan Chair" price="$1598"/>
                </div>
            </div>
            <div className="spacer"></div>
            <Newsletter />
            <BottomHeader widthPhone={widthPhone}/>
        </div>
    );
}

export default Chairs;