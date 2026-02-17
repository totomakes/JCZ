import React from 'react';
import { Persona } from '../types';

interface FrameworkDiagramProps {
  persona: Persona;
}

const FrameworkDiagram: React.FC<FrameworkDiagramProps> = ({ persona }) => {
  const isAdvisor = persona === Persona.ADVISOR;

  const advisorStages = [
    { step: '01', title: 'Identity Architecture', desc: 'Defining the core ethos and category edge.' },
    { step: '02', title: 'Visual Authority', desc: 'Building high-fidelity aesthetic dominance.' },
    { step: '03', title: 'Cinematic Deployment', desc: 'Execution across high-impact narrative channels.' },
    { step: '04', title: 'Distribution Strategy', desc: 'Precision targeting to elite decision makers.' },
    { step: '05', title: 'Performance Engine', desc: 'Iterative optimization for long-term equity.' },
  ];

  const actorStages = [
    { step: '01', title: 'Role Selection', desc: 'Filter projects for maximum strategic alignment.' },
    { step: '02', title: 'Narrative Alignment', desc: 'Ensure performance reinforces the long-term arc.' },
    { step: '03', title: 'Media Engagement', desc: 'Direct the industry and public perception.' },
    { step: '04', title: 'Audience Expansion', desc: 'Scale presence across new categories and genres.' },
  ];

  const stages = isAdvisor ? advisorStages : actorStages;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-${stages.length} gap-4`}>
      {stages.map((stage, idx) => (
        <div key={idx} className="relative group">
          <div className="h-full border border-white/5 bg-white/5 p-6 hover:border-brand transition-all">
            <span className="font-heading text-brand text-4xl block mb-4">{stage.step}</span>
            <h4 className="font-heading text-xl mb-2 text-white">{stage.title}</h4>
            <p className="text-muted text-sm leading-relaxed">{stage.desc}</p>
          </div>
          {idx < stages.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand opacity-30">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FrameworkDiagram;
