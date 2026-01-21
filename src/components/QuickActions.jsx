import React from 'react';
import { motion } from 'framer-motion';
import {
    Send, QrCode, FileText, LifeBuoy, Banknote, // Customer
    UserPlus, Wallet, ClipboardList, // Agent
    CloudRain, Sprout, TrendingUp // Farmer
} from 'lucide-react';
import { useRole, ROLES } from '../context/RoleContext';

const ACTIONS_BY_ROLE = {
    [ROLES.CUSTOMER]: [
        { id: 'pay', label: 'Pay', icon: Send, color: 'bg-blue-100 text-blue-600' },
        { id: 'scan', label: 'Scan QR', icon: QrCode, color: 'bg-purple-100 text-purple-600' },
        { id: 'loan', label: 'Apply Loan', icon: Banknote, color: 'bg-orange-100 text-orange-600' },
        { id: 'support', label: 'Support', icon: LifeBuoy, color: 'bg-green-100 text-green-600' },
    ],
    [ROLES.AGENT]: [
        { id: 'onboard', label: 'Onboard', icon: UserPlus, color: 'bg-indigo-100 text-indigo-600' },
        { id: 'collect', label: 'Collect', icon: Wallet, color: 'bg-emerald-100 text-emerald-600' },
        { id: 'tasks', label: 'Today Tasks', icon: ClipboardList, color: 'bg-amber-100 text-amber-600' },
        { id: 'support', label: 'Support', icon: LifeBuoy, color: 'bg-gray-100 text-gray-600' },
    ],
    [ROLES.FARMER]: [
        { id: 'weather', label: 'Weather', icon: CloudRain, color: 'bg-sky-100 text-sky-600' },
        { id: 'loan', label: 'Agri Loan', icon: Sprout, color: 'bg-green-100 text-green-600' },
        { id: 'prices', label: 'Prices', icon: TrendingUp, color: 'bg-rose-100 text-rose-600' },
        { id: 'support', label: 'Support', icon: LifeBuoy, color: 'bg-gray-100 text-gray-600' },
    ],
};

export const QuickActions = () => {
    const { activeRole } = useRole();
    // Simplified Actions - Top 4 only
    const actions = ACTIONS_BY_ROLE[activeRole]?.slice(0, 4) || ACTIONS_BY_ROLE[ROLES.CUSTOMER].slice(0, 4);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <div>
            <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider px-1 block" style={{ marginBottom: '1.5rem' }}>Quick Actions</h3>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-4 gap-4 px-1"
            >
                {actions.map((action) => (
                    <motion.button
                        key={action.id}
                        variants={item}
                        whileTap={{ scale: 0.95 }}
                        className="flex flex-col items-center gap-1.5"
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg shadow-sm border border-transparent ${action.color}`}>
                            <action.icon size={20} />
                        </div>
                        <span className="text-[10px] font-semibold text-[var(--text-main)] text-center w-full truncate">{action.label}</span>
                    </motion.button>
                ))}
            </motion.div>
        </div>
    );
};
