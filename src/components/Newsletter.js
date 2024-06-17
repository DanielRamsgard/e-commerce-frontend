import React, { useState } from 'react';

const Newsletter = () => {
    const [sub, setSub]  = useState(false);

    return (
        <>
            <div className="newsletter-container">
                <div className="newsletter-text">
                    Newsletter
                </div>
                <div className="space"></div>
                <div className="subscribe-container">
                    <input className="subscribe-news" placeholder="your@email.com" id="input">
                        
                    </input>
                    <button className="subscribe" onClick={() => {setSub(true)}}>
                        { sub ? 
                        "Subscribed!" 
                        : 
                        "Subscribe"
                        }
                    </button>
                </div>
            </div>
        </>
    );
}

export default Newsletter;