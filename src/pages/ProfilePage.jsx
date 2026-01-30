import React from 'react';
import { useRole } from '../context/RoleContext';
import { User, Settings, Shield, HelpCircle, LogOut, ChevronRight, Briefcase, RefreshCw } from 'lucide-react';
import { Card } from '../components/Card';

const ProfilePage = () => {
    const { activeRole, ROLES, workContext, setWorkContext } = useRole();

    const sections = [
        {
            title: 'Account',
            items: [
                { icon: User, label: 'Personal Information' },
                { icon: Shield, label: 'Security & Privacy' },
            ]
        },
        ...(activeRole === ROLES.AGENT ? [
            {
                title: 'Work Details',
                items: [
                    {
                        icon: Briefcase,
                        label: 'Current Context',
                        value: workContext?.replace('_', ' ') || 'Not Selected',
                        action: () => setWorkContext(null),
                        actionIcon: RefreshCw
                    }
                ]
            }
        ] : []),
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
                <div className="flex flex-col items-center gap-1">
                    <h2 className="text-xl font-bold text-gray-900">{activeRole}</h2>
                    {activeRole === ROLES.AGENT && workContext && (
                        <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                            {workContext.replace('_', ' ')}
                        </span>
                    )}
                </div>
                <p className="text-sm text-gray-500 mt-2">Gold Member • Lusaka</p>
            </div>

            {/* Menu Items */}
            <div className="space-y-6 px-1">
                {sections.map((section, idx) => (
                    <div key={idx} className={idx > 0 ? "mt-10" : ""}>
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-2 block" style={{ marginBottom: '1.2rem' }}>{section.title}</h3>
                        <Card className="overflow-hidden">
                            {section.items.map((item, itemIdx) => (
                                <div
                                    key={itemIdx}
                                    onClick={item.action}
                                    className={`flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer ${itemIdx !== section.items.length - 1 ? 'border-b border-gray-100' : ''}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="text-gray-400">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-700">{item.label}</p>
                                            {item.value && <p className="text-[10px] font-bold text-indigo-600">{item.value}</p>}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {item.actionIcon && <item.actionIcon size={16} className="text-indigo-500" />}
                                        <ChevronRight size={16} className="text-gray-300" />
                                    </div>
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
