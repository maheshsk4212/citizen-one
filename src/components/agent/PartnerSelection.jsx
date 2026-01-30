import React, { useState } from 'react';
import { useRole } from '../../context/RoleContext';
import { motion } from 'framer-motion';
import { Search, ChevronLeft, Building2, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PartnerSelection = () => {
    const navigate = useNavigate();
    const {
        selectedPartnerType,
        setSelectedPartner,
        setSelectedPartnerType,
        PARTNER_TYPES
    } = useRole();

    const handlePartnerSelect = (partner) => {
        setSelectedPartner(partner);

        // Navigate based on type
        switch (selectedPartnerType) {
            case PARTNER_TYPES.BANK:
                navigate('/service/banking');
                break;
            case PARTNER_TYPES.INSURANCE:
                navigate('/service/insurance');
                break;
            case PARTNER_TYPES.MNO:
                navigate('/service/mobile');
                break;
            default:
                break;
        }
    };
    const [searchQuery, setSearchQuery] = useState('');

    const partners = {
        'Bank': [
            { id: 'abs-01', name: 'ABSA Bank', logo: '🏦', description: 'Lusaka Main Branch' },
            { id: 'zan-01', name: 'ZANACO', logo: '🏢', description: 'Commercial Division' },
            { id: 'fnb-01', name: 'FNB Zambia', logo: '🏛️', description: 'Agent Banking' },
            { id: 'sta-01', name: 'Standard Chartered', logo: '🏦', description: 'Retail Services' },
        ],
        'Insurance': [
            { id: 'mad-01', name: 'Madison Insurance', logo: '🛡️', description: 'General Insurance' },
            { id: 'pro-01', name: 'Professional Insurance', logo: '📜', description: 'Life & Savings' },
            { id: 'gol-01', name: 'Goldman Insurance', logo: '💎', description: 'Health Cover' },
        ],
        'MNO': [
            { id: 'air-01', name: 'Airtel Money', logo: '📱', description: 'Mobile Financial Services' },
            { id: 'mtn-01', name: 'MTN MoMo', logo: '📶', description: 'Digital Payments' },
            { id: 'zam-01', name: 'Zamtel Kwacha', logo: '📞', description: 'Telecom Services' },
        ]
    };

    const currentPartners = partners[selectedPartnerType] || [];
    const filteredPartners = currentPartners.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="fixed inset-0 z-[60] flex flex-col justify-end bg-slate-900/40 backdrop-blur-sm">
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                className="relative z-10 flex flex-col h-[85vh] w-full max-w-lg mx-auto bg-white shadow-2xl rounded-t-[2.5rem] overflow-hidden"
            >
                <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-4" />

                <header className="p-6 pb-2">
                    <div className="flex items-center gap-4 mb-6">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedPartnerType(null)}
                            className="p-3 rounded-2xl bg-slate-50 text-slate-400 border border-slate-100"
                        >
                            <ChevronLeft size={24} />
                        </motion.button>
                        <div>
                            <h2 className="text-2xl font-black text-slate-900">{selectedPartnerType}</h2>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">Select Institution</p>
                        </div>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search partners..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
                        />
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 pb-24">
                    {filteredPartners.length > 0 ? (
                        filteredPartners.map((partner, index) => (
                            <motion.button
                                key={partner.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handlePartnerSelect(partner)}
                                className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm active:border-blue-500/50 active:bg-blue-50/30 transition-all text-left group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-2xl border border-slate-100 group-active:scale-95 transition-transform">
                                    {partner.logo}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-slate-900 font-bold">{partner.name}</h3>
                                    <p className="text-slate-500 text-xs font-medium">{partner.description}</p>
                                </div>
                                <CheckCircle2 className="text-slate-200 group-active:text-blue-500 transition-colors" size={20} />
                            </motion.button>
                        ))
                    ) : (
                        <div className="text-center py-20">
                            <Building2 className="mx-auto text-slate-200 mb-4" size={48} />
                            <p className="text-slate-500 font-medium">No results found</p>
                        </div>
                    )}
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6 bg-white border-t border-slate-50 text-center">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                        Secure Partner Portal
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
