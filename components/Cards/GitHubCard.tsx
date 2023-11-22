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

const icons = [IconMath, IconMathFunction, IconMathFunctionY, IconMathIntegrals, IconMathPi, IconSchool, IconVariableMinus, IconAngle];

export default function GitHubCard() {
  const hoverScale = 1.2;

  return (
    <Card className='py-4 h-full shadow-lg border-1 border-secondary' shadow="none">
      <CardBody className="py-2 px-5 items-center justify-center relative min-h-[350px]">
        <Link href='https://github.com/greengem'><IconFlask size={128} className='text-secondary' /></Link>
        <p className='text-default-500'>
            <Link href='https://github.com/greengem' className='text-xs font-semibold text-default-500'>Explore My GitHub Repos</Link>
        </p>

        {icons.map((IconComponent, index) => {
          const initialRotation = (index / icons.length) * 360;
          return (
            <motion.div
              key={index}
              className='orbit-container'
              style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%',
              }}
              animate={circularPath(initialRotation)}
            >
              <div className='orbit-icon text-success' style={{ position: 'absolute', transform: 'translateX(-160px)' }}>
                <motion.div
                  animate={counterRotate}
                  whileHover={{ scale: hoverScale }}
                  style={{
                    display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
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
