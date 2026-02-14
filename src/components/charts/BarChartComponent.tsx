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

const DEFAULT_COLORS = ['#E63946', '#1D3557', '#457B9D', '#A8DADC'];

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
        <div className="w-full bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 transition-colors">
            <div className="flex items-center justify-between mb-4">
                {title && <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">{title}</h2>}
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
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                        <XAxis
                            dataKey={xKey}
                            stroke="#94a3b8"
                            fontSize={12}
                            tick={{ fill: '#94a3b8' }}
                            axisLine={{ stroke: '#475569' }}
                            tickLine={{ stroke: '#475569' }}
                        />
                        <YAxis
                            stroke="#94a3b8"
                            fontSize={12}
                            tick={{ fill: '#94a3b8' }}
                            axisLine={{ stroke: '#475569' }}
                            tickLine={{ stroke: '#475569' }}
                            width={50}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1e293b',
                                border: '1px solid #334155',
                                borderRadius: '8px',
                                color: '#f8fafc'
                            }}
                            itemStyle={{ fontSize: '13px' }}
                            cursor={{ fill: '#334155', opacity: 0.2 }}
                        />
                        <Legend
                            wrapperStyle={{ paddingTop: '20px' }}
                            formatter={(value) => <span style={{ color: '#94a3b8', fontSize: '12px' }}>{value}</span>}
                        />
                        {(barKeys || []).map((key, index) => (
                            <Bar
                                key={key}
                                dataKey={key}
                                fill={colors[index % colors.length]}
                                radius={[4, 4, 0, 0]}
                            />
                        ))}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
