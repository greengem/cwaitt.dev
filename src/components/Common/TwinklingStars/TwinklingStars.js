import React, { useEffect, useState } from 'react';

function TwinklingStars() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    function addStar() {
      const s = document.createElement('div');
      s.className = 'star';
      s.style.setProperty('--size', Math.random() * 1 + 2 + 'vmin');
      s.style.left = Math.floor(Math.random() * 100) + '%';
      s.style.top = Math.floor(Math.random() * 100) + 'vh'; // Use 'vh' units
      s.addEventListener('animationend', () => {
        s.remove();
      });
      document.querySelector('.stars-container').appendChild(s);
    }

    const interval = setInterval(addStar, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className="stars-container" style={{ transform: `translateY(${-scrollY * 0.5}px)` }}></div>;
}

export default TwinklingStars;
