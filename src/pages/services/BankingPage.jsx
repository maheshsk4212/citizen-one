import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { ArrowLeftRight, CreditCard, Receipt, FileText, Banknote, ShieldAlert, LineChart } from 'lucide-react';
import { useRole, ROLES } from '../../context/RoleContext';

const BankingPage = () => {
    const { activeRole, selectedPartner, ROLES } = useRole();
    const isAgent = activeRole === ROLES.AGENT;

    const pageTitle = isAgent && selectedPartner
        ? `Banking - ${selectedPartner.name}`
        : "Banking";

    // Mock Data based on YAML
    const hero = (
        <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-5 shadow-lg shadow-blue-500/30">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-blue-100 text-xs font-medium mb-1">Total Balance</p>
                    <h2 className="text-2xl font-bold">ZK 125,000.00</h2>
                </div>
                <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                    <Banknote size={20} className="text-white" />
                </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                <span>Savings: **** 4589</span>
                <span className="font-bold">+2.4% this month</span>
            </div>
        </Card>
    );

    const actions = [
        { label: 'Transfer', icon: ArrowLeftRight, bg: 'bg-blue-50', color: 'text-blue-600' },
        { label: 'Pay Bill', icon: Receipt, bg: 'bg-orange-50', color: 'text-orange-600' },
        { label: 'Loan', icon: Banknote, bg: 'bg-green-50', color: 'text-green-600' },
        { label: 'Statements', icon: FileText, bg: 'bg-gray-50', color: 'text-gray-600' },
        ...(activeRole === ROLES.AGENT ? [
            { id: 'assisted-opening', label: 'Assist Open', icon: FileText, bg: 'bg-indigo-50', color: 'text-indigo-600' },
            { id: 'assisted-kyc', label: 'Assisted KYC', icon: FileText, bg: 'bg-emerald-50', color: 'text-emerald-600' }
        ] : [])
    ];

    const sections = [
        { label: 'My Accounts' },
        { label: 'Loans & Liabilities' },
        { label: 'Manage Cards' },
        { label: 'Scheduled Transfers' },
    ];

    const insights = [
        { title: 'Credit Score Update', desc: 'Your score increased by 15 points! You serve better loan rates.' },
        { title: 'Spending Alert', desc: 'Unusual spike in dining expenses detected this weekend.' },
    ];

    return (
        <MiniPageLayout
            title={pageTitle}
            theme="blue"
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default BankingPage;
