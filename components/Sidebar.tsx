import React from 'react';
import { Page, Persona } from '../types';
import PersonaToggle from './PersonaToggle';

interface SidebarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
  currentPersona: Persona;
  onPersonaChange: (persona: Persona) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate, currentPersona, onPersonaChange }) => {
  const navItems = currentPersona === Persona.ADVISOR
    ? [
      { id: Page.HOME, label: '01 / SYSTEM' },
      { id: Page.CASE_STUDIES, label: '02 / PROOF' },
      { id: Page.FRAMEWORK, label: '03 / METHOD' },
      { id: Page.PHILOSOPHY, label: '04 / THESIS' },
      { id: Page.APPLY, label: '05 / APPLY' },
    ]
    : [
      { id: Page.HOME, label: '01 / ARC' },
      { id: Page.CASE_STUDIES, label: '02 / REELS' },
      { id: Page.FRAMEWORK, label: '03 / CRAFT' },
      { id: Page.PHILOSOPHY, label: '04 / ETHOS' },
      { id: Page.APPLY, label: '05 / CONNECT' },
    ];

  return (
    <nav className="fixed left-0 top-0 h-full w-20 md:w-64 border-r border-white/10 z-50 bg-bg hidden md:flex flex-col justify-between p-8">
      <div>
        <div
          className="mb-16 cursor-pointer group flex flex-col items-center text-center"
          onClick={() => onNavigate(Page.HOME)}
        >
          <img src="/assets/JC_Logo_White.svg" alt="JC" className="w-20 h-20 mb-6 group-hover:scale-110 transition-transform" />
          <h1 className="font-heading text-2xl leading-none text-brand tracking-tighter transition-colors">JUAN CARLOS<br />ZERMEÑO</h1>
          <p className="text-[9px] tracking-[0.2em] text-muted mt-2 group-hover:text-white transition-colors uppercase">
            {currentPersona === Persona.ADVISOR ? 'Strategic Advisor' : 'Professional Actor'}
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <PersonaToggle currentPersona={currentPersona} onToggle={onPersonaChange} />
        </div>

        <div className="flex flex-col space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-left font-heading text-xl tracking-wider transition-all hover:text-brand ${activePage === item.id ? 'text-brand' : 'text-muted'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6 flex flex-col items-center">
        <a
          href="https://www.instagram.com/j_c_zermeno/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-brand transition-colors p-2 group"
          aria-label="Instagram"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:scale-110 transition-transform"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <div className="text-[10px] text-muted rotate-180 [writing-mode:vertical-lr] self-center">
          {currentPersona === Persona.ADVISOR ? 'STRATEGIC AUTHORITY' : 'DIRECTED PRESENCE'} © 2026
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
