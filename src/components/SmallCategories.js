import React from 'react';
import { useNavigate } from 'react-router-dom';

const SmallCategories = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="right-new">
                <div className="box-right" onClick={() => {navigate("/categories/furniture")}}>
                    <div className="text anek-malayalam-font"> Living Room </div>
                    <img alt="House" className="box-right-img" src="/static/media/house.png"></img>
                </div>
                <div className="box-right" onClick={() => {navigate("/categories/skincare")}}>
                    <div className="text anek-malayalam-font"> Skincare </div>
                    <img alt="Bottle" className="box-right-img" src="/static/media/bottle-special.jpeg"></img>
                </div>

            </div>
            <div className="right-new">
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

export default SmallCategories;