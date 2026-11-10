import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ReadingProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-[2px]">
      <motion.div
        className="h-full bg-[#141413] dark:bg-[#F5F2EB] origin-left opacity-90 transition-colors"
        style={{ scaleX }}
      />
    </div>
  );
};
