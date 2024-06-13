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
                <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/chair.jpeg" imgTwo="/static/media/chair1.jpeg" imgThree="/static/media/chair2.jpeg" title="Little Armchair Sheepskin" price={489} texture="Sheepskin" weight="20kg" size="70cm x 70cm" description="Cozy and stylish, the Little Armchair Sheepskin is perfect for adding warmth and comfort to any space. Crafted with genuine sheepskin, it offers a luxurious, soft seating experience, ideal for nurseries, reading nooks, or living rooms."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/lamp2.jpeg" imgTwo="/static/media/lamp.jpeg" imgThree="/static/media/lamp1.jpeg" title="Ceramic Whisper Pendant Lamp" price={354} texture="Clay" weight="7kg" size="10cm x 10cm" description="The Ceramic Whisper Pendant Lamp elegantly illuminates any space with its soft, diffused light. Crafted from high-quality ceramic, its minimalist design complements modern interiors, making it an ideal choice for dining areas, kitchens, or cozy corners."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/skincream.jpeg" imgTwo="" imgThree="" title="Anti-Aging, Microbiome Cream" price={68} texture="Cream" weight="2kg" size="2cm x 2cm" description="Revitalize your skin with Anti-Aging Microbiome Cream. This innovative formula supports a balanced microbiome, reducing wrinkles and fine lines while enhancing skin’s natural radiance. Ideal for all skin types, it promotes a youthful, healthy complexion."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/oil.jpeg" imgTwo="" imgThree="" title="Jimmy Boyd Body oil 2000ml" price={30} texture="Oil" weight="1kg" size="3cm x 3cm" description="Indulge in luxury with Jimmy Boyd Body Oil. This 2000ml bottle provides long-lasting hydration, leaving skin soft and radiant. Infused with natural ingredients, it nourishes and revitalizes, making it perfect for daily use or special pampering."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/toaster.jpeg" imgTwo="/static/media/toaster1.jpeg" imgThree="/static/media/toaster2.jpeg" title="GE Stainless Steel Toaster" price={49} texture="Aluminum" weight="10kg" size="20cm x 12cm" description="The GE Stainless Steel Toaster combines sleek design with functionality. It features multiple browning settings for perfect toast every time, along with wide slots for various bread types. Durable and easy to clean, it's a stylish addition to any kitchen."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/cabinet2.jpeg" imgTwo="/static/media/cabinet1.jpeg" imgThree="/static/media/cabinet.jpeg" title="Oak Sauder Collection Bookcase" price={649} texture="Oak Wood" weight="35kg" size="130cm 120cm" description="The Oak Sauder Collection Bookcase blends classic design with practical storage. Crafted from sturdy oak, it features multiple adjustable shelves, accommodating books and decor. Its timeless style and durable construction make it a versatile addition to any room."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/cutting.jpeg" imgTwo="/static/media/cutting1.jpeg" imgThree="/static/media/cutting2.jpeg" title="Ironwood Charleston Board" price={117} texture="Spruce Wood" weight="2kg" size="20cm x 18cm" description="The Ironwood Charleston Board is a premium cutting and serving board, crafted from high-quality ironwood. Its durable construction and elegant grain patterns make it perfect for both kitchen prep and stylish presentation, enhancing any culinary experience."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/whitechair.jpg" imgTwo="" imgThree="" title="Traditional Armchair" price={93} texture="Cloth" weight="40kg" size="60cm x 55cm" description="The Traditional Armchair offers timeless elegance and comfort. Featuring a classic design with plush upholstery and sturdy wooden legs, it fits seamlessly into any decor. Perfect for living rooms or reading nooks, it provides a cozy and stylish seating option."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/chanel.jpeg" imgTwo="/static/media/chanel1.jpeg" imgThree="/static/media/chanel2.jpeg" title="Boy De Chanel Toning Lotion" price={65} texture="Plastic" weight="1kg" size="5cm x 4cm" description="Boy De Chanel Toning Lotion revitalizes and refreshes your skin, leaving it hydrated and balanced. Infused with soothing ingredients, it minimizes pores and controls excess oil, offering a matt finish. Perfect for daily use, enhancing your skincare routine effortlessly."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/dome.jpeg" imgTwo="/static/media/dome1.jpeg" imgThree="/static/media/dome2.jpeg" title="Matt Black Dome Pendant" price={460} texture="Clay" weight="20kg" size="30cm x 30cm" description="The Matt Black Dome Pendant adds a touch of modern elegance to any space. Its sleek, matte finish and minimalist design provide a sophisticated ambiance. Perfect for kitchens, dining areas, or living rooms, enhancing your home's contemporary aesthetic beautifully."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/spanish2.jpeg" imgTwo="/static/media/spanish1.jpeg" imgThree="/static/media/spanish.jpeg" title="Natural Leather Spanish Chair" price={5040} texture="Leather" weight="30kg" size="70cm x 60cm" description="The Natural Leather Spanish Chair combines timeless craftsmanship with modern comfort. Featuring high-quality leather and a sturdy wooden frame, it exudes elegance and durability. Ideal for living rooms or offices, it adds a touch of classic Spanish charm to any interior."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/skin.jpeg" imgTwo="/static/media/skin1.jpeg" imgThree="/static/media/skin2.jpeg" title="Blue Lagoon Skincare Lotion" price={60} texture="Plastic" weight="2kg" size="4cm x 4cm" description="Blue Lagoon Skincare Lotion hydrates and rejuvenates your skin with natural minerals. Infused with algae extracts, it promotes a radiant, youthful complexion. Suitable for all skin types, this lotion provides deep moisture and revitalization for a healthy, glowing look."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/cow2.jpg" imgTwo="" imgThree="" title="Authentic Cowhide Leather Chair" price={1158} texture="Leather" weight="35kg" size="50cm x 50cm" description="The Authentic Cowhide Leather Chair blends rustic charm with modern comfort. Made from genuine cowhide and a sturdy wooden frame, it offers durability and style. Perfect for any room, this chair adds a unique, natural touch to your décor."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone}imgOne="/static/media/chairspecial.jpeg" imgTwo="/static/media/chairspecial1.jpeg" imgThree="" title="Kaydan Chair" price={1598} texture="Cloth" weight="40kg" size="74cm x 66cm" description="The Kaydan Chair combines contemporary design with ergonomic comfort. Upholstered in plush fabric and supported by a sleek metal frame, it offers both style and support. Ideal for modern living spaces, bringing sophistication and relaxation together seamlessly."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/vase.jpeg" imgTwo="" imgThree="" title="Cube Lolo Vase Black" price={263} texture="Clay" weight="10kg" size="14cm x 14cm" description="The Cube Lolo Vase in Black epitomizes modern elegance with its sleek, minimalist design. Crafted from high-quality ceramic, it adds a touch of sophistication to any space. Perfect for showcasing your favorite flowers or as a standalone decor piece, enhancing your home with understated charm."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/shelve.jpeg" imgTwo="" imgThree="" title="Insight Series Four Shelf" price={148} texture="Steel" weight="15kg" size="100cm x 15cm" description="The Insight Series Four Shelf unit combines contemporary design with practical functionality. Crafted from durable materials, it offers ample storage and display space. Ideal for organizing books, decor, or media, it enhances any room with modern style and versatility."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/china.jpeg" imgTwo="" imgThree="" title="Oneida Moda 65-Piece Set" price={145} texture="Porcelain" weight="10kg" size="20cm x 20cm" description="The Oneida Moda 65-Piece Set offers timeless elegance and practicality. Crafted from fine china, it includes essential dining pieces for 12 settings. Perfect for formal occasions or everyday use, it elevates dining experiences with sophisticated style and lasting quality."/>
                    <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/light1.jpeg" imgTwo="/static/media/light.jpeg" imgThree="/static/media/light2.jpeg" title="Here Comes the Sun Pendant" price={1304} texture="Clay" weight="15kg" size="12cm x 12cm" description="The Here Comes the Sun Pendant radiates warmth and charm with its sun-inspired design. Crafted from durable materials, its artistic silhouette enhances any space with a touch of celestial elegance. Ideal for lighting up dining areas or cozy nooks, creating a welcoming ambiance wherever it shines."/>
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

export default CategoriesAll;