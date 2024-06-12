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
            <div className="card-small" onClick={() => {console.log('here2');handleCardClick("/static/media/chanel.jpeg", "/static/media/chanel1.jpeg", "/static/media/chanel2.jpeg", "this is a description", 65, "Boy De Chanel Toning Lotion", "Lotion", "1kg", "3cm x 3cm");}}>
                <div className="img-container-card-small">
                    <img alt="Card" src={props.img} className="card-img-small"></img>
                </div>
                <div className="card-title-small">
                    <div className="card-title-text card-text">
                        {props.title}
                    </div>
                </div>
                <div className="card-price-small">
                    <div className="card-price-text">
                        {props.price}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SmallCard;