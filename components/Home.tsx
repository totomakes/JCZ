
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import FrameworkDiagram from './FrameworkDiagram';
import { IDENTITY_PATHS, ACTOR_IDENTITY_PATHS } from '../constants';
import { Page, Persona } from '../types';

interface HomeProps {
    onNavigate: (page: Page) => void;
    persona: Persona;
}

const Home: React.FC<HomeProps> = ({ onNavigate, persona }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const isAdvisor = persona === Persona.ADVISOR;
    const paths = isAdvisor ? IDENTITY_PATHS : ACTOR_IDENTITY_PATHS;
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="space-y-32"
        >
            {/* Hero */}
            <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="flex-1 space-y-8">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-brand font-heading text-xl tracking-[0.2em] block"
                    >
                        {isAdvisor ? 'JUAN CARLOS ZERMEÑO' : 'DIRECTED PRESENCE'}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="heading-xl"
                    >
                        {isAdvisor ? (
                            <>BUILD THE AUTHORITY.<br /><span className="text-brand">OWN THE CATEGORY.</span></>
                        ) : (
                            <>DIRECT THE STORY.<br /><span className="text-brand">OWN THE ROLE.</span></>
                        )}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-2xl"
                    >
                        <p className="text-body text-muted mb-6 leading-relaxed text-xl">
                            {isAdvisor
                                ? "I architect category authority for founders and high-stakes brands through cinematic strategy, authored positioning, and performance-driven narrative systems. I do not produce content. I direct perception. I design positioning. I build authority engines that compound."
                                : "I move from character to category. As an actor, I architect presence through roles that shape perception. My craft is narrative. My roles are strategic. I build a body of work that compounds in impact."}
                        </p>
                        {!isAdvisor && (
                            <p className="text-brand font-heading text-lg tracking-widest uppercase mb-10">Directed by Juan Carlos Zermeño</p>
                        )}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={() => onNavigate(Page.APPLY)}
                                className="px-8 py-4 bg-brand text-bg font-heading text-xl tracking-wider hover:bg-brand-dark transition-all transform hover:-translate-y-1"
                            >
                                {isAdvisor ? 'APPLY TO WORK TOGETHER' : 'EXPLORE MY ARC'}
                            </button>
                            <button
                                onClick={() => onNavigate(Page.CASE_STUDIES)}
                                className="px-8 py-4 border border-white/20 font-heading text-xl tracking-wider hover:border-brand hover:text-brand transition-all transform hover:-translate-y-1"
                            >
                                {isAdvisor ? 'VIEW CASE STUDIES' : 'VIEW REELS'}
                            </button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex-1 relative"
                >
                    <img
                        src={isAdvisor ? "/advisor_hero.webp" : "/actor_hero.webp"}
                        alt="Juan Carlos Zermeño"
                        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                    />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 border-2 border-brand/30 animate-pulse hidden md:block"></div>
                    <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-brand/50 hidden md:block"></div>
                </motion.div>
            </section>

            {/* Problem / Bio */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center border-t border-white/10 pt-32">
                <h3 className="heading-lg">
                    {isAdvisor ? <>THE COST OF<br />INVISIBILITY</> : <>THE COST OF<br />INVISIBILITY</>}
                </h3>
                <div className="space-y-8">
                    <p className="text-xl text-muted leading-relaxed">
                        {isAdvisor
                            ? 'Most brands are not underperforming. They are mispositioned. When perception is weak, price becomes the argument. When founder identity is muted, authority stalls. Visibility without positioning is noise.'
                            : 'In acting, invisibility isn’t lack of talent—it’s lack of narrative control. If you don’t guide perception, you get typecast. If your range isn’t visible, opportunities shrink. Presence is not granted. It’s crafted.'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(isAdvisor ? [
                            'Narrative Misalignment',
                            'Price Compression',
                            'Founder Under-Leverage',
                            'Transactional Inbound'
                        ] : [
                            'Typecasting',
                            'Limited Range Perception',
                            'Inconsistent Visibility',
                            'Stalled Career Momentum'
                        ]).map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-4 border-l-2 border-brand/30 bg-white/5"
                            >
                                <span className="text-muted text-sm font-heading block mb-1">0{i + 1} /</span>
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Path Selection */}
            <section className="space-y-12 border-t border-white/10 pt-32">
                <div className="flex justify-between items-end">
                    <h3 className="heading-lg uppercase">
                        {isAdvisor ? <>SELECT YOUR<br />NARRATIVE PATH</> : <>Choose Your<br />Role Arc</>}
                    </h3>
                    <p className="text-muted text-sm hidden md:block">{isAdvisor ? "01 / SYSTEM" : "01 / ARC"}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {paths.map((path, i) => (
                        <motion.div
                            key={path.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => onNavigate(Page.APPLY)}
                            className="p-8 border border-white/5 bg-white/5 cursor-pointer group hover:bg-brand/10 hover:border-brand transition-all flex flex-col justify-between aspect-square"
                        >
                            <h4 className="font-heading text-2xl leading-none group-hover:text-brand transition-colors uppercase">{path.title}</h4>
                            <p className="text-muted text-sm">{path.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Framework Section (Only for Advisor) */}
            {isAdvisor && (
                <section className="space-y-16 border-t border-white/10 pt-32">
                    <div className="max-w-3xl">
                        <h3 className="heading-lg mb-6 uppercase">
                            THE CATEGORY KINGZ<br />METHOD™
                        </h3>
                        <p className="text-body text-muted">
                            Most firms sell deliverables. This system engineers dominance. The Category Kingz Method™ aligns identity, perception, and distribution to create an authority moat around your brand. When executed correctly, you are not compared. You are selected.
                        </p>
                    </div>
                    <FrameworkDiagram />
                </section>
            )}

            {/* Qualification Filter */}
            <section className="bg-white/5 p-12 md:p-20 border border-brand/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="heading-lg mb-8 text-brand">WHO THIS IS NOT FOR</h3>
                        <ul className="space-y-6">
                            {(isAdvisor ? [
                                'Businesses seeking tactical content without strategic repositioning.',
                                'Founders unwilling to lead from the front.',
                                'Organizations optimizing for volume over authority.'
                            ] : [
                                'Actors content with typecast stability.',
                                'Performers unwilling to take strategic risks.',
                                'Those seeking fame over craft.'
                            ]).map((text, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="text-brand">/</span>
                                    <span className="text-muted">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-xl italic text-white/80 mb-8">
                            {isAdvisor
                                ? '"Authority is engineered. Perception is directed. Categories are claimed."'
                                : '"Presence isn’t granted. It’s directed."'}
                        </p>
                        <button
                            onClick={() => onNavigate(Page.APPLY)}
                            className="self-start px-8 py-4 bg-brand text-bg font-heading text-xl hover:bg-brand-dark transition-colors"
                        >
                            {isAdvisor ? 'PROCEED TO APPLICATION' : 'PROCEED TO CONNECT'}
                        </button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
