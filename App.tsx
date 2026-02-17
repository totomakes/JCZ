import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import CaseStudies from './components/CaseStudies';
import Apply from './components/Apply';
import Philosophy from './components/Philosophy';
import FrameworkView from './components/Framework';
import PersonaToggle from './components/PersonaToggle';
import { Page, Persona } from './types';
import { analyzeApplication } from './services/gemini';

import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import CursorGlow from './components/CursorGlow';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);
  const [persona, setPersona] = useState<Persona>(Persona.ADVISOR);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);

  const handleApplySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      objective: formData.get('objective') as string,
      revenue: formData.get('revenue') as string,
      threshold: formData.get('threshold') as string,
      timeline: formData.get('timeline') as string,
      type: formData.get('type') as string,
      entity: formData.get('entity') as string,
      structure: formData.get('structure') as string,
    };

    // Construct mailto
    const subject = `[JCZ - ${persona === Persona.ADVISOR ? 'ADVISOR' : 'ACTOR'}] New Inquiry: ${data.entity || 'General'}`;
    const body = `
New Submission from Authority Conversion System
----------------------------------------------
Persona: ${persona === Persona.ADVISOR ? 'Strategic Advisor' : 'Professional Actor'}
Entity/Project: ${data.entity}
Primary Objective: ${data.objective}
${persona === Persona.ADVISOR ? `Annual Revenue: ${data.revenue}\nInvestment Threshold: ${data.threshold}` : `Production Type: ${data.type}\nTimeline: ${data.timeline}`}

Narrative Vision / Project Details:
${data.structure}
----------------------------------------------
    `.trim();

    const mailtoLink = `mailto:Jc@markethunterz.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Trigger mailto
    window.location.href = mailtoLink;

    try {
      // Still run AI analysis for UI feedback
      const feedback = await analyzeApplication({
        revenue: data.revenue,
        objective: data.objective,
        structure: data.structure,
        timeline: data.timeline
      });
      setAiFeedback(feedback || "Application initiated. Your mail client should have opened with the pre-filled details.");
    } catch (error) {
      setAiFeedback("Form processed. Your mail client should have opened. If not, please email Jc@markethunterz.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderContent = () => {
    switch (activePage) {
      case Page.HOME:
        return <Home key="home" onNavigate={setActivePage} persona={persona} />;
      case Page.CASE_STUDIES:
        return <CaseStudies key="case-studies" persona={persona} />;
      case Page.APPLY:
        return (
          <Apply
            key="apply"
            persona={persona}
            isSubmitting={isSubmitting}
            aiFeedback={aiFeedback}
            onSubmit={handleApplySubmit}
            onReset={() => setAiFeedback(null)}
          />
        );
      case Page.FRAMEWORK:
        return <FrameworkView key="framework" onNavigate={setActivePage} persona={persona} />;
      case Page.PHILOSOPHY:
        return <Philosophy key="philosophy" persona={persona} />;
      default:
        return <Home key="home-default" onNavigate={setActivePage} />;
    }
  };

  return (
    <HelmetProvider>
      <div className={`min-h-screen bg-bg text-text selection:bg-brand selection:text-bg overflow-x-hidden ${persona === Persona.ACTOR ? 'persona-actor' : ''}`}>
        <SEO />
        <CursorGlow />
        <Sidebar
          activePage={activePage}
          onNavigate={setActivePage}
          currentPersona={persona}
          onPersonaChange={setPersona}
        />

        {/* Mobile Nav */}
        <div className="md:hidden fixed top-0 left-0 w-full p-4 z-50 bg-bg/80 backdrop-blur-md border-b border-white/10 flex justify-between items-center shadow-xl gap-2">
          <div className="flex items-center gap-2 cursor-pointer shrink-0" onClick={() => setActivePage(Page.HOME)}>
            <img src="/assets/JC_Logo_White.svg" alt="JC" className="w-12 h-12" />
            <h1 className="font-heading text-xs text-brand leading-none tracking-tighter hidden sm:block">JUAN CARLOS<br />ZERMEÑO</h1>
          </div>

          <div className="scale-75 origin-center">
            <PersonaToggle currentPersona={persona} onToggle={setPersona} />
          </div>

          <button
            onClick={() => setActivePage(Page.APPLY)}
            className="font-heading text-[10px] border border-brand px-3 py-1.5 text-brand hover:bg-brand hover:text-bg transition-all shrink-0"
          >
            APPLY
          </button>
        </div>

        <main className="md:ml-64 px-6 pb-20 pt-32 md:px-20 md:pb-32 md:pt-12">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </div>
        </main>

        {/* Persistent CTA Bar */}
        <div className="fixed bottom-0 right-0 p-8 z-40 hidden lg:block">
          <button
            onClick={() => setActivePage(Page.APPLY)}
            className="group flex items-center gap-4 bg-white/5 hover:bg-brand transition-all p-2 pr-6 border border-white/10 backdrop-blur-sm"
          >
            <div className="w-10 h-10 bg-brand group-hover:bg-bg flex items-center justify-center text-bg group-hover:text-brand transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </div>
            <span className="font-heading text-lg group-hover:text-bg tracking-wider">
              {persona === Persona.ADVISOR ? 'APPLY FOR ADVISORY' : 'BOOK FOR PRODUCTION'}
            </span>
          </button>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default App;
