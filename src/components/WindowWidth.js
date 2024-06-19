import { useState, useEffect } from 'react';

const UseWindowWidth = (threshold) => {
    const [widthBool, setWidthBool] = useState(window.innerWidth < threshold);
    
    useEffect(() => {
    const handleResize = () => {
        setWidthBool(window.innerWidth < threshold);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, [threshold]);

    return widthBool;
};

export default UseWindowWidth;