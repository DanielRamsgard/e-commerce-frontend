import NavBar from './NavBar';
import BigCategories from './BigCategories';
import React, { useEffect, useState } from 'react';
import UseScrollPosition from './Scroll';
import UseWindowWidth from './WindowWidth';
import SmallCategories from './SmallCategories';
import Card from './Card';
import BigCallToAction from './BigCallToAction';
import SmallCallToAction from './SmallCallToAction';

const Home = (props) => {
    props.updatePrevPage("/");
    const [scroll, setScroll] = useState(false);
    const scrollPosition = UseScrollPosition();
    const widthBoolNav = UseWindowWidth(700);
    const widthBoolCategories = UseWindowWidth(1200);
    const widthBoolCallToAction = UseWindowWidth(750);

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
                    <NavBar widthBool={widthBoolNav}/>
                </div>
                <div className="content">
                    <div className="categories">
                        {widthBoolCategories ? <SmallCategories /> : <BigCategories />}
                    </div>
                    <div className="spacer"></div>
                    <div className="proud">
                        Products we are proud of
                    </div>
                    <div className="box">
                        <div className="products-container">
                            <Card img="/static/media/chair.jpeg" title="Little Armchair Sheepskin" price="$489"/>
                            <Card img="/static/media/lamp2.jpeg" title="Ceramic Whisper Pendant Lamp" price="$354"/>
                            <Card img="/static/media/skin.jpeg" title="Anti-Aging, Microbiome Cream" price="$68"/>
                            <Card img="/static/media/oil.jpeg" title="Jimmy Boyd Body oil 2000ml" price="$30"/>
                            <Card img="/static/media/toaster.jpeg" title="GE Stainless Steel 2-Slice Toaster" price="$49"/>
                            <Card img="/static/media/cabinet2.jpeg" title="Oak Sauder Collection Bookcase" price="$649"/>
                            <Card img="/static/media/cutting.jpeg" title="Ironwood Gourmet Charleston Board" price="$117"/>
                            <Card img="/static/media/whitechair.jpg" title="Traditional Armchair" price="$93"/>
                        </div>
                    </div>
                    <div className="spacer"></div>
                    {widthBoolCallToAction ? <SmallCallToAction /> : <BigCallToAction img="/static/media/wallpaper.jpeg" bool={true}/>}
                    <div className="spacer"></div>
                    {widthBoolCallToAction ? <SmallCallToAction /> : <BigCallToAction img="/static/media/wallpaper1.jpeg" bool={false}/>}
                </div>
            </div>
        </>
    );
}

export default Home;