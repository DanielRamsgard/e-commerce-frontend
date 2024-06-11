import React from "react";

const BottomHeader = (props) => {
    const handleClickBottom = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }
    
    return (
        <>  
            <div className={ props.widthPhone ? "bottom-container-new" : "bottom-container"}>
                <div className="bottom-text">
                    <div className="text-bottom" onClick={handleClickBottom}>
                        About
                    </div>
                    <div className="text-bottom" onClick={handleClickBottom}>
                        Store Locator
                    </div>
                    <div className="text-bottom" onClick={handleClickBottom}>
                        FAQs
                    </div>
                    <div className="text-bottom" onClick={handleClickBottom}>
                        News
                    </div>
                    <div className="text-bottom" onClick={handleClickBottom}>
                        Careers
                    </div>
                    <div className="text-bottom" onClick={handleClickBottom}>
                        Contact Us
                    </div>
                </div>
                <div className="clout">
                    A Daniel Ramsgard Production
                </div>
            </div>
        </>
    );
}

export default BottomHeader;