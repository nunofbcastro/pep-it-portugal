import React, { useState } from 'react';
import { MarkdownCell } from './MarkdownCell';

interface DataTableProps {
    data: any[];
    title?: string;
}

export const DataTable: React.FC<DataTableProps> = ({ data, title }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

    // Get all unique keys from data for headers
    const headers = data.length > 0 ? Object.keys(data[0]) : [];

    // Filter data
    const filteredData = data.filter((row) =>
        headers.some((header) =>
            String(row[header]).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Sort data
    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortConfig) return 0;
        const { key, direction } = sortConfig;
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
        return 0;
    });

    const handleSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    if (!data || data.length === 0) {
        return <div className="text-slate-500 dark:text-slate-400 p-4 text-center">Nenhum dado disponível.</div>;
    }

    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700 transition-colors">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
                <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{title || 'Dados'}</h3>
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 focus:outline-none focus:border-emerald-500 w-full md:w-64 transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 dark:bg-slate-900/50">
                        <tr>
                            {headers.map((header) => (
                                <th
                                    key={header}
                                    className="p-4 font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors whitespace-nowrap"
                                    onClick={() => handleSort(header)}
                                >
                                    <div className="flex items-center gap-2">
                                        {header}
                                        {sortConfig?.key === header && (
                                            <span className="text-xs text-emerald-600 dark:text-emerald-500">
                                                {sortConfig.direction === 'asc' ? '▲' : '▼'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                        {sortedData.map((row, index) => (
                            <tr
                                key={index}
                                className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors even:bg-slate-50/50 dark:even:bg-slate-800/50"
                            >
                                {headers.map((header) => (
                                    <td
                                        key={`${index}-${header}`}
                                        className="p-4 text-slate-700 dark:text-slate-300 max-w-xs break-words"
                                    >
                                        <MarkdownCell content={row[header]} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {sortedData.length === 0 && (
                            <tr>
                                <td colSpan={headers.length} className="p-8 text-center text-slate-500 dark:text-slate-400">
                                    Nenhum resultado encontrado para "{searchTerm}"
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-500 flex justify-between">
                <span>Total: {filteredData.length} registros</span>
            </div>
        </div>
    );
};
