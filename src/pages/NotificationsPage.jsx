import React from 'react';
import { Card } from '../components/Card';
import { Bell, CreditCard, ShieldAlert, Sparkles } from 'lucide-react';

const NotificationsPage = () => {
    const alerts = [
        { id: 1, title: 'Electricity Bill Due', desc: 'Your bill of ZK 450.00 is due tomorrow. Pay now to avoid late fees.', time: '2 hours ago', icon: CreditCard, color: 'text-red-600', bg: 'bg-red-100' },
        { id: 2, title: 'New Login Detected', desc: 'Login from new device (iPhone 13) in Lusaka.', time: '5 hours ago', icon: ShieldAlert, color: 'text-orange-600', bg: 'bg-orange-100' },
        { id: 3, title: 'Smart Insight', desc: 'You spent 15% less on groceries this week compared to last month. Great job!', time: 'Yesterday', icon: Sparkles, color: 'text-violet-600', bg: 'bg-violet-100' },
        { id: 4, title: 'Payment Received', desc: 'Received ZK 5,000.00 from John Doe via Wallet.', time: 'Yesterday', icon: Bell, color: 'text-green-600', bg: 'bg-green-100' },
    ];

    return (
        <div className="pb-20">
            <h2 className="text-xl font-bold text-gray-900 px-1 pt-6 block" style={{ marginBottom: '1.2rem' }}>Alerts & Notifications</h2>

            <div className="space-y-4 px-1">
                {alerts.map((alert) => (
                    <Card key={alert.id} className="p-4 flex gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${alert.bg} ${alert.color}`}>
                            <alert.icon size={20} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-1">{alert.title}</h3>
                            <p className="text-xs text-gray-600 leading-relaxed mb-2">{alert.desc}</p>
                            <span className="text-[10px] font-medium text-gray-400">{alert.time}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default NotificationsPage;
