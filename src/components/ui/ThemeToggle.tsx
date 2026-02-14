import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { themeStore, toggleTheme } from '../providers/themeStore';

export const ThemeToggle: React.FC = () => {
    const theme = useStore(themeStore);

    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg 
                     bg-slate-200 dark:bg-slate-800 
                     text-slate-800 dark:text-slate-200
                     hover:bg-slate-300 dark:hover:bg-slate-700
                     transition-all duration-300 ease-in-out
                     group overflow-hidden shadow-lg hover:shadow-xl"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <div className="relative w-5 h-5">
                {/* Sun Icon */}
                <Sun
                    className={`absolute inset-0 w-5 h-5 transition-all duration-500 
                              ${theme === 'dark'
                            ? 'rotate-90 scale-0 opacity-0'
                            : 'rotate-0 scale-100 opacity-100'
                        }`}
                    strokeWidth={2}
                    aria-hidden="true"
                />

                {/* Moon Icon */}
                <Moon
                    className={`absolute inset-0 w-5 h-5 transition-all duration-500
                              ${theme === 'dark'
                            ? 'rotate-0 scale-100 opacity-100'
                            : '-rotate-90 scale-0 opacity-0'
                        }`}
                    strokeWidth={2}
                    aria-hidden="true"
                />
            </div>

            {/* Ripple effect on click */}
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400 to-orange-400 
                           dark:from-blue-400 dark:to-purple-400 opacity-0 group-hover:opacity-20 
                           transition-opacity duration-300" />
        </button>
    );
};
