import React from 'react';
import { useNavigate } from 'react-router-dom';

const SmallCard = (props) => {
    const navigate = useNavigate();

    const handleCardClick = (imgOne, imgTwo, imgThree, description, price, title, texture, weight, size) => {
        props.updateProduct(imgOne, imgTwo, imgThree, description, price, title, texture, weight, size);
        navigate("/product");
        console.log("here");
        
    }

    return (
        <>
            <div className="card-small" onClick={() => {handleCardClick(props.imgOne, props.imgTwo, props.imgThree, props.description, props.price, props.title, props.texture, props.weight, props.size);}}>
                <div className="img-container-card-small">
                    <img alt="Card" src={props.imgOne} className="card-img-small"></img>
                </div>
                <div className="card-title-small">
                    <div className="card-title-text card-text">
                        {props.title}
                    </div>
                </div>
                <div className="card-price-small">
                    <div className="card-price-text">
                        {"$" + props.price}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SmallCard;