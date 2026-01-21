import React from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { useRole, ROLES } from '../context/RoleContext';
import { Home, Grid, Bell, User, MapPin, ScanLine, ChevronDown, LogOut, Settings } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const BottomNavItem = ({ icon: Icon, label, path, isActive }) => (
    <Link to={path} className={clsx(
        "flex flex-col items-center justify-center w-full h-full space-y-1",
        isActive ? "text-[var(--primary)]" : "text-[var(--text-muted)]"
    )}>
        <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
        <span className="text-[10px] font-medium">{label}</span>
    </Link>
);

export const AppShell = () => {
    const { activeRole, switchRole, ROLES } = useRole();
    const location = useLocation();
    const [isVisible, setIsVisible] = React.useState(true);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const scrollTimeout = React.useRef(null);

    const handleScroll = () => {
        setIsVisible(false);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
            setIsVisible(true);
        }, 150);
    };

    // Role details for UI customization
    const roleConfig = {
        [ROLES.CUSTOMER]: { label: 'Citizen', color: 'bg-blue-600' },
        [ROLES.AGENT]: { label: 'Agent', color: 'bg-purple-600' },
        [ROLES.FARMER]: { label: 'Farmer', color: 'bg-green-600' },
    };

    const isMiniPage = location.pathname.startsWith('/service/');

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-[430px] h-[100dvh] bg-[var(--bg-app)] flex flex-col relative shadow-2xl overflow-hidden">

                {/* Top Bar - Sticky - Only show on non-mini pages */}
                {!isMiniPage && (
                    <motion.header
                        animate={{ y: isVisible ? 0 : -100 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border border-white/50 shadow-sm border-b-0 rounded-b-2xl"
                    >
                        <div className="flex items-center justify-between px-5 py-4">
                            <div className="flex gap-3">
                                <div className="relative z-50">
                                    <button
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm transition-transform active:scale-95 focus:outline-none"
                                    >
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activeRole}`} alt="Profile" />
                                    </button>

                                    {isMenuOpen && (
                                        <div className="absolute top-12 left-0 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                                            <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-sm font-medium text-gray-700">
                                                <User size={16} /> View Profile
                                            </Link>
                                            <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-sm font-medium text-gray-700">
                                                <Settings size={16} /> Settings
                                            </Link>
                                            <div className="h-px bg-gray-100 my-1"></div>
                                            <button onClick={() => setIsMenuOpen(false)} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-sm font-medium text-red-600 text-left">
                                                <LogOut size={16} /> Log Out
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <h1 className="text-sm font-bold text-[var(--text-main)] leading-tight">Good Morning</h1>
                                    </div>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="flex items-center gap-0.5 text-[10px] font-medium text-[var(--text-secondary)] bg-gray-100 px-1.5 py-0.5 rounded-full">
                                            <MapPin size={10} /> Lusaka
                                        </span>
                                        <span className="flex items-center gap-0.5 text-[10px] font-medium text-[var(--text-secondary)] bg-gray-100 px-1.5 py-0.5 rounded-full">
                                            ZM
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <select
                                        value={activeRole}
                                        onChange={(e) => switchRole(e.target.value)}
                                        className="appearance-none bg-[var(--surface)] text-[var(--text-main)] text-xs font-bold py-2 pl-3 pr-8 rounded-full shadow-sm border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                                    >
                                        {Object.values(ROLES).map(r => <option key={r} value={r}>{r}</option>)}
                                    </select>
                                    <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] pointer-events-none" />
                                </div>

                                <Link to="/notifications" className="p-2 rounded-full bg-[var(--surface)] text-[var(--text-main)] shadow-sm relative transition-transform active:scale-95">
                                    <Bell size={20} />
                                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border border-white"></span>
                                </Link>
                            </div>
                        </div>
                    </motion.header>
                )}

                {/* Main Content Area */}
                <main
                    className={clsx(
                        "flex-1 overflow-y-auto overflow-x-hidden pb-24",
                        isMiniPage ? "pt-0" : "pt-24"
                    )}
                    onScroll={handleScroll}
                >
                    <div className="px-5 py-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={location.pathname + activeRole}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Outlet />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </main>

                {/* Bottom Navigation - Fixed */}
                <motion.nav
                    animate={{ y: isVisible ? 0 : 100 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-[80px] bg-white/90 backdrop-blur-xl border-t border-white/50 rounded-t-3xl pb-5 px-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-50"
                >
                    <div className="flex items-center justify-between h-full">
                        <BottomNavItem icon={Home} label="Home" path="/" isActive={location.pathname === '/'} />
                        <BottomNavItem icon={Grid} label="Services" path="/services" isActive={location.pathname === '/services'} />

                        {/* Main Action Button (FAB-like) */}
                        <div className="-mt-8">
                            <button className="w-16 h-16 rounded-full bg-[var(--primary)] text-white shadow-xl shadow-blue-500/40 flex items-center justify-center transform active:scale-95 transition-transform flex-col gap-0.5">
                                <ScanLine size={24} />
                                <span className="text-[10px] font-bold">Pay</span>
                            </button>
                        </div>

                        <BottomNavItem icon={Bell} label="Alerts" path="/notifications" isActive={location.pathname === '/notifications'} />
                        <BottomNavItem icon={User} label="Profile" path="/profile" isActive={location.pathname === '/profile'} />
                    </div>
                </motion.nav>

            </div>
        </div>
    );
};
