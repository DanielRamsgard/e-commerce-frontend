import React, { useState } from 'react';
import LargeNavBar from "./LargeNavBar";
import SmallNavBar from "./SmallNavBar";

const NavBar = (props) => {
    const [cart, setCart] = useState(false);

    function updateCart(bool) {
        setCart(bool);
    }

    return (
        <>
            <div className="nav-container">
                {props.widthBool ? <SmallNavBar updateTotal={props.updateTotal} updateCartContent={props.updateCartContent} cartContent={props.cartContent} cart={cart} updateCart={updateCart} updateCartTwo={props.updateCartTwo} cartTwo={props.cartTwo} total={props.total} cartCount={props.cartCount} prevPage={props.prevPage}/> : <LargeNavBar updateTotal={props.updateTotal} updateCartContent={props.updateCartContent} cartContent={props.cartContent} updateCart={updateCart} cart={cart} updateCartTwo={props.updateCartTwo} cartTwo={props.cartTwo} total={props.total} cartCount={props.cartCount} prevPage={props.prevPage}/>}

            </div>
        </>
        
    );
}

export default NavBar;