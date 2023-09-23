'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from 'react';

const Star = ({ delay = 0 }) => {
    const controls = useAnimation();
    const [positions, setPositions] = useState({ top: '0vh', left: '0vw' });
  
    const size = Math.random() * 3 + 1; // Random size between 1px to 4px

    // Subtle colors
    const subtleColors = ["#FFF", "#FFDAB9", "#FFB6C1", "#ADD8E6", "#DDA0DD"];
    // Vibrant and magical colors
    const vibrantColors = ["#FFD700", "#FF69B4", "#FF4500", "#32CD32", "#00BFFF", "#9400D3"];

    // 75% chance for subtle color, 25% chance for vibrant color
    const isVibrant = Math.random() < 0.25;
    const chosenArray = isVibrant ? vibrantColors : subtleColors;
  
    // Randomly choose a color
    const starColor = chosenArray[Math.floor(Math.random() * chosenArray.length)];

    const initialOpacity = Math.random() * 0.5 + 0.5;

    // Glow effect (box-shadow)
    const subtleGlow = `0 0 5px ${starColor}`;
    const vibrantGlow = `0 0 10px ${starColor}, 0 0 15px ${starColor}`;
  
    useEffect(() => {
        // Ensure that stars are placed within the viewport and not outside
        const topPosition = `${Math.random() * 100}vh`;
        const leftPosition = `${Math.random() * (100 - (size / window.innerWidth * 100))}vw`; 

        setPositions({ top: topPosition, left: leftPosition });

        controls.start({
          y: ["0%", "5%", "0%", "-5%", "0%"],
          x: ["0%", "5%", "0%", "-5%", "0%"],
          opacity: [initialOpacity, 1, initialOpacity],
          transition: { duration: 5, loop: Infinity, delay: delay }
      });
    }, [controls, delay]);
  
    return (
      <motion.div
        animate={controls}
        className="absolute rounded-full"
        style={{
          backgroundColor: starColor,
          width: `${size}px`,
          height: `${size}px`,
          top: positions.top,
          left: positions.left,
          boxShadow: isVibrant ? vibrantGlow : subtleGlow
        }}
      ></motion.div>
    );
};
  
export default Star;
