import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Landind.css'

export default function Landing() {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 700) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='landing-page' id='top'>
      <div><h1 className='logo'>Y&M Royal Chic</h1></div>
      <div className='description'>
        <h1 style={{ fontWeight: 300 }}>
          Burning <span style={{ fontStyle: 'italic', fontWeight: 100 }}>brightly </span>
          as a star, <span style={{ fontStyle: 'italic', fontWeight: 100 }}>new<br></br> collection </span>
          is here
        </h1>
      </div>
      <div className='scroll'>
        <ScrollLink className='a' to="menu" smooth={true} duration={500}>
          scroll down
        </ScrollLink>
      </div>
      <div className='scroll-line'></div>
      {showToTop && (
        <div className={`toTop ${showToTop ? 'show' : ''}`}>
        <ScrollLink className='span' to="top" smooth={true} duration={500}>
          ∟
        </ScrollLink>
      </div>
      )}
    </div>
  );
}
