import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { Zap, Droplets, Smartphone, Plus, History, AlertCircle } from 'lucide-react';

const BillPaymentsPage = () => {
    const hero = (
        <Card className="bg-white border-l-4 border-orange-500 p-5 shadow-sm">
            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Total Due</p>
                    <h2 className="text-2xl font-bold text-gray-900">ZK 1,450.00</h2>
                    <p className="text-red-500 text-xs font-medium mt-1">Due within 3 days</p>
                </div>
                <button className="w-full bg-orange-600 text-white py-3 rounded-xl text-sm font-bold shadow-md shadow-orange-500/20 active:scale-[0.98] transition-transform">
                    Pay All Bills
                </button>
            </div>
        </Card>
    );

    const actions = [
        { label: 'Electricity', icon: Zap, bg: 'bg-yellow-50', color: 'text-yellow-600' },
        { label: 'Water', icon: Droplets, bg: 'bg-blue-50', color: 'text-blue-600' },
        { label: 'Mobile', icon: Smartphone, bg: 'bg-purple-50', color: 'text-purple-600' },
        { label: 'Add New', icon: Plus, bg: 'bg-gray-100', color: 'text-gray-600' },
    ];

    const sections = [
        { label: 'Payment History' },
        { label: 'Manage Billers' },
        { label: 'Auto-Pay Settings' },
    ];

    const insights = [
        { title: 'Bill Prediction', desc: 'Your electricity bill is expected to be 10% lower next month.', action: 'View Usage' },
        { title: 'Reminder', desc: 'Water bill autopay failed. Please update your card.', action: 'Fix Payment' },
    ];

    return (
        <MiniPageLayout
            title="Bill Payments"
            theme="orange"
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default BillPaymentsPage;
