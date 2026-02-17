
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import CaseStudies from './components/CaseStudies';
import Apply from './components/Apply';
import Philosophy from './components/Philosophy';
import FrameworkView from './components/Framework';
import { Page } from './types';
import { analyzeApplication } from './services/gemini';

import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.HOME);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const handleApplySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      revenue: formData.get('revenue') as string,
      objective: formData.get('objective') as string,
      structure: formData.get('structure') as string,
      timeline: formData.get('timeline') as string,
    };

    try {
      const feedback = await analyzeApplication(data);
      setAiFeedback(feedback || "Application received. We will review your strategy.");
    } catch (error) {
      setAiFeedback("System error. Please contact directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderContent = () => {
    switch (activePage) {
      case Page.HOME:
        return <Home key="home" onNavigate={setActivePage} />;
      case Page.CASE_STUDIES:
        return <CaseStudies key="case-studies" />;
      case Page.APPLY:
        return (
          <Apply
            key="apply"
            isSubmitting={isSubmitting}
            aiFeedback={aiFeedback}
            onSubmit={handleApplySubmit}
            onReset={() => setAiFeedback(null)}
          />
        );
      case Page.FRAMEWORK:
        return <FrameworkView key="framework" onNavigate={setActivePage} />;
      case Page.PHILOSOPHY:
        return <Philosophy key="philosophy" />;
      default:
        return <Home key="home-default" onNavigate={setActivePage} />;
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-bg text-text selection:bg-brand selection:text-bg overflow-x-hidden">
        <SEO />
        <Sidebar activePage={activePage} onNavigate={setActivePage} />

        {/* Mobile Nav */}
        <div className="md:hidden fixed top-0 left-0 w-full p-6 z-50 bg-bg/80 backdrop-blur-md border-b border-white/10 flex justify-between items-center shadow-xl">
          <h1 className="font-heading text-2xl text-brand cursor-pointer" onClick={() => setActivePage(Page.HOME)}>JCZ</h1>
          <button onClick={() => setActivePage(Page.APPLY)} className="font-heading text-sm border border-brand px-4 py-2 text-brand hover:bg-brand hover:text-bg transition-all">APPLY</button>
        </div>

        <main className="md:ml-64 px-6 pb-20 pt-10 md:px-20 md:pb-32 md:pt-12">
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
            <span className="font-heading text-lg group-hover:text-bg tracking-wider">APPLY FOR ADVISORY</span>
          </button>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default App;
