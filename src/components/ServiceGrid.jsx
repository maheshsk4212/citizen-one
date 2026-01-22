import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Building2, Receipt, Wallet, Tractor,
    Briefcase, Shield, Landmark, ShoppingBag, ArrowRight, CircleDollarSign,
    Heart, Dumbbell, LayoutGrid, Smartphone, Truck
} from 'lucide-react';

import { useRole, ROLES } from '../context/RoleContext';

// Services categorized for prioritization
const ALL_SERVICES = [
    { id: 'wealth', label: 'Wealth', icon: CircleDollarSign, color: 'text-indigo-500', roles: [ROLES.CUSTOMER], path: '/service/wealth' },
    { id: 'health', label: 'HealthEzy', icon: Heart, color: 'text-rose-500', roles: [ROLES.CUSTOMER], path: '/service/health' },
    { id: 'sport', label: 'Sport & Mind', icon: Dumbbell, color: 'text-teal-500', roles: [ROLES.CUSTOMER], path: '/service/sport' },
    { id: 'agri', label: 'Agri Services', icon: Tractor, color: 'text-green-500', roles: [ROLES.FARMER], path: '/service/agri' },
    { id: 'bills', label: 'Bill Pay', icon: Receipt, color: 'text-orange-500', roles: [ROLES.CUSTOMER], path: '/service/bills' },
    { id: 'insurance', label: 'Insurance', icon: Shield, color: 'text-red-500', roles: [ROLES.CUSTOMER, ROLES.FARMER], path: '/service/insurance' },
    { id: 'gov', label: 'Govt Services', icon: Landmark, color: 'text-cyan-600', roles: [ROLES.CUSTOMER, ROLES.FARMER, ROLES.AGENT], path: '/service/gov' },
    { id: 'common', label: 'Common Svcs', icon: LayoutGrid, color: 'text-blue-400', roles: [ROLES.CUSTOMER], path: '/service/common' },
    { id: 'banking', label: 'Banking', icon: Building2, color: 'text-blue-600', roles: [ROLES.CUSTOMER, ROLES.AGENT], path: '/service/banking' },
    { id: 'mobile', label: 'Mobile Topup', icon: Smartphone, color: 'text-purple-500', roles: [ROLES.CUSTOMER], path: '/service/mobile' },
    { id: 'logistics', label: 'Logistics', icon: Truck, color: 'text-amber-600', roles: [ROLES.AGENT, ROLES.FARMER], path: '/service/logistics' },
    { id: 'sme', label: 'SME Services', icon: Briefcase, color: 'text-indigo-600', roles: [ROLES.AGENT], path: '/service/sme' },
    { id: 'market', label: 'Marketplace', icon: ShoppingBag, color: 'text-pink-500', roles: [ROLES.FARMER, ROLES.CUSTOMER], path: '/service/market' },
];

export const ServiceGrid = ({ limit }) => {
    const { activeRole } = useRole();

    // Prioritize services based on active role
    let services = [...ALL_SERVICES].sort((a, b) => {
        const aHasRole = a.roles.includes(activeRole);
        const bHasRole = b.roles.includes(activeRole);
        if (aHasRole && !bHasRole) return -1;
        if (!aHasRole && bHasRole) return 1;
        return 0;
    });

    // Apply limit if provided
    if (limit) {
        services = services.slice(0, limit);
    }

    return (
        <div>
            <div className="flex items-center justify-between px-1" style={{ marginBottom: '1.2rem' }}>
                <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider block">All Services</h3>
                {limit && (
                    <Link to="/services" className="text-[var(--primary)] text-xs font-bold flex items-center gap-1 hover:underline">
                        View All <ArrowRight size={14} />
                    </Link>
                )}
            </div>
            <div className="grid grid-cols-4 gap-y-6 gap-x-3 px-1">
                {services.map((service, index) => (
                    <Link to={service.path || '#'} key={service.id} className="block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[var(--surface)] flex items-center justify-center shadow-sm border border-[var(--glass-border)] active:scale-95 transition-transform">
                                <service.icon size={26} className={service.color} strokeWidth={1.5} />
                            </div>
                            <span className="text-[11px] font-medium text-center text-[var(--text-secondary)] leading-tight">{service.label}</span>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
