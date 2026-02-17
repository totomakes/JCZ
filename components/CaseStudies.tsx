
import React from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDIES, ACTOR_PROJECTS } from '../constants';
import { Persona } from '../types';

interface CaseStudiesProps {
    persona: Persona;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ persona }) => {
    const isAdvisor = persona === Persona.ADVISOR;
    const items = isAdvisor ? CASE_STUDIES : ACTOR_PROJECTS;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-20 pt-10"
        >
            <header className="space-y-4">
                <h2 className="heading-xl">
                    {isAdvisor ? <>MEASURABLE<br />OUTCOMES</> : <>PROJECTS &<br />CREDITS</>}
                </h2>
                <p className="max-w-xl text-muted text-xl">
                    {isAdvisor
                        ? "Strategic proof of transformation. These are not projects; they are case studies in market dominance."
                        : "A selection of feature films, commercials, and digital productions featuring high-stakes performances."}
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
                        <div className="relative group overflow-hidden">
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
                                {isAdvisor ? (
                                    <>
                                        <div>
                                            <h4 className="font-heading text-brand text-xl mb-2">PROBLEM</h4>
                                            <p className="text-muted text-lg">{(item as any).problem}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-heading text-brand text-xl mb-2">STRATEGIC SHIFT</h4>
                                            <p className="text-muted text-lg">{(item as any).shift}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-heading text-brand text-xl mb-2">EXECUTION</h4>
                                            <p className="text-muted text-lg">{(item as any).execution}</p>
                                        </div>
                                        <div className="pt-6 border-t border-white/10">
                                            <h4 className="font-heading text-white text-3xl mb-2">RESULT</h4>
                                            <p className="text-brand text-2xl font-bold">{(item as any).result}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <h4 className="font-heading text-brand text-xl mb-2">ROLE</h4>
                                            <p className="text-muted text-lg">{(item as any).role}</p>
                                        </div>
                                        {(item as any).director && (
                                            <div>
                                                <h4 className="font-heading text-brand text-xl mb-2">DIRECTOR / PRODUCERS</h4>
                                                <p className="text-muted text-lg">{(item as any).director}</p>
                                            </div>
                                        )}
                                        <div>
                                            <h4 className="font-heading text-brand text-xl mb-2">YEAR</h4>
                                            <p className="text-muted text-lg">{(item as any).year}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default CaseStudies;
