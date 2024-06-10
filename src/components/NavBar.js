import React from 'react';
import LargeNavBar from "./LargeNavBar";
import SmallNavBar from "./SmallNavBar";

const NavBar = (props) => {
    return (
        <div className="nav-container">
            {props.widthBool ? <SmallNavBar/> : <LargeNavBar />}

        </div>
    );
}

export default NavBar;