import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { LayoutGrid, BarChart3, MessageSquare, Headphones } from 'lucide-react';

const CommonServicesPage = () => {
    // This seems to be an Admin/System Overview type page based on spec
    const hero = (
        <Card className="bg-slate-800 text-white p-5 shadow-md">
            <h3 className="text-lg font-bold mb-1">System Overview</h3>
            <div className="flex gap-4 mt-4">
                <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">99.9%</p>
                    <p className="text-[10px] text-slate-400 uppercase">Uptime</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold text-blue-400">12ms</p>
                    <p className="text-[10px] text-slate-400 uppercase">Latency</p>
                </div>
            </div>
        </Card>
    );

    const actions = [
        { label: 'Analytics', icon: BarChart3, bg: 'bg-slate-100', color: 'text-slate-700' },
        { label: 'Tickets', icon: MessageSquare, bg: 'bg-blue-50', color: 'text-blue-600' },
        { label: 'Admin', icon: LayoutGrid, bg: 'bg-purple-50', color: 'text-purple-600' },
        { label: 'Support', icon: Headphones, bg: 'bg-green-50', color: 'text-green-600' },
    ];

    const sections = [
        { label: 'Service Logs' },
        { label: 'User Management' },
        { label: 'Security Controls' },
    ];

    const insights = [
        { title: 'Performance', desc: 'System load is normal. No incidents reported.' },
    ];

    return (
        <MiniPageLayout
            title="Common Services"
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default CommonServicesPage;
