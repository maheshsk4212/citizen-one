import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { Shield, FileWarning, RefreshCcw, Plus } from 'lucide-react';
import { useRole, ROLES } from '../../context/RoleContext';

const InsurancePage = () => {
    const { activeRole, selectedPartner, ROLES } = useRole();
    const isAgent = activeRole === ROLES.AGENT;

    const pageTitle = isAgent && selectedPartner
        ? `Insurance - ${selectedPartner.name}`
        : "Insurance";

    const hero = (
        <Card className="bg-white border-l-4 border-red-500 p-5 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">3 Active Policies</h3>
            <div className="space-y-2">
                <div className="flex justify-between text-xs items-center">
                    <span className="text-gray-600">Health (Family)</span>
                    <span className="text-green-600 font-bold">Active</span>
                </div>
                <div className="flex justify-between text-xs items-center">
                    <span className="text-gray-600">Car (Honda City)</span>
                    <span className="text-orange-500 font-bold">Renew in 5d</span>
                </div>
            </div>
        </Card>
    );

    const actions = [
        { label: 'Buy New', icon: Plus, bg: 'bg-red-50', color: 'text-red-600' },
        { label: 'Renew', icon: RefreshCcw, bg: 'bg-orange-50', color: 'text-orange-600' },
        { label: 'Claim', icon: FileWarning, bg: 'bg-gray-100', color: 'text-gray-600' },
        { label: 'My Policies', icon: Shield, bg: 'bg-blue-50', color: 'text-blue-600' },
        ...(activeRole === ROLES.AGENT ? [
            { id: 'assisted-sale', label: 'Assisted Sale', icon: Shield, bg: 'bg-indigo-50', color: 'text-indigo-600' }
        ] : [])
    ];

    const sections = [
        { label: 'Network Hospitals' },
        { label: 'Download Policy Copy' },
        { label: 'Claim Status' },
    ];

    const insights = [
        { title: 'Renewal Alert', desc: 'Car Insurance expires in 5 days. Renew now to avoid inspection.' },
    ];

    return (
        <MiniPageLayout
            title={pageTitle}
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default InsurancePage;
