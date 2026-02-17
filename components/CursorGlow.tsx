import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorGlow: React.FC = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // High-performance spring for near-instant tracking
    const springConfig = { damping: 45, stiffness: 500, restDelta: 0.001 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Primary Multi-color Organic Glow */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'conic-gradient(from 0deg at 50% 50%, #26B44A 0deg, #9333ea 120deg, #26B44A 240deg, #9333ea 360deg)',
                }}
                animate={{
                    rotate: 360,
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute w-[800px] h-[800px] rounded-full blur-[140px] opacity-[0.22]"
            />

            {/* Vibrant Core Pulse */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.15, 0.1]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute w-[450px] h-[450px] bg-brand rounded-full blur-[90px]"
            />
        </div>
    );
};

export default CursorGlow;
