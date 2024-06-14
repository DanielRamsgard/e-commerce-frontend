import React from 'react';
import LargeNavBar from "./LargeNavBar";
import SmallNavBar from "./SmallNavBar";

const NavBar = (props) => {
    return (
        <>
            <div className="nav-container">
                {props.widthBool ? <SmallNavBar total={props.total} cartCount={props.cartCount} prevPage={props.prevPage}/> : <LargeNavBar updateCartTwo={props.updateCartTwo} cartTwo={props.cartTwo} total={props.total} cartCount={props.cartCount} prevPage={props.prevPage}/>}

            </div>
        </>
        
    );
}

export default NavBar;