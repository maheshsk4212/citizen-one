import React from 'react';
import { ArrowLeft, Sparkles, ChevronRight, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/Card';
import { motion } from 'framer-motion';

// Theme Configuration
const THEMES = {
    blue: {
        bg: 'bg-blue-600',
        bgHover: 'hover:bg-blue-700',
        light: 'bg-blue-50',
        border: 'border-blue-100',
        text: 'text-blue-600',
        textDark: 'text-blue-900',
        icon: 'text-blue-600',
        shadow: 'shadow-blue-500/20'
    },
    orange: {
        bg: 'bg-orange-600',
        bgHover: 'hover:bg-orange-700',
        light: 'bg-orange-50',
        border: 'border-orange-100',
        text: 'text-orange-600',
        textDark: 'text-orange-900',
        icon: 'text-orange-600',
        shadow: 'shadow-orange-500/20'
    },
    green: {
        bg: 'bg-green-600',
        bgHover: 'hover:bg-green-700',
        light: 'bg-green-50',
        border: 'border-green-100',
        text: 'text-green-600',
        textDark: 'text-green-900',
        icon: 'text-green-600',
        shadow: 'shadow-green-500/20'
    },
    amber: {
        bg: 'bg-amber-600',
        bgHover: 'hover:bg-amber-700',
        light: 'bg-amber-50',
        border: 'border-amber-100',
        text: 'text-amber-600',
        textDark: 'text-amber-900',
        icon: 'text-amber-600',
        shadow: 'shadow-amber-500/20'
    },
    violet: {
        bg: 'bg-violet-600',
        bgHover: 'hover:bg-violet-700',
        light: 'bg-violet-50',
        border: 'border-violet-100',
        text: 'text-violet-600',
        textDark: 'text-violet-900',
        icon: 'text-violet-600',
        shadow: 'shadow-violet-500/20'
    },
    indigo: {
        bg: 'bg-indigo-600',
        bgHover: 'hover:bg-indigo-700',
        light: 'bg-indigo-50',
        border: 'border-indigo-100',
        text: 'text-indigo-600',
        textDark: 'text-indigo-900',
        icon: 'text-indigo-600',
        shadow: 'shadow-indigo-500/20'
    },
    teal: {
        bg: 'bg-teal-600',
        bgHover: 'hover:bg-teal-700',
        light: 'bg-teal-50',
        border: 'border-teal-100',
        text: 'text-teal-600',
        textDark: 'text-teal-900',
        icon: 'text-teal-600',
        shadow: 'shadow-teal-500/20'
    },
    rose: {
        bg: 'bg-rose-600',
        bgHover: 'hover:bg-rose-700',
        light: 'bg-rose-50',
        border: 'border-rose-100',
        text: 'text-rose-600',
        textDark: 'text-rose-900',
        icon: 'text-rose-600',
        shadow: 'shadow-rose-500/20'
    },
    sky: {
        bg: 'bg-sky-600',
        bgHover: 'hover:bg-sky-700',
        light: 'bg-sky-50',
        border: 'border-sky-100',
        text: 'text-sky-600',
        textDark: 'text-sky-900',
        icon: 'text-sky-600',
        shadow: 'shadow-sky-500/20'
    },
    cyan: {
        bg: 'bg-cyan-600',
        bgHover: 'hover:bg-cyan-700',
        light: 'bg-cyan-50',
        border: 'border-cyan-100',
        text: 'text-cyan-600',
        textDark: 'text-cyan-900',
        icon: 'text-cyan-600',
        shadow: 'shadow-cyan-500/20'
    },
    yellow: {
        bg: 'bg-yellow-500',
        bgHover: 'hover:bg-yellow-600',
        light: 'bg-yellow-50',
        border: 'border-yellow-100',
        text: 'text-yellow-700',
        textDark: 'text-yellow-900',
        icon: 'text-yellow-600',
        shadow: 'shadow-yellow-500/20'
    },
    purple: {
        bg: 'bg-purple-600',
        bgHover: 'hover:bg-purple-700',
        light: 'bg-purple-50',
        border: 'border-purple-100',
        text: 'text-purple-600',
        textDark: 'text-purple-900',
        icon: 'text-purple-600',
        shadow: 'shadow-purple-500/20'
    },
};

export const MiniPageLayout = ({ title, role, hero, actions, sections, aiInsights, children, theme = 'blue' }) => {
    const navigate = useNavigate();
    const t = THEMES[theme] || THEMES.blue;

    return (
        <div className="pb-24">
            {/* Header */}
            <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center gap-4">
                <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-gray-100 rounded-full">
                    <ArrowLeft size={20} className="text-gray-700" />
                </button>
                <h1 className="text-lg font-bold text-gray-900">{title}</h1>
            </header>

            <div className="px-4 py-6 space-y-8">
                {/* Hero Section */}
                {hero && (
                    <section>
                        {hero}
                    </section>
                )}

                {/* Quick Actions */}
                {actions && actions.length > 0 && (
                    <section>
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider block" style={{ marginBottom: '1.5rem' }}>Quick Actions</h3>
                        <div className="grid grid-cols-4 gap-4">
                            {actions.map((action, idx) => (
                                <button key={idx} className="flex flex-col items-center gap-2 group">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 transition-transform active:scale-95 ${action.bg || t.light} ${action.color || t.text}`}>
                                        <action.icon size={22} />
                                    </div>
                                    <span className="text-[10px] font-medium text-gray-600 text-center leading-tight group-hover:text-gray-900">{action.label}</span>
                                </button>
                            ))}
                        </div>
                    </section>
                )}

                {/* Main Sections */}
                {sections && sections.length > 0 && (
                    <section>
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider block" style={{ marginBottom: '1.5rem' }}>Services</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {sections.map((section, idx) => (
                                <Link
                                    to={section.path || '#'}
                                    key={idx}
                                    className={`group flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:${t.border} transition-all active:scale-[0.98]`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${section.icon ? `${t.light} ${t.text} group-hover:${t.bg} group-hover:text-white` : 'bg-gray-50 text-gray-400 group-hover:bg-gray-800 group-hover:text-white'}`}>
                                            {section.icon ? <section.icon size={18} /> : <ArrowUpRight size={18} />}
                                        </div>
                                        <div>
                                            <span className={`text-sm font-bold text-gray-800 group-hover:${t.textDark} transition-colors block leading-tight`}>{section.label}</span>
                                            {section.desc && <span className="text-[10px] text-gray-400">{section.desc}</span>}
                                        </div>
                                    </div>
                                    <div className={`text-gray-300 group-hover:${t.text} transform group-hover:translate-x-1 transition-transform`}>
                                        <ChevronRight size={18} />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* AI Insights */}
                {aiInsights && aiInsights.length > 0 && (
                    <section>
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles size={14} className={t.text} />
                            <h3 className={`text-xs font-bold ${t.text} uppercase tracking-wider`}>AI Assistants</h3>
                        </div>
                        <div className="space-y-4">
                            {aiInsights.map((insight, idx) => (
                                <Card key={idx} className={`p-6 !${t.light}/50 border ${t.border} shadow-sm relative overflow-hidden`}>
                                    {/* Decorative background blur */}
                                    <div className={`absolute -top-10 -right-10 w-32 h-32 ${t.light} rounded-full blur-3xl opacity-60 pointer-events-none`}></div>

                                    <div className="flex flex-col h-full justify-between relative z-10 gap-6">
                                        <div>
                                            {/* Header Label */}
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${t.light} ${t.text}`}>
                                                    <Sparkles size={12} />
                                                </div>
                                                <span className={`text-[10px] font-bold tracking-widest ${t.textDark} uppercase opacity-70`}>Citizen AI Alert</span>
                                            </div>

                                            {/* Main Content */}
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 leading-tight mb-2">{insight.title}</h4>
                                                <p className="text-sm font-medium text-gray-600 leading-relaxed">{insight.desc}</p>
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <button className={`w-full ${t.bg} text-white text-sm font-bold py-3.5 rounded-xl shadow-md ${t.shadow} ${t.bgHover} active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2`}>
                                            {insight.action || 'View Details'} <ArrowRight size={16} />
                                        </button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>
                )}

                {children}
            </div>
        </div>
    );
};
