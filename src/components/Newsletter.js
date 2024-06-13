import React from 'react';

const Newsletter = () => {
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
                    <button className="subscribe">
                        Subscribe
                    </button>
                </div>
            </div>
        </>
    );
}

export default Newsletter;