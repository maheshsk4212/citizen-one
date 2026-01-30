import React from 'react';
import {
    Users,
    CreditCard,
    FileText,
    MessageSquare,
    TrendingUp,
    AlertTriangle,
    ArrowRight,
    ChevronLeft,
    Power
} from 'lucide-react';
import { useRole } from '../../context/RoleContext';
import { Card } from '../Card';

export const PartnerDashboard = () => {
    const {
        selectedPartner,
        selectedPartnerType,
        setSelectedPartner,
        setWorkContext
    } = useRole();

    const quickActions = [
        { label: 'Onboard Customer', icon: Users, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
        { label: 'Collect Payment', icon: CreditCard, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'Process Request', icon: FileText, color: 'text-purple-500', bg: 'bg-purple-500/10' },
        { label: 'Support Chat', icon: MessageSquare, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    ];

    const tasks = [
        { id: 1, title: 'KYC Verification', customer: 'Banda Moses', time: '10 mins ago', status: 'Pending', priority: 'High' },
        { id: 2, title: 'New Loan App', customer: 'Chanda Mary', time: '1 hour ago', status: 'In Review', priority: 'Medium' },
        { id: 3, title: 'Claim Initiation', customer: 'Mulenga John', time: '3 hours ago', status: 'Started', priority: 'High' },
    ];

    return (
        <div className="pb-32 min-h-screen bg-[#F8FAFC]">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setSelectedPartner(null)}
                        className="p-1 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                        <ChevronLeft size={20} className="text-slate-500" />
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-lg">
                            {selectedPartner?.logo}
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-slate-900 leading-tight">{selectedPartner?.name}</h2>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{selectedPartnerType} Portal</p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => setWorkContext(null)}
                    className="p-2 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all group"
                >
                    <Power size={20} />
                </button>
            </header>

            <div className="px-6 pt-6">
                {/* AI Risk Insights */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-4 rounded-3xl bg-amber-50 border border-amber-200 flex items-start gap-4"
                >
                    <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                        <AlertTriangle size={20} />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-amber-900">AI Risk Alert</h4>
                        <p className="text-xs text-amber-800 leading-relaxed mt-0.5">
                            Standard KYC quality check failed for 3 recent onboardings. High risk of fraud detected in Central Province.
                        </p>
                    </div>
                </motion.div>

                {/* Performance Summary */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Today's Earnings</p>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">ZK 1,240</h3>
                        <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                            <TrendingUp size={12} /> +12% from avg
                        </div>
                    </div>
                    <div className="p-5 rounded-3xl bg-white border border-slate-100 shadow-sm">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Success Rate</p>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">98.4%</h3>
                        <p className="mt-2 text-[10px] font-bold text-slate-500">24/25 completed</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mb-10">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-1">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {quickActions.map((action, idx) => (
                            <motion.button
                                key={idx}
                                whileTap={{ scale: 0.95 }}
                                className="flex flex-col items-center gap-3 p-5 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                            >
                                <div className={`p-4 rounded-2xl ${action.bg} ${action.color} group-hover:scale-105 transition-transform`}>
                                    <action.icon size={24} />
                                </div>
                                <span className="text-xs font-bold text-slate-700">{action.label}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Today's Tasks */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Today's Tasks</h3>
                        <button className="text-[var(--primary)] text-xs font-bold hover:underline flex items-center gap-1">
                            View Queue <ArrowRight size={14} />
                        </button>
                    </div>

                    <div className="space-y-3">
                        {tasks.map((task) => (
                            <Card key={task.id} className="p-4 flex items-center justify-between !bg-white border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className={`w-2 h-2 rounded-full ${task.priority === 'High' ? 'bg-red-500' : 'bg-amber-500'}`} />
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900">{task.title}</h4>
                                        <p className="text-xs text-slate-500 font-medium">{task.customer} • {task.time}</p>
                                    </div>
                                </div>
                                <span className={`text-[10px] font-bold border px-2 py-0.5 rounded-full ${task.status === 'Pending' ? 'text-amber-600 bg-amber-50 border-amber-100' : 'text-blue-600 bg-blue-50 border-blue-100'
                                    }`}>
                                    {task.status}
                                </span>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
