import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { Heart, Activity, Calendar, Pill } from 'lucide-react';

const HealthPage = () => {
    const hero = (
        <Card className="bg-rose-500 text-white p-5 shadow-md">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold mb-1">Health Ezy</h3>
                    <p className="text-rose-100 text-xs">Your Health Passport</p>
                </div>
                <Heart size={36} className="text-rose-300" />
            </div>
            <div className="mt-4 flex gap-4 text-xs font-semibold">
                <span className="bg-white/20 px-2 py-1 rounded">BP: 120/80</span>
                <span className="bg-white/20 px-2 py-1 rounded">BMI: 22.4</span>
            </div>
        </Card>
    );

    const actions = [
        { label: 'Book Dr', icon: Activity, bg: 'bg-rose-50', color: 'text-rose-600' },
        { label: 'Medicines', icon: Pill, bg: 'bg-blue-50', color: 'text-blue-600' },
        { label: 'Lab Test', icon: Activity, bg: 'bg-orange-50', color: 'text-orange-600' },
        { label: 'Records', icon: Calendar, bg: 'bg-gray-100', color: 'text-gray-600' },
    ];

    const sections = [
        { label: 'Symptom Checker' },
        { label: 'Vaccination History' },
        { label: 'Find Hospitals Nearby' },
    ];

    const insights = [
        { title: 'Checkup Due', desc: 'Annual dental checkup is due next week.' },
    ];

    return (
        <MiniPageLayout
            title="HealthEzy"
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default HealthPage;
