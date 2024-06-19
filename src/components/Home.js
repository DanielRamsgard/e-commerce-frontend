import NavBar from './NavBar';
import BigCategories from './BigCategories';
import React, { useEffect, useState } from 'react';
import useScrollPosition from './Scroll';
import UseWindowWidth from './WindowWidth';
import SmallCategories from './SmallCategories';
import Card from './Card';
import BigCallToAction from './BigCallToAction';
import SmallCallToAction from './SmallCallToAction';
import Newsletter from './Newsletter';
import BottomHeader from './BottomHeader';
import CustomCarousel from './CarouselCustom';

const Home = (props) => {

    const [scroll, setScroll] = useState(false);
    const scrollPosition = useScrollPosition();
    const widthBoolNav = UseWindowWidth(700);
    const widthBoolCategories = UseWindowWidth(1200);
    const widthBoolCallToAction = UseWindowWidth(750);
    const widthPhone = UseWindowWidth(300);

    useEffect(() => {
        props.updatePrevPage("/");
        window.scrollTo(0, 0);
      }, [props]);

    useEffect(() => {
        if (scrollPosition > 20) {
            setScroll(true);
        }
        else {
            setScroll(false);
        }
    }, [scrollPosition]);

    return (
        <>
            <div>
                <div className={scroll ? "nav-bar-small" : "nav-bar"}>
                    <NavBar updateTotal={props.updateTotal} updateCartContent={props.updateCartContent} cartContent={props.cartContent} updateCartTwo={props.updateCartTwo} cartTwo={props.cartTwo} total={props.total} cartCount={props.cartCount} prevPage={props.prevPage} widthBool={widthBoolNav}/>
                </div>
                <div className="content" id="home">
                    <div className="categories">
                        {widthBoolCategories ? <SmallCategories widthPhone={widthPhone}/> : <BigCategories />}
                    </div>
                    <div className="spacer"></div>
                    <div className="proud">
                        Products we are proud of
                    </div>
                    <div className="box">
                        <div className="products-container">
                            <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/chair.jpeg" imgTwo="/static/media/chair1.jpeg" imgThree="/static/media/chair2.jpeg" title="Little Armchair Sheepskin" price={489} texture="Sheepskin" weight="20kg" size="70cm x 70cm" description="Cozy and stylish, the Little Armchair Sheepskin is perfect for adding warmth and comfort to any space. Crafted with genuine sheepskin, it offers a luxurious, soft seating experience, ideal for nurseries, reading nooks, or living rooms."/>
                            <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/lamp2.jpeg" imgTwo="/static/media/lamp.jpeg" imgThree="/static/media/lamp1.jpeg" title="Ceramic Whisper Pendant Lamp" price={354} texture="Clay" weight="7kg" size="10cm x 10cm" description="The Ceramic Whisper Pendant Lamp elegantly illuminates any space with its soft, diffused light. Crafted from high-quality ceramic, its minimalist design complements modern interiors, making it an ideal choice for dining areas, kitchens, or cozy corners."/>
                            <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/skincream.jpeg" imgTwo="" imgThree="" title="Anti-Aging, Microbiome Cream" price={68} texture="Cream" weight="2kg" size="2cm x 2cm" description="Revitalize your skin with Anti-Aging Microbiome Cream. This innovative formula supports a balanced microbiome, reducing wrinkles and fine lines while enhancing skin’s natural radiance. Ideal for all skin types, it promotes a youthful, healthy complexion."/>
                            <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/oil.jpeg" imgTwo="" imgThree="" title="Jimmy Boyd Body oil 2000ml" price={30} texture="Oil" weight="1kg" size="3cm x 3cm" description="Indulge in luxury with Jimmy Boyd Body Oil. This 2000ml bottle provides long-lasting hydration, leaving skin soft and radiant. Infused with natural ingredients, it nourishes and revitalizes, making it perfect for daily use or special pampering."/>
                            <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/toaster.jpeg" imgTwo="/static/media/toaster1.jpeg" imgThree="/static/media/toaster2.jpeg" title="GE Stainless Steel Toaster" price={49} texture="Aluminum" weight="10kg" size="20cm x 12cm" description="The GE Stainless Steel Toaster combines sleek design with functionality. It features multiple browning settings for perfect toast every time, along with wide slots for various bread types. Durable and easy to clean, it's a stylish addition to any kitchen."/>
                            <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/cabinet2.jpeg" imgTwo="/static/media/cabinet1.jpeg" imgThree="/static/media/cabinet.jpeg" title="Oak Sauder Collection Bookcase" price={649} texture="Oak Wood" weight="35kg" size="130cm 120cm" description="The Oak Sauder Collection Bookcase blends classic design with practical storage. Crafted from sturdy oak, it features multiple adjustable shelves, accommodating books and decor. Its timeless style and durable construction make it a versatile addition to any room."/>
                            <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/cutting.jpeg" imgTwo="/static/media/cutting1.jpeg" imgThree="/static/media/cutting2.jpeg" title="Ironwood Charleston Board" price={117} texture="Spruce Wood" weight="2kg" size="20cm x 18cm" description="The Ironwood Charleston Board is a premium cutting and serving board, crafted from high-quality ironwood. Its durable construction and elegant grain patterns make it perfect for both kitchen prep and stylish presentation, enhancing any culinary experience."/>
                            <Card updateProduct={props.updateProduct} widthPhone={widthPhone} imgOne="/static/media/whitechair.jpg" imgTwo="" imgThree="" title="Traditional Armchair" price={93} texture="Cloth" weight="40kg" size="60cm x 55cm" description="The Traditional Armchair offers timeless elegance and comfort. Featuring a classic design with plush upholstery and sturdy wooden legs, it fits seamlessly into any decor. Perfect for living rooms or reading nooks, it provides a cozy and stylish seating option."/>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    {widthBoolCallToAction ? <SmallCallToAction text={"Creative, Harmonious Living"} /> : <BigCallToAction text={"Creative, Harmonious Living"} img="/static/media/wallpaper.jpeg" bool={true}/>}
                    <div className="spacer"></div>
                    <div className="trend-container">
                        <div className="trend">
                            <div className="trend-text">
                                Trending Now
                            </div>
                        </div>
                    </div>
                    <div className="spacer-2"></div>
                    <CustomCarousel updateProduct={props.updateProduct} widthPhone={widthPhone}/>
                    <div className="spacer"></div>
                    {widthBoolCallToAction ? <SmallCallToAction text={"Comfortable & Elegant Living"} /> : <BigCallToAction text={"Comfortable & Elegant Living"} img="/static/media/wallpaper1.jpeg" bool={false}/>}
                    <div className="spacer"></div>
                    <Newsletter />
                    <BottomHeader widthPhone={widthPhone}/>
                </div>
            </div>
        </>
    );
}

export default Home;