import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();

    const handleCardClick = (imgOne, imgTwo, imgThree, description, price, title, texture, weight, size) => {
        props.updateProduct(imgOne, imgTwo, imgThree, description, price, title, texture, weight, size);
        navigate("/product");
        
    }

    return (
        <>
            <div className={props.widthPhone ? "card-new" : "card"}  onClick={() => {handleCardClick(props.imgOne, props.imgTwo, props.imgThree, props.description, props.price, props.title, props.texture, props.weight, props.size);}}>
                <div className={props.widthPhone ? "card-container-2-new"  : "card-container-2" }>
                    <img alt="Card" src={props.imgOne} className="card-img"></img>
                </div>
                <div className="card-title">
                    <div className="card-title-text card-text">
                        {props.title}
                    </div>
                </div>
                <div className="card-price">
                    <div className="card-price-text">
                        {"$" + props.price}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;