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
                        <CartesianGrid strokeDasharray="3 3" stroke="rgb(var(--color-border))" />
                        <XAxis
                            dataKey={xKey}
                            stroke="rgb(var(--color-muted-foreground))"
                            fontSize={12}
                            tick={{ fill: 'rgb(var(--color-muted-foreground))' }}
                            angle={0}
                            textAnchor="middle"
                        />
                        <YAxis
                            stroke="rgb(var(--color-muted-foreground))"
                            fontSize={12}
                            tick={{ fill: 'rgb(var(--color-muted-foreground))' }}
                            width={60}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgb(var(--color-card))',
                                border: '1px solid rgb(var(--color-border))',
                                color: 'rgb(var(--color-foreground))',
                                borderRadius: '8px'
                            }}
                            itemStyle={{ color: 'rgb(var(--color-foreground))' }}
                            cursor={{ fill: 'rgb(var(--color-muted))', opacity: 0.4 }}
                        />
                        <Legend wrapperStyle={{ color: 'rgb(var(--color-muted-foreground))', paddingTop: '10px' }} />
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
