import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, UserCircle, ArrowRight } from 'lucide-react';
import { useRole } from '../../context/RoleContext';

export const ContextSelection = () => {
    const { setWorkContext, CONTEXTS } = useRole();

    const options = [
        {
            id: CONTEXTS.PARTNER,
            title: 'Partner Mode',
            description: 'Operation on behalf of Bank, Insurance, or MNO partners.',
            icon: Briefcase,
            gradient: 'from-blue-600/10 to-indigo-600/10',
            border: 'border-blue-200',
            iconColor: 'text-blue-600',
            iconBg: 'bg-blue-50'
        },
        {
            id: CONTEXTS.CITIZEN,
            title: 'CitizenOne Mode',
            description: 'Unified platform access with elevated agent privileges.',
            icon: UserCircle,
            gradient: 'from-purple-600/10 to-pink-600/10',
            border: 'border-purple-200',
            iconColor: 'text-purple-600',
            iconBg: 'bg-purple-50'
        }
    ];

    return (
        <div className="fixed inset-0 z-[60] flex flex-col justify-end bg-slate-900/40 backdrop-blur-sm">
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                className="relative w-full max-w-lg mx-auto bg-white rounded-t-[2.5rem] shadow-2xl p-6 pb-12"
            >
                <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-8 px-2 text-center"
                >
                    <h1 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                        Select <span className="text-blue-600">Context</span>
                    </h1>
                    <p className="text-slate-500 font-medium">
                        Choose your operational mode to continue.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {options.map((option, index) => {
                        const Icon = option.icon;
                        return (
                            <motion.button
                                key={option.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setWorkContext(option.id)}
                                className={`relative w-full flex items-center gap-4 p-5 rounded-[1.5rem] border ${option.border} bg-white shadow-sm hover:shadow-md transition-all text-left overflow-hidden group`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-active:opacity-100 transition-opacity`} />

                                <div className={`relative flex-shrink-0 p-4 rounded-2xl ${option.iconBg} ${option.iconColor} group-active:scale-95 transition-transform`}>
                                    <Icon size={24} />
                                </div>

                                <div className="relative flex-1">
                                    <h3 className="text-lg font-bold text-slate-900 mb-0.5">
                                        {option.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm font-medium leading-snug">
                                        {option.description}
                                    </p>
                                </div>

                                <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-300 group-active:text-blue-600 transition-colors">
                                    <ArrowRight size={20} />
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                        CitizenOne Central Directory
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
