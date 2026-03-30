import { Link } from 'react-router-dom';
import { Target, Users, Scale, ArrowRight } from 'lucide-react';

export function ViewHero() {
    return (
        <div className="w-full bg-[#fdfaf6]">
            
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 md:px-6 pt-20">
                
                {/* Subtle Background SVG Doodles */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                    <svg className="absolute top-[20%] left-[10%] w-12 h-12 text-[#f472b6] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                        <path d="M12 2l3 7h7l-6 5l2 8l-6-5l-6 5l2-8l-6-5h7z" />
                    </svg>
                    <svg className="absolute top-[60%] right-[15%] w-16 h-16 text-[#0ea5e9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" />
                        <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                    <svg className="absolute bottom-[20%] left-[25%] w-10 h-10 text-[#a3e635]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                        <line x1="4" y1="22" x2="4" y2="15" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                    
                    <div className="inline-flex items-center gap-2 px-4 py-1 doodle-box-sm bg-[#fef08a] mb-8 md:mb-12">
                        <span className="text-xl">💡</span>
                        <span className="text-sm text-slate-800 font-bold uppercase tracking-widest">
                            Context is everything
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-8 text-slate-800 tracking-tight leading-none" style={{ textShadow: "4px 4px 0px white" }}>
                        <span className="inline-block relative">
                            Equi
                            {/* Sketch underline */}
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#0ea5e9]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                        </span>
                        <span className="inline-block text-[#0ea5e9] -ml-1">Decide</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-700 font-bold mb-12 max-w-2xl mx-auto px-4 leading-relaxed">
                        Strict algorithmic thresholds inevitably punish applicants from under-resourced backgrounds. EquiDecide prevents this algorithmic bias using <strong className="bg-[#fefce8] px-1 doodle-box-sm inline-block translate-y-[-2px]">dynamic opportunity deficit scores</strong> to understand the true context behind the data.
                    </p>

                    <Link
                        to="/form"
                        className="inline-flex items-center justify-center gap-3 text-xl font-black text-slate-900 bg-[#38bdf8] px-10 py-5 doodle-button hover:bg-[#7dd3fc] active:bg-[#38bdf8] no-underline focus:outline-none"
                    >
                        <span>Launch App Demo</span>
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>

            {/* The Problem Section */}
            <section className="py-24 bg-white border-y-2 border-slate-900 border-dashed">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-slate-800 mb-4 inline-block px-4 py-2 bg-[#fee2e2] doodle-box-sm">The Problem with Baseline AI</h2>
                        <p className="text-slate-600 font-bold max-w-2xl mx-auto text-lg">Traditional machine learning endpoints apply uniform standards across fundamentally unequal data distributions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 doodle-box bg-[#f8fafc] flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-[#fca5a5] rounded-full flex items-center justify-center mb-6 border-2 border-slate-900">
                                <Target className="text-slate-900 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Hard Checkpoints</h3>
                            <p className="text-slate-600 font-semibold">A strict 85% algorithmic cutoff doesn't detect the resilience of scoring 82% without reliable internet access.</p>
                        </div>
                        <div className="p-8 doodle-box bg-[#f8fafc] flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-[#cbd5e1] rounded-full flex items-center justify-center mb-6 border-2 border-slate-900">
                                <Users className="text-slate-900 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Hidden Socioeconomics</h3>
                            <p className="text-slate-600 font-semibold">Generational factors like being a first-generation student are often entirely omitted from raw academic processing.</p>
                        </div>
                        <div className="p-8 doodle-box bg-[#f8fafc] flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-[#fde047] rounded-full flex items-center justify-center mb-6 border-2 border-slate-900">
                                <Scale className="text-slate-900 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Accidental Rejection</h3>
                            <p className="text-slate-600 font-semibold">Minority groups from Tier-3 cities get disproportionately penalized when uniform thresholds override nuanced context.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="py-24 bg-[#fdfaf6]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-slate-800 mb-6">Enter <span className="text-[#0ea5e9]">EquiDecide</span> Framework</h2>
                            <p className="text-lg text-slate-700 font-bold mb-6 leading-relaxed">
                                Our dashboard utilizes a custom Explainability Module to adjust rejection thresholds fluidly.
                            </p>
                            <ul className="space-y-4 font-semibold text-slate-600 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#16a34a] text-xl">1.</span>
                                    <span>Calculates an <strong>Opportunity Deficit Score</strong> based on location, resources, and demographic headwinds.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#16a34a] text-xl">2.</span>
                                    <span>Injects these variables into the classification threshold to lower barriers for contextually penalized applicants.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#16a34a] text-xl">3.</span>
                                    <span>Maintains transparency using an <strong>Equity Index Gauge</strong> to track approval rate gaps.</span>
                                </li>
                            </ul>
                            <Link to="/form" className="font-black text-[#0ea5e9] underline decoration-wavy decoration-[#f472b6] text-lg hover:text-[#0284c7]">
                                Try the interactive demo →
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#0ea5e9] rounded-xl transform translate-x-4 translate-y-4 border-2 border-slate-900"></div>
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Diverse students working together" className="relative z-10 w-full rounded-xl border-2 border-slate-900" />
                            
                            {/* Decorative element */}
                            <div className="absolute -top-6 -right-6 z-20">
                                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="#f472b6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
