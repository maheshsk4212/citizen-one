import React from 'react';
import { Card } from './Card';
import { Sparkles, TrendingUp, AlertCircle, PiggyBank, FileClock, Lightbulb, ArrowRight } from 'lucide-react';
import { useRole, ROLES } from '../context/RoleContext';

export const AISmartSection = () => {
    const { activeRole } = useRole();

    // Mock insights based on role - Aligned with CitizenOne Spec
    const INSIGHTS = {
        [ROLES.CUSTOMER]: [
            { id: 1, icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-50', title: 'Due Today', desc: 'Electricity Bill (ZK 450) is due. Avoid late fees.', action: 'Pay Now' },
            { id: 2, icon: Lightbulb, color: 'text-amber-500', bg: 'bg-amber-50', title: 'Recommended', desc: 'Based on your spending, save ZK 1200 with Gold Plan.', action: 'View Plan' },
            { id: 3, icon: FileClock, color: 'text-blue-500', bg: 'bg-blue-50', title: 'Continue', desc: 'Resume your Home Loan application where you left off.', action: 'Resume' }
        ],
        [ROLES.AGENT]: [
            { id: 4, icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-50', title: 'High Demand Area', desc: 'Sector 4 has 15 merchants waiting for onboarding.', action: 'View Map' },
            { id: 5, icon: AlertCircle, color: 'text-orange-500', bg: 'bg-orange-50', title: 'Pending Collections', desc: '3 merchants have skipped payment this week.', action: 'View List' }
        ],
        [ROLES.FARMER]: [
            { id: 6, icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-50', title: 'Pest Alert', desc: 'Locust swarm reported within 50km radius.', action: 'See Advisory' },
            { id: 7, icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-50', title: 'Market Price', desc: 'Wheat prices are up 12% in the central mandi.', action: 'Check Prices' }
        ]
    };

    const currentInsights = INSIGHTS[activeRole] || INSIGHTS[ROLES.CUSTOMER];

    return (
        <div className="py-2">
            <div className="flex items-center gap-2 px-1" style={{ marginBottom: '1.2rem' }}>
                <Sparkles size={14} className="text-violet-600" />
                <h3 className="text-xs font-bold text-violet-700 uppercase tracking-wider">Citizen AI Insights</h3>
            </div>

            <div className="space-y-4">
                {currentInsights.map((insight) => (
                    <Card key={insight.id} className="p-6 !bg-indigo-50/50 border border-indigo-100 shadow-sm relative overflow-hidden">
                        {/* Decorative background blur */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

                        <div className="flex flex-col h-full justify-between relative z-10 gap-6">
                            <div>
                                {/* Header Label */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${insight.bg || 'bg-indigo-100'} ${insight.color || 'text-indigo-600'}`}>
                                        <Sparkles size={12} />
                                    </div>
                                    <span className="text-[10px] font-bold tracking-widest text-indigo-900 uppercase opacity-70">Citizen AI Alert</span>
                                </div>

                                {/* Main Content */}
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 leading-tight mb-2">{insight.title}</h4>
                                    <p className="text-sm font-medium text-gray-600 leading-relaxed">{insight.desc}</p>
                                </div>
                            </div>

                            {/* Action Button */}
                            {insight.action && (
                                <button className="w-full bg-indigo-600 text-white text-sm font-bold py-3.5 rounded-xl shadow-md shadow-indigo-500/20 hover:bg-indigo-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2">
                                    {insight.action} <ArrowRight size={16} />
                                </button>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
