import React from 'react';
import { useRole } from '../context/RoleContext';
import { User, Settings, Shield, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { Card } from '../components/Card';

const ProfilePage = () => {
    const { activeRole } = useRole();

    const sections = [
        {
            title: 'Account',
            items: [
                { icon: User, label: 'Personal Information' },
                { icon: Shield, label: 'Security & Privacy' },
            ]
        },
        {
            title: 'Settings',
            items: [
                { icon: Settings, label: 'App Settings' },
                { icon: HelpCircle, label: 'Help & Support' },
            ]
        }
    ];

    return (
        <div className="pb-20">
            {/* Header */}
            <div className="flex flex-col items-center mb-8 pt-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-md overflow-hidden mb-4">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activeRole}`} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{activeRole}</h2>
                <p className="text-sm text-gray-500">Gold Member • New York</p>
            </div>

            {/* Menu Items */}
            <div className="space-y-6 px-1">
                {sections.map((section, idx) => (
                    <div key={idx}>
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">{section.title}</h3>
                        <Card className="overflow-hidden">
                            {section.items.map((item, itemIdx) => (
                                <div
                                    key={itemIdx}
                                    className={`flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer ${itemIdx !== section.items.length - 1 ? 'border-b border-gray-100' : ''}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="text-gray-400">
                                            <item.icon size={20} />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                                    </div>
                                    <ChevronRight size={16} className="text-gray-300" />
                                </div>
                            ))}
                        </Card>
                    </div>
                ))}

                <button className="w-full py-3 flex items-center justify-center gap-2 text-red-600 font-medium bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                    <LogOut size={18} />
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
