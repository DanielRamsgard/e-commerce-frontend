import { useState, useEffect } from 'react';

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentPosition = window.scrollY;
        if (currentPosition > prevScrollPosition) {
          setScrollPosition((prev) => prev + (currentPosition - prevScrollPosition));

        } else {
          setScrollPosition((prev) => prev - (prevScrollPosition - currentPosition));

        }
        setPrevScrollPosition(currentPosition);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPosition]);
  
    return scrollPosition;
};

export default useScrollPosition;