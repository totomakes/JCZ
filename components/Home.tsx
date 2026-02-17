
import React from 'react';
import { motion } from 'framer-motion';
import FrameworkDiagram from './FrameworkDiagram';
import { IDENTITY_PATHS } from '../constants';
import { Page } from '../types';

interface HomeProps {
    onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
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
                        JUAN CARLOS ZERMEÑO
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="heading-xl"
                    >
                        BUILD THE AUTHORITY.<br /><span className="text-brand">OWN THE CATEGORY.</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-2xl"
                    >
                        <p className="text-body text-muted mb-10 leading-relaxed text-xl">
                            I help founders and high-stakes organizations exit the commodity trap.
                            This is not about marketing; it's about the precision architecture of perceived value.
                            Build a legacy, not a profile.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={() => onNavigate(Page.APPLY)}
                                className="px-8 py-4 bg-brand text-bg font-heading text-xl tracking-wider hover:bg-brand-dark transition-all transform hover:-translate-y-1"
                            >
                                APPLY TO WORK TOGETHER
                            </button>
                            <button
                                onClick={() => onNavigate(Page.CASE_STUDIES)}
                                className="px-8 py-4 border border-white/20 font-heading text-xl tracking-wider hover:border-brand hover:text-brand transition-all transform hover:-translate-y-1"
                            >
                                VIEW CASE STUDIES
                            </button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex-1 relative"
                >
                    <div className="absolute inset-0 border border-brand/20 translate-x-4 translate-y-4 -z-10" />
                    <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
                        <img
                            src="/assets/hero.jpg"
                            alt="Juan Carlos Zermeño - Strategic Authority and Category Kingmaker"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
                    </div>
                </motion.div>
            </section>

            {/* Problem */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center border-t border-white/10 pt-32">
                <h3 className="heading-lg">THE COST OF<br />INVISIBILITY</h3>
                <div className="space-y-8">
                    <p className="text-xl text-muted leading-relaxed">
                        Most "authorities" are actually just loud commodity providers. If you are competing on price,
                        your positioning is broken. If your founder identity is under-leveraged, your scale is capped.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Weak Positioning', 'Price Wars', 'Inconsistent Presence', 'Low-Value Leads'].map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-4 border-l-2 border-brand/30 bg-white/5"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Identity Entry Points */}
            <section className="space-y-12">
                <div className="flex justify-between items-end">
                    <h3 className="heading-lg">SELECT YOUR<br />NARRATIVE PATH</h3>
                    <p className="text-muted text-sm hidden md:block">03 / 07</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {IDENTITY_PATHS.map((path, i) => (
                        <motion.div
                            key={path.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => onNavigate(Page.IDENTITY)}
                            className="p-8 border border-white/5 bg-white/5 cursor-pointer group hover:bg-brand/10 hover:border-brand transition-all flex flex-col justify-between aspect-square"
                        >
                            <h4 className="font-heading text-2xl leading-none group-hover:text-brand transition-colors">{path.title}</h4>
                            <p className="text-muted text-sm">{path.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Framework Section */}
            <section className="space-y-16 border-t border-white/10 pt-32">
                <div className="max-w-3xl">
                    <h3 className="heading-lg mb-6">THE PROPRIETARY<br />AUTHORITY METHOD</h3>
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
                            {[
                                'Short-term thinkers looking for "quick hacks."',
                                'Commodity providers afraid of bold positioning.',
                                'Founders unwilling to invest in cinematic quality.'
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="text-brand">/</span>
                                    <span className="text-muted">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-xl italic text-white/80 mb-8">
                            "Authority is not granted. It is claimed through strategic design and relentless execution."
                        </p>
                        <button
                            onClick={() => onNavigate(Page.APPLY)}
                            className="self-start px-8 py-4 bg-brand text-bg font-heading text-xl hover:bg-brand-dark transition-colors"
                        >
                            PROCEED TO APPLICATION
                        </button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
