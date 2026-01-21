import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { CloudRain, Sprout, ShoppingCart, ShieldCheck } from 'lucide-react';

const AgriServicesPage = () => {
    const hero = (
        <Card className="bg-green-600 text-white p-5 shadow-md">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <CloudRain size={20} className="text-green-200" />
                            <span className="text-green-100 text-xs font-bold uppercase tracking-wider">Today's Weather</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-1">24°C</h2>
                        <p className="text-xs text-green-100">Light Rain expected in afternoon</p>
                    </div>
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                        <Sprout size={24} className="text-white" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-1">
                    <button className="bg-white/20 hover:bg-white/30 text-white py-2.5 rounded-xl text-xs font-bold backdrop-blur-sm transition-colors border border-white/20 flex items-center justify-center gap-2">
                        View Forecast
                    </button>
                    <button className="bg-white text-green-700 hover:bg-green-50 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-colors flex items-center justify-center gap-2">
                        Mandi Rates
                    </button>
                </div>
            </div>
        </Card>
    );

    const actions = [
        { label: 'Agri Loan', icon: Sprout, bg: 'bg-green-50', color: 'text-green-600' },
        { label: 'Buy Inputs', icon: ShoppingCart, bg: 'bg-amber-50', color: 'text-amber-600' },
        { label: 'Sell Crop', icon: ShoppingCart, bg: 'bg-blue-50', color: 'text-blue-600' }, // Using ShoppingCart primarily
        { label: 'Insurance', icon: ShieldCheck, bg: 'bg-red-50', color: 'text-red-600' },
    ];

    const sections = [
        { label: 'Crop Advisory Services' },
        { label: 'Mandi Prices Live' },
        { label: 'Soil Health Card' },
    ];

    const insights = [
        { title: 'Yield Prediction', desc: 'Expected yield is 4.5 tons/hectare based on current weather.' },
        { title: 'Pest Alert', desc: 'Low risk of pests this week.' },
    ];

    return (
        <MiniPageLayout
            title="Agri Services"
            theme="green"
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default AgriServicesPage;
