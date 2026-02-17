import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Persona } from '../types';

interface PhilosophyProps {
    persona: Persona;
}

const Philosophy: React.FC<PhilosophyProps> = ({ persona }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const isAdvisor = persona === Persona.ADVISOR;

    const advisorPoints = [
        {
            id: '01',
            title: 'PRODUCTION IS TABLE STAKES',
            text: 'Cinematic quality is expected. It is not the edge. Without authority architecture beneath it, production becomes decoration.'
        },
        {
            id: '02',
            title: 'AUTHORITY IS STRUCTURAL',
            text: 'Status is not accidental. It is engineered through controlled narrative, psychological positioning, and consistent visual signals.'
        },
        {
            id: '03',
            title: 'EXCLUSIVITY CREATES LEVERAGE',
            text: 'The strongest position in any market is limited access. Strategic filtering elevates perception and attracts high-intent operators.'
        }
    ];

    const actorPoints = [
        {
            id: '01',
            title: 'PERFORMANCE IS ONLY THE START',
            text: 'Acting well is table stakes. Without strategic role selection and narrative alignment, your performances disappear. We map each role to the long-term arc of your career.'
        },
        {
            id: '02',
            title: 'PRESENCE IS ENGINEERED',
            text: 'Industry perception doesn’t happen by accident. We guide the media narrative, ensure each project builds upon the last, and craft an intentional trajectory.'
        },
        {
            id: '03',
            title: 'THE POWER OF SELECTIVITY',
            text: 'Not every role advances your authority. We filter for projects that elevate your craft, broaden your reach, and deepen your industry positioning.'
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
                {isAdvisor ? 'THE THESIS' : 'THE ETHOS'}
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
                        : '"IT\'S NOT JUST THE ROLE YOU PLAY, BUT THE STORY YOU SHAPE."'}
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Philosophy;
