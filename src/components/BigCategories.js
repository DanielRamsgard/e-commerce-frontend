import React from 'react';

const BigCategories = () => {
    return (
        <>
            <div className="left">
                <div className="box-left-big">
                    <div className="text anek-malayalam-font">Living Room</div>
                    <img alt="House" className="box-left-big-img" src="/static/media/house.png"></img>
                </div>
                <div className="box-left-small">
                    <div className="text anek-malayalam-font"> Skincare </div>
                    <img alt="Bottle" className="box-left-small-img" src="/static/media/bottle.jpeg"></img>
                </div>

            </div>
            <div className="right">
                <div className="box-right">
                    <div className="text anek-malayalam-font"> Kichen </div>
                    <img alt="Kitchen" className="box-right-img" src="/static/media/kitchen.jpeg"></img>
                </div>
                <div className="box-right">
                    <div className="text anek-malayalam-font"> Electronics </div>
                    <img alt="Electronics" className="box-right-img" src="/static/media/electronics.jpeg"></img>
                </div>

            </div>
        </>
    );
}

export default BigCategories;