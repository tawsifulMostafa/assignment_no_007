import React from 'react';
import { BarChart3, Home, TimerReset } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const linkClass = ({ isActive }) =>
        `inline-flex items-center gap-1.5 rounded-[3px] px-2.5 py-1.5 text-xs font-medium transition-colors ${
            isActive
                ? 'bg-[#184f3f] text-white shadow-sm'
                : 'text-slate-500 hover:bg-slate-100 hover:text-[#184f3f]'
        }`;

    return (
        <header className="sticky top-0 z-50 bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 sm:px-12 lg:px-16">
                <NavLink to="/" className="flex items-center gap-3">
                    <span className="text-sm font-extrabold tracking-tight sm:text-base">
                        <span className="text-slate-900">Keen</span>
                        <span className="text-[#244D3F]">Keeper</span>
                    </span>
                </NavLink>

                <div className="flex items-center gap-2">
                    <NavLink to="/" className={linkClass}>
                        <Home size={13} strokeWidth={2.2} />
                        <span>Home</span>
                    </NavLink>

                    <NavLink to="/timeline" className={linkClass}>
                        <TimerReset size={13} strokeWidth={2.2} />
                        <span>Timeline</span>
                    </NavLink>

                    <NavLink to="/stats" className={linkClass}>
                        <BarChart3 size={13} strokeWidth={2.2} />
                        <span>Stats</span>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
