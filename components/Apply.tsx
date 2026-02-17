import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Persona } from '../types';

interface ApplyProps {
    isSubmitting: boolean;
    aiFeedback: string | null;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onReset: () => void;
    persona: Persona;
}

const Apply: React.FC<ApplyProps> = ({ isSubmitting, aiFeedback, onSubmit, onReset, persona }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        onReset();
    }, []);
    const isAdvisor = persona === Persona.ADVISOR;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12 max-w-4xl mx-auto py-10"
        >
            <header className="space-y-4">
                <h2 className="heading-xl">
                    {isAdvisor ? 'STRATEGIC APPLICATION' : 'STRATEGIC COLLABORATION'}
                </h2>
                <p className="text-muted text-xl">
                    {isAdvisor
                        ? "I work with a limited number of founders and organizations committed to structural repositioning. Complete the qualification below."
                        : "I work with directors, producers, and creative teams who are crafting intentional narratives. Filter your inquiry below."}
                </p>
            </header>

            <AnimatePresence mode="wait">
                {aiFeedback ? (
                    <motion.div
                        key="feedback"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="p-10 border-2 border-brand bg-brand/5 space-y-8 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-brand flex items-center justify-center text-bg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20m10-10H2" /></svg>
                            </div>
                            <h3 className="font-heading text-4xl text-brand uppercase tracking-tighter">Assessment Complete</h3>
                        </div>
                        <p className="text-2xl text-white leading-relaxed font-light italic">"{aiFeedback}"</p>
                        <button
                            onClick={onReset}
                            className="px-8 py-4 border border-brand text-brand hover:bg-brand hover:text-bg font-heading text-lg tracking-widest transition-all"
                        >
                            BACK TO {isAdvisor ? 'APPLICATION' : 'INQUIRY'}
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={onSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <div className="space-y-2">
                            <label className="block text-sm font-heading tracking-widest text-muted uppercase">Primary Objective</label>
                            <select name="objective" required className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none appearance-none transition-colors">
                                <option value="" className="bg-bg">Select...</option>
                                {isAdvisor ? (
                                    <>
                                        <option value="Founder Authority Ascension" className="bg-bg">Founder Authority Ascension</option>
                                        <option value="Category Brand Domination" className="bg-bg">Category Brand Domination</option>
                                        <option value="Luxury Tier Elevation" className="bg-bg">Luxury Tier Elevation</option>
                                        <option value="Authority Performance Engine" className="bg-bg">Authority Performance Engine</option>
                                    </>
                                ) : (
                                    <>
                                        <option value="lead" className="bg-bg">Lead Role</option>
                                        <option value="genre" className="bg-bg">Genre Expansion</option>
                                        <option value="media" className="bg-bg">Multi-Media</option>
                                        <option value="thought" className="bg-bg">Thought Leader</option>
                                    </>
                                )}
                            </select>
                        </div>
                        {isAdvisor ? (
                            <>
                                <div className="space-y-2">
                                    <label className="block text-sm font-heading tracking-widest text-muted uppercase">Annual Revenue</label>
                                    <select name="revenue" required className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none appearance-none transition-colors">
                                        <option value="" className="bg-bg">Select Range...</option>
                                        <option value="$1M - $5M" className="bg-bg">$1M - $5M</option>
                                        <option value="$5M - $20M" className="bg-bg">$5M - $20M</option>
                                        <option value="$20M+" className="bg-bg">$20M+</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-heading tracking-widest text-muted uppercase">Investment Threshold</label>
                                    <select name="threshold" required className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none appearance-none transition-colors">
                                        <option value="" className="bg-bg">Engagement minimum $10k/mo</option>
                                        <option value="$10k - $25k" className="bg-bg">$10k - $25k/mo</option>
                                        <option value="$25k - $50k" className="bg-bg">$25k - $50k/mo</option>
                                        <option value="$50k+" className="bg-bg">$50k+/mo</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-heading tracking-widest text-muted uppercase">Timeline</label>
                                    <select name="timeline" required className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none appearance-none transition-colors">
                                        <option value="" className="bg-bg">Select window...</option>
                                        <option value="Immediate" className="bg-bg">Immediate Execution</option>
                                        <option value="30-90 Days" className="bg-bg">30-90 Days</option>
                                        <option value="Planning" className="bg-bg">Future Planning</option>
                                    </select>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="space-y-2">
                                    <label className="block text-sm font-heading tracking-widest text-muted uppercase">Production Type</label>
                                    <select name="type" required className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none appearance-none transition-colors">
                                        <option value="" className="bg-bg">Select...</option>
                                        <option value="film" className="bg-bg">Film</option>
                                        <option value="series" className="bg-bg">Series</option>
                                        <option value="digital" className="bg-bg">Digital</option>
                                        <option value="stage" className="bg-bg">Stage</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-heading tracking-widest text-muted uppercase">Timeline</label>
                                    <input name="timeline" type="text" required className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none transition-colors" placeholder="Production window" />
                                </div>
                            </>
                        )}
                        <div className="space-y-2">
                            <label className="block text-sm font-heading tracking-widest text-muted uppercase">{isAdvisor ? "Entity Name" : "Entity / Production"}</label>
                            <input name="entity" type="text" required className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none transition-colors" placeholder={isAdvisor ? "Enterprise Name" : "Production Title"} />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="block text-sm font-heading tracking-widest text-muted uppercase">{isAdvisor ? "Marketing Structure / Context" : "Narrative Vision"}</label>
                            <textarea name="structure" required rows={4} className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none transition-colors resize-none" placeholder={isAdvisor ? "Describe your current marketing assembly..." : "Open-ended alignment / Describe the role and strategic goals..."}></textarea>
                        </div>
                        <div className="md:col-span-2 pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-6 bg-brand text-bg font-heading text-2xl tracking-widest hover:bg-brand-dark transition-all disabled:opacity-50"
                            >
                                {isSubmitting ? 'ANALYZING...' : (isAdvisor ? 'SUBMIT APPLICATION' : 'REQUEST DIRECTION')}
                            </button>
                            <p className="mt-4 text-[10px] text-muted uppercase tracking-widest text-center opacity-60">
                                {isAdvisor
                                    ? "All applications are reviewed personally by Juan Carlos Zermeño. Qualified partners are contacted within 48 hours."
                                    : "All collaboration requests are reviewed personally. If aligned, I’ll connect to explore our next narrative."}
                            </p>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Apply;
