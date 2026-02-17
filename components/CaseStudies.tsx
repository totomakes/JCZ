import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES, ACTOR_PROJECTS } from '../constants';
import { Persona } from '../types';

interface CaseStudiesProps {
    persona: Persona;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ persona }) => {
    const isAdvisor = persona === Persona.ADVISOR;
    const items = isAdvisor ? CASE_STUDIES : ACTOR_PROJECTS;
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // ESC key to close lightbox and scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-20 pt-10"
        >
            <header className="space-y-4">
                <h2 className="heading-xl">
                    {isAdvisor ? <>MEASURABLE<br />OUTCOMES</> : <>DIRECTED<br />PERFORMANCES</>}
                </h2>
                <p className="max-w-xl text-muted text-xl">
                    {isAdvisor
                        ? "Strategic proof of transformation. These are not projects; they are case studies in market dominance."
                        : "A selection of high-stakes narratives. These are not just roles; they are authored studies in cinematic presence."}
                </p>
            </header>

            <div className="space-y-32">
                {items.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
                    >
                        <div className="relative group overflow-hidden cursor-zoom-in" onClick={() => setSelectedImage(item.image)}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-brand text-bg font-heading px-3 py-1 text-sm">{item.category}</div>
                        </div>
                        <div className="space-y-8">
                            <h3 className="heading-lg">{item.title}</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-heading text-brand text-xl mb-2 uppercase">Problem</h4>
                                    <p className="text-muted text-lg">{(item as any).problem}</p>
                                </div>
                                <div>
                                    <h4 className="font-heading text-brand text-xl mb-2 uppercase">Strategic Shift</h4>
                                    <p className="text-muted text-lg">{(item as any).shift}</p>
                                </div>
                                <div>
                                    <h4 className="font-heading text-brand text-xl mb-2 uppercase">Execution</h4>
                                    <p className="text-muted text-lg">{(item as any).execution}</p>
                                </div>
                                <div className="pt-6 border-t border-white/10">
                                    <h4 className="font-heading text-white text-3xl mb-2 uppercase">Result</h4>
                                    <p className="text-brand text-2xl font-bold">{(item as any).result}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Photo Gallery for Actor */}
            {!isAdvisor && (
                <section className="space-y-12 border-t border-white/10 pt-32">
                    <div className="space-y-4">
                        <h3 className="heading-lg tracking-tighter">NARRATIVE CAPTURES</h3>
                        <p className="text-muted text-lg font-light">Behind the scenes and production moments from the authorship process.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            '/assets/actor/0009.avif',
                            'https://images.unsplash.com/photo-1574867022210-bd9ecc413bf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
                            '/assets/actor/IMG_8708.avif',
                            'https://images.unsplash.com/photo-1709316132030-5ae70fe4662f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
                            '/assets/actor/final-53.avif',
                            'https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
                            '/assets/actor/final-66.avif',
                            'https://images.unsplash.com/photo-1709316130071-dd3afcbb1dfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
                            'https://images.unsplash.com/photo-1674124504779-62197c204390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
                        ].map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="aspect-square overflow-hidden bg-white/5 cursor-zoom-in"
                                onClick={() => setSelectedImage(src)}
                            >
                                <img
                                    src={src}
                                    alt={`Production ${i + 1}`}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Fullscreen Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-xl flex items-center justify-center cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="absolute top-8 right-8 text-white/50 hover:text-brand transition-all p-4 z-[110] bg-white/5 rounded-full backdrop-blur-md"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </motion.button>
                        <motion.img
                            layoutId={selectedImage}
                            src={selectedImage}
                            className="w-full h-full object-contain pointer-events-none p-4 md:p-8"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", damping: 35, stiffness: 200 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default CaseStudies;
