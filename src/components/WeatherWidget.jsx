import React from 'react';
import { Card } from './Card';
import { CloudRain, Sun, Cloud, CloudLightning, Wind } from 'lucide-react';

export const WeatherWidget = () => {
    const forecast = [
        { day: 'Today', temp: '24°', icon: CloudRain, color: 'text-blue-500', desc: 'Rain' },
        { day: 'Tom', temp: '22°', icon: CloudLightning, color: 'text-amber-500', desc: 'Storm' },
        { day: 'Wed', temp: '25°', icon: Cloud, color: 'text-gray-500', desc: 'Cloudy' },
        { day: 'Thu', temp: '28°', icon: Sun, color: 'text-orange-500', desc: 'Sunny' },
        { day: 'Fri', temp: '27°', icon: Sun, color: 'text-orange-500', desc: 'Sunny' },
        { day: 'Sat', temp: '23°', icon: CloudRain, color: 'text-blue-500', desc: 'Rain' },
        { day: 'Sun', temp: '24°', icon: Wind, color: 'text-gray-500', desc: 'Windy' },
    ];

    return (
        <Card className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-green-900 uppercase tracking-wide">7 Day Forecast</h3>
                <span className="text-[10px] font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">Lusaka, Zambia</span>
            </div>

            <div className="flex justify-between items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {forecast.map((day, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 min-w-[50px]">
                        <p className="text-[10px] font-bold text-gray-400 uppercase">{day.day}</p>
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-green-100">
                            <day.icon size={18} className={day.color} />
                        </div>
                        <p className="text-sm font-bold text-gray-800">{day.temp}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
};
