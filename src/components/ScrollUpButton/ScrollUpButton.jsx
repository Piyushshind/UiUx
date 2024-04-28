import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
import './ScrollUpButton.css';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='scrollBtn'>
    <button
      className={`scroll-up-button ${isVisible ? 'show' : ''}`}
      onClick={scrollToTop}
    >
     <FaArrowCircleUp />
    </button>
    </div>
  );
};

export default ScrollUpButton;
