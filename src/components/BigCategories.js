import React from 'react';
import { useNavigate } from 'react-router-dom';

const BigCategories = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="left">
                <div className="box-left-big" onClick={() => {navigate("/categories/furniture")}}>
                    <div className="text anek-malayalam-font">Living Room</div>
                    <img alt="House" className="box-left-big-img" src="/static/media/house.png"></img>
                </div>
                <div className="box-left-small" onClick={() => {navigate("/categories/skincare")}}>
                    <div className="text anek-malayalam-font"> Skincare </div>
                    <img alt="Bottle" className="box-left-small-img" src="/static/media/bottle.jpeg"></img>
                </div>

            </div>
            <div className="right-one">
                <div className="box-right" onClick={() => {navigate("/categories/kitchen")}}>
                    <div className="text anek-malayalam-font"> Kichen </div>
                    <img alt="Kitchen" className="box-right-img" src="/static/media/kitchen.jpeg"></img>
                </div>
                <div className="box-right" onClick={() => {navigate("/categories/electronics")}}>
                    <div className="text anek-malayalam-font"> Electronics </div>
                    <img alt="Electronics" className="box-right-img" src="/static/media/electronics.jpeg"></img>
                </div>

            </div>
        </>
    );
}

export default BigCategories;