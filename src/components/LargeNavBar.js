import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

const LargeNavBar = (props) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState(false);

    const scrollToTop = () => {
        if (props.prevPage === "/"){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
        } else {
            navigate("/");
        }
      };

    return (
        <>
            <div className="logo-container">
                <div className="logo" onClick={scrollToTop}>
                    honey
                </div>
            </div>
            <div className="button-container">
                <div className="shopping">
                    <button className="anek-malayalam-font-light button" onClick={() => {navigate("/categories/all");}}>
                        Categories
                    </button>
                    <button className="anek-malayalam-font-light button" onClick={() => {navigate("/product");}}>
                        Product Page
                    </button>
                    <div className="cart" onClick={() => {setCart(true)}}>
                        <div className={props.cartCount === 0 ? "null" : "ticker"}>
                            <div>
                                {props.cartCount}
                            </div>
                        </div>
                        <svg className="cart" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </div>
                </div>
            </div>
            {cart ? <Cart total={props.total} setCart={setCart} cartCount={props.cartCount}/> : <></>}
        </>
    );
}

export default LargeNavBar;