import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { Send, Download, Smartphone, RefreshCw, Wallet } from 'lucide-react';

const WalletPage = () => {
    const hero = (
        <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-5 shadow-lg shadow-purple-500/30">
            <div className="flex flex-col items-center py-2">
                <p className="text-purple-200 text-xs font-medium mb-1">Wallet Balance</p>
                <h2 className="text-3xl font-bold mb-6">ZK 4,500.75</h2>
                <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full text-sm font-bold backdrop-blur-sm transition-colors border border-white/20">
                    + Add Money
                </button>
            </div>
        </Card>
    );

    const actions = [
        { label: 'Send', icon: Send, bg: 'bg-purple-50', color: 'text-purple-600' },
        { label: 'Request', icon: Download, bg: 'bg-indigo-50', color: 'text-indigo-600' },
        { label: 'Recharge', icon: Smartphone, bg: 'bg-pink-50', color: 'text-pink-600' },
        { label: 'Scan', icon: Wallet, bg: 'bg-blue-50', color: 'text-blue-600' }, // Reusing Wallet icon for Scan context placeholder
    ];

    const sections = [
        { label: 'Recent Transactions' },
        { label: 'Manage Beneficiaries' },
        { label: 'Wallet Settings' },
    ];

    const insights = [
        { title: 'Smart Recharge', desc: 'Recharge for ZK 200 now and get 5GB extra data.' },
        { title: 'Suspicious Activity', desc: 'No anomalies detected in your recent transactions.' },
    ];

    return (
        <MiniPageLayout
            title="My Wallet"
            theme="violet"
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default WalletPage;
