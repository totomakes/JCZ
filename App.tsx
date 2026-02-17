
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import FrameworkDiagram from './components/FrameworkDiagram';
import { Page } from './types';
import { CASE_STUDIES, IDENTITY_PATHS } from './constants';
import { analyzeApplication } from './services/gemini';

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

  const renderHome = () => (
    <div className="space-y-32">
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center">
        <span className="text-brand font-heading text-xl tracking-[0.2em] mb-4">JUAN CARLOS ZERMEÑO</span>
        <h2 className="heading-xl mb-8">BUILD THE AUTHORITY.<br/><span className="text-brand">OWN THE CATEGORY.</span></h2>
        <div className="max-w-2xl">
          <p className="text-body text-muted mb-10 leading-relaxed">
            I help founders and high-stakes organizations exit the commodity trap. 
            This is not about marketing; it's about the precision architecture of perceived value. 
            Build a legacy, not a profile.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => setActivePage(Page.APPLY)}
              className="px-8 py-4 bg-brand text-bg font-heading text-xl tracking-wider hover:bg-brand-dark transition-colors"
            >
              APPLY TO WORK TOGETHER
            </button>
            <button 
              onClick={() => setActivePage(Page.CASE_STUDIES)}
              className="px-8 py-4 border border-white/20 font-heading text-xl tracking-wider hover:border-brand hover:text-brand transition-colors"
            >
              VIEW CASE STUDIES
            </button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center border-t border-white/10 pt-32">
        <h3 className="heading-lg">THE COST OF<br/>INVISIBILITY</h3>
        <div className="space-y-8">
          <p className="text-xl text-muted leading-relaxed">
            Most "authorities" are actually just loud commodity providers. If you are competing on price, 
            your positioning is broken. If your founder identity is under-leveraged, your scale is capped.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border-l-2 border-brand/30 bg-white/5">Weak Positioning</div>
            <div className="p-4 border-l-2 border-brand/30 bg-white/5">Price Wars</div>
            <div className="p-4 border-l-2 border-brand/30 bg-white/5">Inconsistent Presence</div>
            <div className="p-4 border-l-2 border-brand/30 bg-white/5">Low-Value Leads</div>
          </div>
        </div>
      </section>

      {/* Identity Entry Points */}
      <section className="space-y-12">
        <div className="flex justify-between items-end">
          <h3 className="heading-lg">SELECT YOUR<br/>NARRATIVE PATH</h3>
          <p className="text-muted text-sm hidden md:block">03 / 07</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IDENTITY_PATHS.map((path) => (
            <div 
              key={path.id}
              onClick={() => setActivePage(Page.IDENTITY)}
              className="p-8 border border-white/5 bg-white/5 cursor-pointer group hover:bg-brand/10 hover:border-brand transition-all flex flex-col justify-between aspect-square"
            >
              <h4 className="font-heading text-2xl leading-none group-hover:text-brand transition-colors">{path.title}</h4>
              <p className="text-muted text-sm">{path.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Framework Section */}
      <section className="space-y-16 border-t border-white/10 pt-32">
        <div className="max-w-3xl">
          <h3 className="heading-lg mb-6">THE PROPRIETARY<br/>AUTHORITY METHOD</h3>
          <p className="text-body text-muted">
            We don't do services. We execute a comprehensive framework that engineers status and eliminates competition.
          </p>
        </div>
        <FrameworkDiagram />
      </section>

      {/* Qualification Filter */}
      <section className="bg-white/5 p-12 md:p-20 border border-brand/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="heading-lg mb-8 text-brand">WHO THIS IS NOT FOR</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-brand">/</span>
                <span className="text-muted">Short-term thinkers looking for "quick hacks."</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand">/</span>
                <span className="text-muted">Commodity providers afraid of bold positioning.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand">/</span>
                <span className="text-muted">Founders unwilling to invest in cinematic quality.</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl italic text-white/80 mb-8">
              "Authority is not granted. It is claimed through strategic design and relentless execution."
            </p>
            <button 
              onClick={() => setActivePage(Page.APPLY)}
              className="self-start px-8 py-4 bg-brand text-bg font-heading text-xl"
            >
              PROCEED TO APPLICATION
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const renderCaseStudies = () => (
    <div className="space-y-20 pt-10">
      <header className="space-y-4">
        <h2 className="heading-xl">MEASURABLE<br/>OUTCOMES</h2>
        <p className="max-w-xl text-muted">
          Strategic proof of transformation. These are not projects; they are case studies in market dominance.
        </p>
      </header>
      
      <div className="space-y-32">
        {CASE_STUDIES.map((study) => (
          <div key={study.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative group overflow-hidden">
              <img src={study.image} alt={study.title} className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute top-4 left-4 bg-brand text-bg font-heading px-3 py-1 text-sm">{study.category}</div>
            </div>
            <div className="space-y-8">
              <h3 className="heading-lg">{study.title}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-heading text-brand text-xl mb-2">PROBLEM</h4>
                  <p className="text-muted">{study.problem}</p>
                </div>
                <div>
                  <h4 className="font-heading text-brand text-xl mb-2">STRATEGIC SHIFT</h4>
                  <p className="text-muted">{study.shift}</p>
                </div>
                <div>
                  <h4 className="font-heading text-brand text-xl mb-2">EXECUTION</h4>
                  <p className="text-muted">{study.execution}</p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <h4 className="font-heading text-white text-3xl mb-2">RESULT</h4>
                  <p className="text-white text-xl font-bold">{study.result}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderApply = () => (
    <div className="max-w-4xl pt-10 pb-32">
      <h2 className="heading-xl mb-4">STRATEGIC<br/>APPLICATION</h2>
      <p className="text-muted text-xl mb-12">
        We prioritize partners ready for deep-level transformation. 
        Filter your inquiry below.
      </p>

      {aiFeedback ? (
        <div className="p-8 border border-brand bg-brand/5 space-y-6">
          <h3 className="font-heading text-3xl text-brand">ASSESSMENT COMPLETE</h3>
          <p className="text-xl text-white leading-relaxed">{aiFeedback}</p>
          <button 
            onClick={() => setAiFeedback(null)}
            className="px-6 py-3 border border-brand text-brand hover:bg-brand hover:text-bg transition-all"
          >
            SUBMIT ANOTHER
          </button>
        </div>
      ) : (
        <form onSubmit={handleApplySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="block text-sm font-heading tracking-widest text-muted uppercase">Primary Objective</label>
            <select name="objective" required className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-brand outline-none appearance-none">
              <option value="">Select...</option>
              <option value="authority">Build Personal Authority</option>
              <option value="scale">Scale Corporate Brand</option>
              <option value="luxury">Exit Commodity Tier</option>
              <option value="engine">Performance Engine</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-heading tracking-widest text-muted uppercase">Annual Revenue Range</label>
            <select name="revenue" required className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-brand outline-none appearance-none">
              <option value="">Select...</option>
              <option value="1-5m">$1M - $5M</option>
              <option value="5-20m">$5M - $20M</option>
              <option value="20m+">$20M+</option>
            </select>
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="block text-sm font-heading tracking-widest text-muted uppercase">Current Marketing Structure</label>
            <textarea name="structure" required rows={4} className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-brand outline-none" placeholder="Describe your current team and strategy..."></textarea>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-heading tracking-widest text-muted uppercase">Desired Timeline</label>
            <input name="timeline" type="text" required className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-brand outline-none" placeholder="e.g. 6 Months" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-heading tracking-widest text-muted uppercase">Investment Threshold</label>
            <input name="budget" type="text" required className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-brand outline-none" placeholder="e.g. $10k+/mo" />
          </div>
          <div className="md:col-span-2 pt-6">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-brand text-bg py-6 font-heading text-2xl tracking-widest hover:bg-brand-dark transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'ANALYZING ALIGNMENT...' : 'SUBMIT FOR STRATEGIC REVIEW'}
            </button>
            <p className="mt-4 text-[10px] text-muted uppercase tracking-widest text-center">
              All applications are reviewed personally by Juan Carlos Zermeño. Expect a 48h turnaround.
            </p>
          </div>
        </form>
      )}
    </div>
  );

  const renderContent = () => {
    switch (activePage) {
      case Page.HOME: return renderHome();
      case Page.CASE_STUDIES: return renderCaseStudies();
      case Page.APPLY: return renderApply();
      case Page.FRAMEWORK: return (
        <div className="pt-10 space-y-16">
          <h2 className="heading-xl">PROPRIETARY<br/>SYSTEM</h2>
          <FrameworkDiagram />
          <div className="max-w-3xl space-y-8 text-muted text-xl leading-relaxed">
            <p>
              Most agencies sell deliverables. We sell dominance. Our framework is designed to create an 
              impenetrable authority moat around your brand, making you the only logical choice in your market.
            </p>
            <button onClick={() => setActivePage(Page.APPLY)} className="text-brand font-heading text-2xl border-b-2 border-brand pb-1">
              IMPLEMENT THIS SYSTEM →
            </button>
          </div>
        </div>
      );
      case Page.PHILOSOPHY: return (
        <div className="max-w-4xl pt-10 space-y-16">
          <h2 className="heading-xl">THE THESIS</h2>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="heading-lg text-brand">01 / PRODUCTION IS A COMMODITY</h3>
              <p className="text-muted text-xl">
                High-quality video and design are the table stakes. They are no longer a differentiator. 
                Without the underlying architecture of authority, you are just making expensive noise.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="heading-lg text-brand">02 / AUTHORITY IS ENGINEERED</h3>
              <p className="text-muted text-xl">
                Status is a technical challenge. We map the psychological journey of your target market 
                and ensure every visual and verbal cue reinforces your position at the top.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="heading-lg text-brand">03 / RADICAL EXCLUSIVITY</h3>
              <p className="text-muted text-xl">
                The most powerful position in any market is "hard to reach." We build systems that 
                elevate you while filtering for high-intent, low-friction clients.
              </p>
            </div>
          </div>
        </div>
      );
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-brand selection:text-bg">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      
      {/* Mobile Nav */}
      <div className="md:hidden fixed top-0 left-0 w-full p-6 z-50 bg-bg border-b border-white/10 flex justify-between items-center">
        <h1 className="font-heading text-2xl text-brand" onClick={() => setActivePage(Page.HOME)}>JCZ</h1>
        <button onClick={() => setActivePage(Page.APPLY)} className="font-heading text-sm border border-brand px-3 py-1 text-brand">APPLY</button>
      </div>

      <main className="md:ml-64 px-6 py-20 md:px-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>

      {/* Persistent CTA Bar */}
      <div className="fixed bottom-0 right-0 p-8 z-40 hidden lg:block">
        <button 
          onClick={() => setActivePage(Page.APPLY)}
          className="group flex items-center gap-4 bg-white/5 hover:bg-brand transition-all p-2 pr-6 border border-white/10"
        >
          <div className="w-10 h-10 bg-brand group-hover:bg-bg flex items-center justify-center text-bg group-hover:text-brand transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
          <span className="font-heading text-lg group-hover:text-bg">APPLY FOR ADVISORY</span>
        </button>
      </div>
    </div>
  );
};

export default App;
