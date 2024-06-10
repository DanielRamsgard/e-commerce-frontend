import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoverPage = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <>
            <div className="x-icon">
                <div className="x-svg" onClick={goToHome}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
            </div>
            <div className="navigation-container">
                <div className="nav-text">
                    Categories
                </div>
                <div className="nav-text">
                    Cart
                </div>
                <div className="nav-text">
                    Products Page
                </div>
            </div>
        </>
    );
}

export default CoverPage;