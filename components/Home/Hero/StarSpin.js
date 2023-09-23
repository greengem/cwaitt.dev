import React from 'react';
import { motion } from 'framer-motion';

const StarSpin = ({ size = "3px", offset = { top: "0px", left: "0px" }, duration = 10 }) => {
  return (
    <motion.div
      className="absolute bg-white rounded-full"
      style={{
        width: size,
        height: size,
        top: offset.top,
        left: offset.left
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: duration, loop: Infinity }}
    ></motion.div>
  );
};

export default StarSpin;
