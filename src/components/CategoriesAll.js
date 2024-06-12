import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import UseWindowWidth from './WindowWidth';
import UseScrollPosition from './Scroll';
import Newsletter from './Newsletter';
import BottomHeader from './BottomHeader';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const CategoriesAll = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        props.updatePrevPage("/categories/all");
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
            <div className="middle">ALL</div>
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
                    <Card widthPhone={widthPhone} img="/static/media/lamp2.jpeg" title="Ceramic Whisper Pendant Lamp" price="$354"/>
                    <Card widthPhone={widthPhone} img="/static/media/skincream.jpeg" title="Anti-Aging, Microbiome Cream" price="$68"/>
                    <Card widthPhone={widthPhone} img="/static/media/oil.jpeg" title="Jimmy Boyd Body oil 2000ml" price="$30"/>
                    <Card widthPhone={widthPhone} img="/static/media/toaster.jpeg" title="GE Stainless Steel Toaster" price="$49"/>
                    <Card widthPhone={widthPhone} img="/static/media/cabinet2.jpeg" title="Oak Sauder Collection Bookcase" price="$649"/>
                    <Card widthPhone={widthPhone} img="/static/media/cutting.jpeg" title="Ironwood Charleston Board" price="$117"/>
                    <Card widthPhone={widthPhone} img="/static/media/whitechair.jpg" title="Traditional Armchair" price="$93"/>
                    <Card widthPhone={widthPhone} img="/static/media/chanel.jpeg" title="Boy De Chanel Toning Lotion" price="$65"/>
                    <Card widthPhone={widthPhone} img="/static/media/dome.jpeg" title="Matt Black Dome Pendant" price="$460"/>
                    <Card widthPhone={widthPhone} img="/static/media/spanish2.jpeg" title="Natural Leather Spanish Chair" price="$5040"/>
                    <Card widthPhone={widthPhone} img="/static/media/skin.jpeg" title="Blue Lagoon Skincare Lotion" price="$60"/>
                    <Card widthPhone={widthPhone} img="/static/media/cow2.jpg" title="Authentic Cowhide Leather Chair" price="$1158"/>
                    <Card widthPhone={widthPhone} img="/static/media/china.jpeg" title="Oneida Moda 65-Piece Set" price="$145"/>
                    <Card widthPhone={widthPhone} img="/static/media/vase.jpeg" title="Cube Lolo Vase Black" price="$263"/>
                    <Card widthPhone={widthPhone} img="/static/media/shelve.jpeg" title="Insight Series Four Shelf" price="$148"/>
                    <Card widthPhone={widthPhone} img="/static/media/key.jpeg" title="Wireless Mechanical Keyboard" price="$49"/>
                    <Card widthPhone={widthPhone} img="/static/media/chairspecial.jpeg" title="Kaydan Chair" price="$1598"/>
                    <Card widthPhone={widthPhone} img="/static/media/light1.jpeg" title="Here Comes the Sun Pendant" price="$1304"/>
                    <Card widthPhone={widthPhone} img="/static/media/tv2.jpeg" title="FHD Flat-Screem Moniter" price="$143"/>
                </div>
            </div>
            <div className="spacer"></div>
            <Newsletter />
            <BottomHeader widthPhone={widthPhone}/>
        </div>
    );
}

export default CategoriesAll;