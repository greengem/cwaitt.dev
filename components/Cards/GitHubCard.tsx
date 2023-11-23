"use client";
import { motion } from 'framer-motion';
import { Card, CardBody } from '@nextui-org/card';
import { IconAngle, IconMath, IconMathFunction, IconMathFunctionY, IconMathIntegrals, IconMathPi, IconSchool, IconFlask, IconVariableMinus } from '@tabler/icons-react';
import { Link } from '@nextui-org/react';

const circularPath = (initialRotation) => ({
  rotate: [initialRotation, initialRotation + 360],
  transition: {
    repeat: Infinity,
    duration: 20,
    ease: "linear",
  },
});

const counterRotate = {
  rotate: [0, -360],
  transition: {
    repeat: Infinity,
    duration: 5,
    ease: "linear",
  },
};

const icons = [IconMath, IconMathFunction, IconMathIntegrals, IconMathPi, IconSchool, IconMathFunctionY, IconVariableMinus, IconAngle];

export default function GitHubCard() {
  const hoverScale = 1.2;

  return (
    <Card className='py-4 h-full shadow-lg border-1 border-transparent' shadow="none">
      <CardBody className="py-2 px-5 items-center justify-center relative min-h-[350px]">
        <Link target="_blank" rel="noopener noreferrer" href='https://github.com/greengem'><IconFlask size={128} className='text-success' /></Link>
        <p className='text-default-500'>
            <Link target="_blank" rel="noopener noreferrer" href='https://github.com/greengem' className='text-xs font-semibold text-default-500'>Explore My GitHub Repos</Link>
        </p>

        {icons.map((IconComponent, index) => {
          const initialRotation = (index / icons.length) * 360;
          return (
            <motion.div
              key={index}
              className='orbit-container absolute top-1/2 left-1/2'
              animate={circularPath(initialRotation)}
            >
              <div className='orbit-icon text-secondary absolute translate-x-30'>
                <motion.div
                  animate={counterRotate}
                  whileHover={{ scale: hoverScale }}
                  className='flex justify-center align-middle'
                >
                  <IconComponent size={32} stroke={2} />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </CardBody>
    </Card>
  )
}
