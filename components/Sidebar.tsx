
import React from 'react';
import { Page } from '../types';

interface SidebarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
  const navItems = [
    { id: Page.HOME, label: '01 / SYSTEM' },
    { id: Page.CASE_STUDIES, label: '02 / PROOF' },
    { id: Page.FRAMEWORK, label: '03 / METHOD' },
    { id: Page.PHILOSOPHY, label: '04 / THESIS' },
    { id: Page.APPLY, label: '05 / APPLY' },
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-20 md:w-64 border-r border-white/10 z-50 bg-bg hidden md:flex flex-col justify-between p-8">
      <div>
        <div 
          className="mb-20 cursor-pointer group"
          onClick={() => onNavigate(Page.HOME)}
        >
          <h1 className="font-heading text-3xl leading-none text-brand">JCZ</h1>
          <p className="text-[10px] tracking-widest text-muted mt-2 group-hover:text-white transition-colors">HOUSTON, TX</p>
        </div>

        <div className="flex flex-col space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-left font-heading text-xl tracking-wider transition-all hover:text-brand ${
                activePage === item.id ? 'text-brand' : 'text-muted'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="text-[10px] text-muted rotate-180 [writing-mode:vertical-lr] self-center">
        STRATEGIC AUTHORITY © 2024
      </div>
    </nav>
  );
};

export default Sidebar;
