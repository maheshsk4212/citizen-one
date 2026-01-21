import React from 'react';
import { MiniPageLayout } from '../../layouts/MiniPageLayout';
import { Card } from '../../components/Card';
import { ShoppingBag, PackagePlus, ListOrdered, Truck } from 'lucide-react';

const MarketplacePage = () => {
    const hero = (
        <Card className="bg-pink-600 text-white p-5 shadow-md">
            <h2 className="text-3xl font-bold mb-1">ZK 4,820.00</h2>
            <p className="text-pink-100 text-sm font-medium">Sales Today</p>
            <div className="mt-4 pt-4 border-t border-pink-500/50 flex text-xs justify-between">
                <span>12 Orders Pending</span>
                <span className="font-bold">View &gt;</span>
            </div>
        </Card>
    );

    const actions = [
        { label: 'List Item', icon: PackagePlus, bg: 'bg-pink-100', color: 'text-pink-700' },
        { label: 'Orders', icon: ListOrdered, bg: 'bg-blue-50', color: 'text-blue-600' },
        { label: 'Logistics', icon: Truck, bg: 'bg-amber-50', color: 'text-amber-600' },
        { label: 'My Store', icon: ShoppingBag, bg: 'bg-gray-100', color: 'text-gray-600' },
    ];

    const sections = [
        { label: 'Product Catalog' },
        { label: 'Customer Reviews' },
        { label: 'Seller Support' },
    ];

    const insights = [
        { title: 'Demand Forecast', desc: 'Stock up on "Organic Rice". High demand expected this weekend.' },
    ];

    return (
        <MiniPageLayout
            title="Marketplace"
            theme="rose"
            hero={hero}
            actions={actions}
            sections={sections}
            aiInsights={insights}
        />
    );
};

export default MarketplacePage;
