import NavBar from './NavBar';
import BigCategories from './BigCategories';
import React, { useEffect, useState } from 'react';
import UseScrollPosition from './Scroll';
import UseWindowWidth from './WindowWidth';
import SmallCategories from './SmallCategories';

const Home = () => {
    const [scroll, setScroll] = useState(false);
    const scrollPosition = UseScrollPosition();
    const widthBoolNav = UseWindowWidth(700);
    const widthBoolCategories = UseWindowWidth(1200);

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
                </div>
            </div>
        </>
    );
}

export default Home;