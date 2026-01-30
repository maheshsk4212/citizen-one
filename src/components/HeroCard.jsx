import React from 'react';
import { Card } from './Card';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ROLES } from '../context/RoleContext';

export const HeroCard = ({ activeRole }) => {
    return (
        <Card glass className="relative overflow-hidden border-none bg-indigo-50/80 dark:bg-indigo-900/20 shadow-sm ring-1 ring-inset ring-indigo-100">
            {/* Soft decorative background */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-100 rounded-full blur-2xl opacity-60"></div>

            <div className="relative z-10 p-1">
                {/* Header: Title */}
                <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-600">
                            <Sparkles size={16} />
                        </div>
                        <h2 className="text-sm font-bold text-indigo-950 uppercase tracking-wide">Citizen AI Alert</h2>
                    </div>
                    {activeRole === ROLES.AGENT && (
                        <div className="px-2 py-0.5 rounded-full bg-indigo-600 text-[10px] font-black text-white uppercase tracking-widest">
                            Agent Mode
                        </div>
                    )}
                </div>

                {activeRole === ROLES.CUSTOMER && (
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">Electricity Bill Due</h3>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-2xl font-black text-gray-900">ZK 450.00</span>
                            <span className="text-sm font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded-full">Due tomorrow</span>
                        </div>

                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            Pay Now <ArrowRight size={18} />
                        </button>
                    </div>
                )}

                {activeRole === ROLES.AGENT && (
                    <div className="flex flex-col h-full justify-between gap-4 h-48">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">3 Tasks Pending</h3>
                            <p className="text-sm text-gray-600 font-medium">2 new onboardings • 1 collection nearby</p>
                        </div>

                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            View Tasks <ArrowRight size={18} />
                        </button>
                    </div>
                )}

                {activeRole === ROLES.FARMER && (
                    <div className="flex flex-col h-full justify-between gap-4 h-48">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Heavy Rain Alert</h3>
                            <p className="text-sm text-gray-600 font-medium">Expected tomorrow. Secure your crops.</p>
                        </div>

                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            See Advisory <ArrowRight size={18} />
                        </button>
                    </div>
                )}
            </div>
        </Card>
    );
};
