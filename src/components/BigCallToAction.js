import React from 'react';

const BigCallToAction = (props) => {
    if (props.bool){
        return (
            <>
                <div className="container-wallpaper">
                    <div className="wallpaper">

                    </div>
                    <div>
                        <img className="wallpaper" src={props.img}></img>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="container-wallpaper">
                    <div className="wallpaper">
                        <img className="wallpaper" src={props.img}></img>
                    </div>
                    <div className="wallpaper">

                    </div>
                </div>
            </>
        );
    }
};

export default BigCallToAction;