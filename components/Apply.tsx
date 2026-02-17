import React from 'react';
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
    const isAdvisor = persona === Persona.ADVISOR;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12 max-w-4xl mx-auto py-10"
        >
            <header className="space-y-4">
                <h2 className="heading-xl">
                    {isAdvisor ? 'START THE ARCHITECTURE' : 'PRODUCTION INQUIRY'}
                </h2>
                <p className="text-muted text-xl">
                    {isAdvisor
                        ? "We only accept 4 high-stakes advisory clients per quarter. Your application will be analyzed for strategic fit."
                        : "Inquiries for feature films, global commercials, and theatrical productions."}
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
                                        <option value="authority" className="bg-bg">Build Personal Authority</option>
                                        <option value="scale" className="bg-bg">Scale Corporate Brand</option>
                                        <option value="luxury" className="bg-bg">Exit Commodity Tier</option>
                                    </>
                                ) : (
                                    <>
                                        <option value="commercial" className="bg-bg">Commercial Representation</option>
                                        <option value="film" className="bg-bg">Feature Film Collaboration</option>
                                        <option value="talent" className="bg-bg">Talent Inquiry</option>
                                    </>
                                )}
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-heading tracking-widest text-muted uppercase">Entity / Production</label>
                            <input name="entity" type="text" required className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none transition-colors" placeholder={isAdvisor ? "Enterprise Name" : "Production House"} />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="block text-sm font-heading tracking-widest text-muted uppercase">Context / Project Details</label>
                            <textarea name="structure" required rows={4} className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none transition-colors resize-none" placeholder={isAdvisor ? "Briefly describe your market position..." : "Describe the project, role, and timeline..."}></textarea>
                        </div>
                        <div className="md:col-span-2 pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-6 bg-brand text-bg font-heading text-2xl tracking-widest hover:bg-brand-dark transition-all disabled:opacity-50"
                            >
                                {isSubmitting ? 'ANALYZING...' : (isAdvisor ? 'SUBMIT APPLICATION' : 'SEND INQUIRY')}
                            </button>
                            <p className="mt-4 text-[10px] text-muted uppercase tracking-widest text-center opacity-60">
                                All inquiries are reviewed personally. Expect a 48h turnaround.
                            </p>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Apply;
