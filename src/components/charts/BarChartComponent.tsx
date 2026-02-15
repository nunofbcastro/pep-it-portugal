import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { LastUpdated } from '../ui/LastUpdated';

interface BarChartProps {
    data: any[];
    xKey: string;
    barKeys: string[];
    colors?: string[];
    title?: string;
    height?: number;
    repository?: string;
}

const DEFAULT_COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];

export const BarChartComponent: React.FC<BarChartProps> = ({
    data,
    xKey,
    barKeys,
    colors = DEFAULT_COLORS,
    title,
    height = 400,
    repository
}) => {
    return (
        <div className="w-full bg-card p-6 rounded-xl shadow-xl border border-border transition-all hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6">
                {title && <h2 className="text-xl font-extrabold text-foreground tracking-tight">{title}</h2>}
                {repository && <LastUpdated repository={repository} />}
            </div>
            <div style={{ height: `${height}px` }} role="img" aria-label={`Gráfico de barras: ${title}`}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 40,
                            bottom: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" vertical={false} opacity={0.1} />
                        <XAxis
                            dataKey={xKey}
                            stroke="#94a3b8"
                            fontSize={11}
                            tick={{ fill: '#94a3b8' }}
                            axisLine={{ stroke: '#94a3b8', opacity: 0.2 }}
                            tickLine={{ stroke: '#94a3b8', opacity: 0.2 }}
                        />
                        <YAxis
                            stroke="#94a3b8"
                            fontSize={11}
                            tick={{ fill: '#94a3b8' }}
                            axisLine={{ stroke: '#94a3b8', opacity: 0.2 }}
                            tickLine={{ stroke: '#94a3b8', opacity: 0.2 }}
                            width={50}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgb(var(--color-card))',
                                borderRadius: '12px',
                                border: '1px solid rgb(var(--color-border))',
                                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                                padding: '12px'
                            }}
                            itemStyle={{
                                fontSize: '13px',
                                fontWeight: '500',
                                color: 'rgb(var(--color-foreground))'
                            }}
                            cursor={{ fill: '#334155', opacity: 0.15 }}
                        />
                        <Legend
                            wrapperStyle={{ paddingTop: '24px' }}
                            formatter={(value) => <span className="text-slate-600 dark:text-slate-400 font-medium text-xs">{value}</span>}
                        />
                        {(barKeys || []).map((key, index) => (
                            <Bar
                                key={key}
                                dataKey={key}
                                fill={colors[index % colors.length]}
                                radius={[6, 6, 0, 0]}
                                animationDuration={1000 + (index * 200)}
                            />
                        ))}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
