import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { Dumbbell, Trophy, Users, Calendar } from 'lucide-react';

const SportsPage = () => {
    const hero = (
        <Card className="bg-teal-600 text-white p-5 shadow-md">
            <h3 className="text-xl font-bold mb-1">Active Streak</h3>
            <div className="flex items-end gap-2">
                <h2 className="text-4xl font-bold">12</h2>
                <span className="text-teal-200 text-sm mb-1.5">Days</span>
            </div>
            <p className="text-xs text-teal-100 mt-2">Keep it up! Physical health boosts mental wealth.</p>
        </Card>
    );

    const actions = [
        { label: 'Workouts', icon: Dumbbell, bg: 'bg-teal-50', color: 'text-teal-600' },
        { label: 'Events', icon: Trophy, bg: 'bg-yellow-50', color: 'text-yellow-600' },
        { label: 'Community', icon: Users, bg: 'bg-blue-50', color: 'text-blue-600' },
        { label: 'Book', icon: Calendar, bg: 'bg-gray-100', color: 'text-gray-600' },
    ];

    const sections = [
        { label: 'Local Sports Facilities' },
        { label: 'Mental Wellness Guides' },
        { label: 'Meditation Zone' },
    ];

    const insights = [
        { title: 'Wellness Tip', desc: 'Try a 10-minute walk after lunch to improve digestion and focus.' },
    ];

    return (
        <MiniPageLayout
            title="Sporting & Mental Health"
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default SportsPage;
