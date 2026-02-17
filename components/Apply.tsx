
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ApplyProps {
    isSubmitting: boolean;
    aiFeedback: string | null;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onReset: () => void;
}

const Apply: React.FC<ApplyProps> = ({ isSubmitting, aiFeedback, onSubmit, onReset }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="max-w-4xl pt-10 pb-32"
        >
            <h2 className="heading-xl mb-4">STRATEGIC<br />APPLICATION</h2>
            <p className="text-muted text-xl mb-12">
                We prioritize partners ready for deep-level transformation.
                Filter your inquiry below.
            </p>

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
                            SUBMIT ANOTHER
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
                                <option value="authority" className="bg-bg">Build Personal Authority</option>
                                <option value="scale" className="bg-bg">Scale Corporate Brand</option>
                                <option value="luxury" className="bg-bg">Exit Commodity Tier</option>
                                <option value="engine" className="bg-bg">Performance Engine</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-heading tracking-widest text-muted uppercase">Annual Revenue Range</label>
                            <select name="revenue" required className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none appearance-none transition-colors">
                                <option value="" className="bg-bg">Select...</option>
                                <option value="1-5m" className="bg-bg">$1M - $5M</option>
                                <option value="5-20m" className="bg-bg">$5M - $20M</option>
                                <option value="20m+" className="bg-bg">$20M+</option>
                            </select>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="block text-sm font-heading tracking-widest text-muted uppercase">Current Marketing Structure</label>
                            <textarea name="structure" required rows={4} className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none transition-colors resize-none" placeholder="Describe your current team and strategy..."></textarea>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-heading tracking-widest text-muted uppercase">Desired Timeline</label>
                            <input name="timeline" type="text" required className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none transition-colors" placeholder="e.g. 6 Months" />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-heading tracking-widest text-muted uppercase">Investment Threshold</label>
                            <input name="budget" type="text" required className="w-full bg-white/5 border border-white/10 p-5 text-white focus:border-brand outline-none transition-colors" placeholder="e.g. $10k+/mo" />
                        </div>
                        <div className="md:col-span-2 pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-brand text-bg py-6 font-heading text-2xl tracking-widest hover:bg-brand-dark transition-all disabled:opacity-50 relative overflow-hidden"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-4">
                                        <span className="animate-pulse">ANALYZING ALIGNMENT...</span>
                                    </span>
                                ) : 'SUBMIT FOR STRATEGIC REVIEW'}
                            </button>
                            <p className="mt-4 text-[10px] text-muted uppercase tracking-widest text-center opacity-60">
                                All applications are reviewed personally by Juan Carlos Zermeño. Expect a 48h turnaround.
                            </p>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Apply;
