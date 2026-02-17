import React from 'react';
import { motion } from 'framer-motion';
import { Persona } from '../types';

interface PhilosophyProps {
    persona: Persona;
}

const Philosophy: React.FC<PhilosophyProps> = ({ persona }) => {
    const isAdvisor = persona === Persona.ADVISOR;

    const advisorPoints = [
        {
            id: '01',
            title: 'PRODUCTION IS A COMMODITY',
            text: 'High-quality video and design are the table stakes. They are no longer a differentiator. Without the underlying architecture of authority, you are just making expensive noise.'
        },
        {
            id: '02',
            title: 'AUTHORITY IS ENGINEERED',
            text: 'Status is a technical challenge. We map the psychological journey of your target market and ensure every visual and verbal cue reinforces your position at the top.'
        },
        {
            id: '03',
            title: 'RADICAL EXCLUSIVITY',
            text: 'The most powerful position in any market is "hard to reach." We build systems that elevate you while filtering for high-intent, low-friction clients.'
        }
    ];

    const actorPoints = [
        {
            id: '01',
            title: 'TRUTH OVER PERFORMANCE',
            text: 'Audiences don\'t want to see acting; they want to see truth. My craft is built on the architecture of authenticity within the frame.'
        },
        {
            id: '02',
            title: 'THE FRAME IS THE STAGE',
            text: 'Every micro-expression is a strategic choice. We command the attention of the viewer by mastering the visual language of presence.'
        },
        {
            id: '03',
            title: 'IMPACT IS THE OUTCOME',
            text: 'Whether it\'s a 30-second commercial or a 2-hour feature, the goal is the same: to move the audience from their current state to a high-intent reality.'
        }
    ];

    const points = isAdvisor ? advisorPoints : actorPoints;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-4xl pt-10 space-y-16"
        >
            <h2 className="heading-xl">
                {isAdvisor ? 'THE THESIS' : 'THE CRAFT'}
            </h2>
            <div className="space-y-24">
                {points.map((point, i) => (
                    <motion.div
                        key={point.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="heading-lg text-brand flex items-baseline gap-4">
                            <span className="text-xl font-heading opacity-40">{point.id} /</span>
                            {point.title}
                        </h3>
                        <p className="text-muted text-2xl font-light leading-relaxed">
                            {point.text}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-20 border-t border-white/10"
            >
                <p className="text-brand font-heading text-4xl leading-tight">
                    {isAdvisor
                        ? '"THE ULTIMATE DIFFERENTIATOR IS NOT WHAT YOU DO, BUT WHO YOU ARE PERCEIVED TO BE."'
                        : '"THE ACTOR IS NOT A PERFORMER, BUT AN ARCHITECT OF EMOTIONAL REALITY."'}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Philosophy;
