import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { Landmark, FileText, Stamp, Scale } from 'lucide-react';
import { useRole, ROLES } from '../../context/RoleContext';

const GovServicesPage = () => {
    const { activeRole } = useRole();

    const hero = (
        <Card className="bg-cyan-700 text-white p-5 shadow-lg relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-lg font-bold mb-1">Citizen Services</h3>
                <p className="text-cyan-100 text-sm">One-stop access to all government portals.</p>
            </div>
            <Landmark className="absolute right-[-10px] bottom-[-10px] text-cyan-500/30 w-32 h-32" />
        </Card>
    );

    const actions = [
        { label: 'Taxes', icon: Scale, bg: 'bg-cyan-50', color: 'text-cyan-700' },
        { label: 'Certificates', icon: Stamp, bg: 'bg-amber-50', color: 'text-amber-700' },
        { label: 'Land Records', icon: FileText, bg: 'bg-green-50', color: 'text-green-700' },
        { label: 'My Docs', icon: FileText, bg: 'bg-gray-100', color: 'text-gray-600' },
        ...(activeRole === ROLES.AGENT ? [
            { id: 'assisted-app', label: 'Assist App', icon: FileText, bg: 'bg-indigo-50', color: 'text-indigo-600' }
        ] : [])
    ];

    const sections = [
        { label: 'Birth & Death Registration' },
        { label: 'Pension Services' },
        { label: 'RTI Applications' },
    ];

    const insights = [
        { title: 'Eligibility Check', desc: 'You may be eligible for the new Housing Subsidy Scheme.' },
    ];

    return (
        <MiniPageLayout
            title="Government Services"
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default GovServicesPage;
