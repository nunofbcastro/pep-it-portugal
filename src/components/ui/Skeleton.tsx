import React from 'react';

export const SkeletonCard: React.FC = () => {
    return (
        <div className="w-full bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 animate-pulse">
            <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mx-auto mb-4"></div>
            <div className="space-y-3">
                <div className="h-64 bg-slate-200 dark:bg-slate-700 rounded"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2 mx-auto"></div>
            </div>
        </div>
    );
};

export const SkeletonTable: React.FC = () => {
    return (
        <div className="w-full bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 animate-pulse">
            <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mb-4"></div>
            <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-12 bg-slate-200 dark:bg-slate-700 rounded"></div>
                ))}
            </div>
        </div>
    );
};
