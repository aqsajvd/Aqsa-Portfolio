import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface MagneticImageProps {
  src: string;
  alt: string;
  className?: string;
  maxOffset?: number;
}

export const MagneticImage: React.FC<MagneticImageProps> = ({
  src,
  alt,
  className = '',
  maxOffset = 16,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalized mouse coordinates from center (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Soft, refined spring physics for editorial feel
  const springConfig = { damping: 22, stiffness: 180, mass: 0.15 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform coordinates to pixel offset for image translation
  const imageX = useTransform(smoothX, [-0.5, 0.5], [-maxOffset, maxOffset]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-maxOffset, maxOffset]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative overflow-hidden"
    >
      <motion.div
        style={{ x: imageX, y: imageY }}
        className="w-full h-full will-change-transform"
      >
        <motion.img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover object-center filter contrast-[1.02] ${className}`}
          style={{ scale: 1.08 }} // Slight scale ensures zero edge gap during magnetic shifts
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};
