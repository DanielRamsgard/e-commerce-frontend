import './App.css';
import NavBar from './components/NavBar';
import BigCategories from './components/BigCategories';
import React, { useEffect, useState } from 'react';
import useScrollPosition from './components/Scroll';


function App() {
    const [scroll, setScroll] = useState(false);
    const scrollPosition = useScrollPosition();

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
            <NavBar/>
        </div>
        <div className="content">
            <div className="categories">
                <BigCategories />
            </div>
            <div className="spacer"></div>
            <div className="proud">
                Products we are proud of
            </div>
        </div>
    </div>
    );
}

export default App;
