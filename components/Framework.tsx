import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import FrameworkDiagram from './FrameworkDiagram';
import { Page, Persona } from '../types';

interface FrameworkProps {
    onNavigate: (page: Page) => void;
    persona: Persona;
}

const FrameworkView: React.FC<FrameworkProps> = ({ onNavigate, persona }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const isAdvisor = persona === Persona.ADVISOR;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-10 space-y-16"
        >
            <h2 className="heading-xl uppercase">
                {isAdvisor ? 'THE CATEGORY KINGZ METHOD™' : 'THE ACTOR\'S BLUEPRINT™'}
            </h2>
            <FrameworkDiagram persona={persona} />
            <div className="max-w-3xl space-y-8 text-muted text-xl leading-relaxed">
                <p>
                    {isAdvisor
                        ? "Most firms sell deliverables. This system engineers dominance. The Category Kingz Method™ aligns identity, perception, and distribution to create an authority moat around your brand. When executed correctly, you are not compared. You are selected."
                        : "Acting is more than performance. It’s strategic presence. The Actor’s Blueprint™ is a structured approach: role selection, narrative alignment, media engagement, and audience expansion. Each role compounds. Each performance is a strategic move."}
                </p>
                <button
                    onClick={() => onNavigate(Page.APPLY)}
                    className="text-brand font-heading text-2xl border-b-2 border-brand pb-1 hover:text-white hover:border-white transition-all transform hover:translate-x-2 inline-block"
                >
                    {isAdvisor ? 'IMPLEMENT THIS SYSTEM →' : 'IMPLEMENT THE BLUEPRINT →'}
                </button>
            </div>
        </motion.div>
    );
};

export default FrameworkView;
