import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="card">
                <img alt="Card" src={props.img} className="card-img"></img>
                <div className="card-title">
                    <div className="card-title-text card-text">
                        {props.title}
                    </div>
                </div>
                <div className="card-price">
                    <div className="card-price-text">
                        {props.price}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;