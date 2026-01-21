import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { CircleDollarSign, TrendingUp, PiggyBank, Briefcase } from 'lucide-react';

const WealthPage = () => {
    const hero = (
        <Card className="bg-indigo-900 text-white p-5 shadow-lg shadow-indigo-500/30">
            <div className="flex flex-col items-center py-2">
                <p className="text-indigo-200 text-xs font-medium mb-1">Total Portfolio Value</p>
                <h2 className="text-3xl font-bold mb-2">ZK 582,400.00</h2>
                <div className="flex items-center gap-1 bg-green-500/20 px-2 py-0.5 rounded-full">
                    <TrendingUp size={12} className="text-green-400" />
                    <span className="text-green-400 text-xs font-bold">+8.4% (YTD)</span>
                </div>
            </div>
        </Card>
    );

    const actions = [
        { label: 'Invest', icon: TrendingUp, bg: 'bg-indigo-50', color: 'text-indigo-600' },
        { label: 'Funds', icon: CircleDollarSign, bg: 'bg-green-50', color: 'text-green-600' },
        { label: 'SIPs', icon: PiggyBank, bg: 'bg-pink-50', color: 'text-pink-600' },
        { label: 'Advisory', icon: Briefcase, bg: 'bg-gray-100', color: 'text-gray-600' },
    ];

    const sections = [
        { label: 'Mutual Fund Operations' },
        { label: 'Fixed Deposits' },
        { label: 'Pension Plans (NPS)' },
    ];

    const insights = [
        { title: 'Goal Analysis', desc: 'You are on track to reach your "New Car" goal by Dec 2026.' },
    ];

    return (
        <MiniPageLayout
            title="Wealth Management"
            theme="yellow"
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default WealthPage;
