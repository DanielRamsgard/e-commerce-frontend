import './App.css';
import NavBar from './components/NavBar';
import React, { useRef, useEffect, useState } from 'react';

function App() {
    const myRef = useRef();
    const [ref, setRef] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setRef(entry.isIntersecting)
        });
        observer.observe(myRef.current);
    }, [])

    return (
    <div>
        <div className={ref ? "nav-bar-small" : "nav-bar"}>
            <NavBar/>
        </div>
        <div className="content">
            <div className="categories">
                <div className="left">
                    <div className="box-left-big">
                        <div className="text anek-malayalam-font">Living Room</div>
                        <img className="box-left-big-img" src="/static/media/house.png"></img>
                    </div>
                    <div className="box-left-small">
                        <div className="text anek-malayalam-font"> Skincare </div>
                        <img className="box-left-small-img" src="/static/media/bottle.jpeg"></img>
                    </div>

                </div>
                <div className="right">
                    <div className="box-right">
                        <div className="text anek-malayalam-font"> Kichen </div>
                        <img className="box-right-img" src="/static/media/kitchen.jpeg"></img>
                    </div>
                    <div ref={myRef} className="box-right">
                        <div className="text anek-malayalam-font"> Electronics </div>
                        <img className="box-right-img" src="/static/media/electronics.jpeg"></img>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
}

export default App;
