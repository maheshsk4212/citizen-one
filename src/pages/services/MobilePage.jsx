import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { Smartphone, Wifi, CreditCard, RotateCw } from 'lucide-react';

const MobilePage = () => {
    const hero = (
        <Card className="bg-purple-700 text-white p-5 shadow-md">
            <div className="flex justify-between">
                <div>
                    <p className="text-xs text-purple-200 uppercase">My Number</p>
                    <h3 className="text-xl font-bold mb-1">+1 987 654 3210</h3>
                    <p className="text-xs text-purple-100">Prepaid • Expires in 12 days</p>
                </div>
                <Smartphone size={32} className="text-purple-300" />
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 flex gap-4 text-xs">
                <span>Data: 1.2 GB left</span>
            </div>
        </Card>
    );

    const actions = [
        { label: 'Recharge', icon: Smartphone, bg: 'bg-purple-50', color: 'text-purple-600' },
        { label: 'Data Pack', icon: Wifi, bg: 'bg-blue-50', color: 'text-blue-600' },
        { label: 'Pay Bill', icon: CreditCard, bg: 'bg-orange-50', color: 'text-orange-600' },
        { label: 'History', icon: RotateCw, bg: 'bg-gray-100', color: 'text-gray-600' },
    ];

    const sections = [
        { label: 'Popular Plans' },
        { label: 'Family Accounts' },
        { label: 'Roaming Services' },
    ];

    const insights = [
        { title: 'Plan Expiring', desc: 'Your 5G Data Pack expires tomorrow. Recharge now.' },
    ];

    return (
        <MiniPageLayout
            title="Mobile & Airtime"
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default MobilePage;
