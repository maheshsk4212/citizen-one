import React from 'react';
import { QuickActions } from '../components/QuickActions';
import { ServiceGrid } from '../components/ServiceGrid';
import { Card } from '../components/Card';
import { ArrowRight } from 'lucide-react';
import { useRole } from '../context/RoleContext';
import { HeroCard } from '../components/HeroCard';
import { AISmartSection } from '../components/AISmartSection';
import { WeatherWidget } from '../components/WeatherWidget';
import { ShoppingCart, Zap, Coffee } from 'lucide-react';

export default function SuperHome() {
    const { activeRole, ROLES } = useRole();

    return (
        <div className="pb-32">

            {/* Hero Alert Card - Large bottom margin */}
            <div className="mb-8">
                <HeroCard activeRole={activeRole} />
            </div>

            {/* Farmer Specific: Weather Widget */}
            {activeRole === ROLES.FARMER && (
                <div className="mb-12">
                    <WeatherWidget />
                </div>
            )}

            {/* Quick Actions Section */}
            <QuickActions />

            {/* Services Section - Large top margin */}
            <div className="mt-12">
                <ServiceGrid limit={8} />
            </div>

            {/* AI Smart Section - Large top margin */}
            <div className="mt-12">
                <AISmartSection />
            </div>

            {/* Recent Activity Section - Large top margin with border */}
            <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="flex items-center justify-between px-1" style={{ marginBottom: '1.5rem' }}>
                    <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">Recent Activity</h3>
                    <button className="text-[var(--primary)] text-xs font-bold flex items-center gap-1 hover:underline">
                        View All <ArrowRight size={14} />
                    </button>
                </div>

                <div className="space-y-4">
                    {[
                        { id: 1, name: 'Grocery Store', time: 'Today, 10:30 AM', amount: '-ZK 240.00', icon: ShoppingCart, bg: 'bg-orange-100', color: 'text-orange-600' },
                        { id: 2, name: 'City Power', time: 'Yesterday, 4:15 PM', amount: '-ZK 450.00', icon: Zap, bg: 'bg-yellow-100', color: 'text-yellow-600' },
                        { id: 3, name: 'Coffee Shop', time: 'Yesterday, 9:00 AM', amount: '-ZK 55.00', icon: Coffee, bg: 'bg-brown-100', color: 'text-amber-700' }
                    ].map((item) => (
                        <Card key={item.id} className="flex items-center justify-between py-4 px-5 hover:bg-gray-50 transition-colors cursor-pointer !bg-white border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bg} ${item.color}`}>
                                    <item.icon size={20} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[var(--text-main)] mb-0.5">{item.name}</p>
                                    <p className="text-xs text-[var(--text-muted)] font-medium">{item.time}</p>
                                </div>
                            </div>
                            <span className="text-base font-bold text-gray-900">{item.amount}</span>
                        </Card>
                    ))}
                </div>
            </div>

        </div>
    );
}
