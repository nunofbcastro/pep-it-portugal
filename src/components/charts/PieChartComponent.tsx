import React from 'react';
// eslint-disable-next-line deprecation/deprecation
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { LastUpdated } from '../ui/LastUpdated';

interface PieChartProps {
    data: any[];
    nameKey: string;
    dataKey: string;
    colors?: string[];
    title?: string;
    height?: number;
    repository?: string;
}

const DEFAULT_COLORS = ['#E63946', '#1D3557', '#A8DADC'];

export const PieChartComponent: React.FC<PieChartProps> = ({
    data,
    nameKey: _nameKey,
    dataKey,
    colors = DEFAULT_COLORS,
    title,
    height = 400,
    repository
}) => {
    const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor="middle"
                dominantBaseline="central"
                className="text-sm font-semibold"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="w-full bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 transition-colors">
            <div className="flex items-center justify-between mb-4">
                {title && <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">{title}</h2>}
                {repository && <LastUpdated repository={repository} />}
            </div>
            <div style={{ height: `${height}px` }} role="img" aria-label={`Gráfico de pizza: ${title}`}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomLabel}
                            outerRadius="70%"
                            fill="#8884d8"
                            dataKey={dataKey}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color || colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgb(var(--color-card))',
                                border: '1px solid rgb(var(--color-border))',
                                color: 'rgb(var(--color-foreground))',
                                borderRadius: '8px'
                            }}
                            itemStyle={{ color: 'rgb(var(--color-foreground))' }}
                        />
                        <Legend
                            wrapperStyle={{ paddingTop: '20px' }}
                            iconType="circle"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
