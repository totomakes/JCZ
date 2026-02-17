import React from 'react';
import { motion } from 'framer-motion';
import FrameworkDiagram from './FrameworkDiagram';
import { Page, Persona } from '../types';

interface FrameworkProps {
    onNavigate: (page: Page) => void;
    persona: Persona;
}

const FrameworkView: React.FC<FrameworkProps> = ({ onNavigate, persona }) => {
    const isAdvisor = persona === Persona.ADVISOR;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-10 space-y-16"
        >
            <h2 className="heading-xl">
                {isAdvisor ? 'PROPRIETARY' : 'PERFORMANCE'} SYSTEM
            </h2>
            <FrameworkDiagram />
            <div className="max-w-3xl space-y-8 text-muted text-xl leading-relaxed">
                <p>
                    {isAdvisor
                        ? "Most agencies sell deliverables. We sell dominance. Our framework is designed to create an impenetrable authority moat around your brand, making you the only logical choice in your market."
                        : "Acting is more than performance; it's the architecture of perceived reality. This framework ensuring every visual and verbal cue commands attention and drives cinematic impact."}
                </p>
                <button
                    onClick={() => onNavigate(Page.APPLY)}
                    className="text-brand font-heading text-2xl border-b-2 border-brand pb-1 hover:text-white hover:border-white transition-all transform hover:translate-x-2 inline-block"
                >
                    {isAdvisor ? 'IMPLEMENT THIS SYSTEM →' : 'EXPLORE COLLABORATION →'}
                </button>
            </div>
        </motion.div>
    );
};

export default FrameworkView;
