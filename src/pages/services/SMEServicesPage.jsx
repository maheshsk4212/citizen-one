import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { Briefcase, FileText, PieChart, Landmark } from 'lucide-react';

const SMEServicesPage = () => {
    const hero = (
        <Card className="bg-white border border-gray-200 p-5 shadow-sm">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Green Grocers Ltd</h3>
                        <p className="text-xs text-gray-500">Reg: 5829-4829</p>
                    </div>
                    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">Active</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-xl">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Cashflow</p>
                        <p className="text-lg font-bold text-gray-900">+ZK 240k</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-xl">
                        <p className="text-[10px] text-green-600 uppercase tracking-wider mb-1">Tax Status</p>
                        <p className="text-lg font-bold text-green-700">Compliant</p>
                    </div>
                </div>

                <button className="w-full bg-indigo-600 text-white py-3 rounded-xl text-sm font-bold shadow-md shadow-indigo-500/20 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
                    Start Business Health Check <PieChart size={16} />
                </button>
            </div>
        </Card>
    );

    const actions = [
        { label: 'Business Loan', icon: Briefcase, bg: 'bg-indigo-50', color: 'text-indigo-600' },
        { label: 'File GST', icon: FileText, bg: 'bg-purple-50', color: 'text-purple-600' },
        { label: 'Licenses', icon: Landmark, bg: 'bg-emerald-50', color: 'text-emerald-600' },
        { label: 'Reports', icon: PieChart, bg: 'bg-gray-100', color: 'text-gray-600' },
    ];

    const sections = [
        { label: 'Manage Employees' },
        { label: 'Vendor Payments' },
        { label: 'Government Schemes' },
    ];

    const insights = [
        { title: 'Credit Limit', desc: 'You are eligible for a credit limit increase to ZK 500k.' },
    ];

    return (
        <MiniPageLayout
            title="SME Services"
            theme="indigo"
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default SMEServicesPage;
