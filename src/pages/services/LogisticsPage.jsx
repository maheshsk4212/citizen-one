import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { Truck, MapPin, Package, Calculator } from 'lucide-react';

const LogisticsPage = () => {
    const hero = (
        <Card className="bg-amber-500 text-white p-5 shadow-md">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-4xl font-bold mb-1">3</h2>
                        <p className="text-amber-100 text-sm font-medium">Active Shipments</p>
                    </div>
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                        <Truck size={24} className="text-white" />
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs bg-amber-600/30 p-2 rounded-lg border border-amber-400/30">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></div>
                    <span>Next delivery expected by 4 PM today</span>
                </div>

                <button className="w-full bg-white text-amber-600 hover:bg-amber-50 py-3 rounded-xl text-sm font-bold shadow-sm transition-colors active:scale-[0.98]">
                    Track All Shipments
                </button>
            </div>
        </Card>
    );


    const actions = [
        { label: 'Book Now', icon: Truck, bg: 'bg-amber-100', color: 'text-amber-700' },
        { label: 'Track', icon: MapPin, bg: 'bg-blue-50', color: 'text-blue-600' },
        { label: 'Calc Fare', icon: Calculator, bg: 'bg-gray-100', color: 'text-gray-600' },
        { label: 'My Orders', icon: Package, bg: 'bg-indigo-50', color: 'text-indigo-600' },
    ];

    const sections = [
        { label: 'Warehousing Services' },
        { label: 'Fleet Management' },
        { label: 'Past Shipments' },
    ];

    const insights = [
        { title: 'Route Optimization', desc: 'Save 20 mins on the Trip #4582 via Highway 9.' },
    ];

    return (
        <MiniPageLayout
            title="Logistics"
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default LogisticsPage;
