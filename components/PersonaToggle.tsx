import React from 'react';
import { motion } from 'framer-motion';
import { Persona } from '../types';

interface PersonaToggleProps {
    currentPersona: Persona;
    onToggle: (persona: Persona) => void;
}

const PersonaToggle: React.FC<PersonaToggleProps> = ({ currentPersona, onToggle }) => {
    return (
        <div className="flex items-center gap-2 p-1 bg-white/5 border border-white/10 rounded-full w-fit">
            <button
                onClick={() => onToggle(Persona.ADVISOR)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-heading tracking-widest transition-all ${currentPersona === Persona.ADVISOR
                        ? 'bg-brand text-bg'
                        : 'text-muted hover:text-white'
                    }`}
            >
                ADVISOR
            </button>
            <button
                onClick={() => onToggle(Persona.ACTOR)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-heading tracking-widest transition-all ${currentPersona === Persona.ACTOR
                        ? 'bg-brand text-bg'
                        : 'text-muted hover:text-white'
                    }`}
            >
                ACTOR
            </button>
        </div>
    );
};

export default PersonaToggle;
