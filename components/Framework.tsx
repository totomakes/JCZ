
import React from 'react';
import { motion } from 'framer-motion';
import FrameworkDiagram from './FrameworkDiagram';
import { Page } from '../types';

interface FrameworkProps {
    onNavigate: (page: Page) => void;
}

const FrameworkView: React.FC<FrameworkProps> = ({ onNavigate }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-10 space-y-16"
        >
            <h2 className="heading-xl">PROPRIETARY<br />SYSTEM</h2>
            <FrameworkDiagram />
            <div className="max-w-3xl space-y-8 text-muted text-xl leading-relaxed">
                <p>
                    Most agencies sell deliverables. We sell dominance. Our framework is designed to create an
                    impenetrable authority moat around your brand, making you the only logical choice in your market.
                </p>
                <button
                    onClick={() => onNavigate(Page.APPLY)}
                    className="text-brand font-heading text-2xl border-b-2 border-brand pb-1 hover:text-white hover:border-white transition-all transform hover:translate-x-2 inline-block"
                >
                    IMPLEMENT THIS SYSTEM →
                </button>
            </div>
        </motion.div>
    );
};

export default FrameworkView;
