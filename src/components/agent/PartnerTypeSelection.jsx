import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Shield, Smartphone, ArrowRight, ChevronLeft } from 'lucide-react';
import { useRole } from '../../context/RoleContext';

export const PartnerTypeSelection = () => {
    const { setSelectedPartnerType, setWorkContext, PARTNER_TYPES } = useRole();

    const types = [
        {
            id: PARTNER_TYPES.BANK,
            title: 'Bank',
            description: 'Customer onboarding and financial transactions.',
            icon: Landmark,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            border: 'border-emerald-200'
        },
        {
            id: PARTNER_TYPES.INSURANCE,
            title: 'Insurance',
            description: 'Policy issuance, renewals, and claims processing.',
            icon: Shield,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            border: 'border-blue-200'
        },
        {
            id: PARTNER_TYPES.MNO,
            title: 'MNO',
            description: 'SIM activation and digital payment services.',
            icon: Smartphone,
            color: 'text-orange-600',
            bg: 'bg-orange-50',
            border: 'border-orange-200'
        }
    ];

    return (
        <div className="fixed inset-0 z-[60] flex flex-col justify-end bg-slate-900/40 backdrop-blur-sm">
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                className="relative w-full max-w-lg mx-auto bg-white rounded-t-[2.5rem] shadow-2xl p-6 pb-12 overflow-hidden"
            >
                <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8" />

                <header className="flex items-center gap-4 mb-8 px-2">
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setWorkContext(null)}
                        className="p-3 rounded-2xl bg-slate-50 text-slate-400 border border-slate-100"
                    >
                        <ChevronLeft size={24} />
                    </motion.button>
                    <div>
                        <h2 className="text-2xl font-black text-slate-900 leading-tight">Partner Type</h2>
                        <p className="text-slate-500 font-medium">Select your partner category.</p>
                    </div>
                </header>

                <div className="space-y-4">
                    {types.map((type, index) => {
                        const Icon = type.icon;
                        return (
                            <motion.button
                                key={type.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setSelectedPartnerType(type.id)}
                                className={`flex items-center gap-4 p-5 rounded-[1.5rem] border ${type.border} bg-white shadow-sm hover:shadow-md transition-all text-left w-full group`}
                            >
                                <div className={`p-4 rounded-2xl ${type.bg} ${type.color} group-active:scale-95 transition-transform`}>
                                    <Icon size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-slate-900 mb-0.5">{type.title}</h3>
                                    <p className="text-slate-500 text-sm font-medium leading-tight">
                                        {type.description}
                                    </p>
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-300 group-active:text-blue-600 transition-colors">
                                    <ArrowRight size={20} />
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                        Authorized Agent Environment
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
