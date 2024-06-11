import React from 'react';

const SmallCard = (props) => {
    return (
        <>
            <div className="card-small">
                <img alt="Card" src={props.img} className="card-img-small"></img>
                <div className="card-title-small">
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

export default SmallCard;