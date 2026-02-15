import React from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Tooltip, Legend } from 'recharts';
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

const DEFAULT_COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5', '#9DE1FE'];

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
                className="text-xs font-bold drop-shadow-sm"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    // Custom shape renderer to replace deprecated Cell
    const renderSector = (props: any) => {
        const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill: _fill, payload, index } = props;
        // Correctly handle the color from payload or defaults
        const color = payload?.color || colors[index % colors.length];

        return (
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={color}
                className="transition-all duration-300 hover:opacity-80 cursor-pointer"
            />
        );
    };

    return (
        <div className="w-full bg-card p-6 rounded-xl shadow-xl border border-border transition-all hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6">
                {title && <h2 className="text-xl font-extrabold text-foreground tracking-tight">{title}</h2>}
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
                            outerRadius="80%"
                            fill="#8884d8"
                            dataKey={dataKey}
                            shape={renderSector}
                            animationBegin={0}
                            animationDuration={1500}
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
                                color: 'rgb(var(--color-foreground))',
                                fontWeight: '500',
                                fontSize: '13px'
                            }}
                        />
                        <Legend
                            wrapperStyle={{ paddingTop: '24px' }}
                            iconType="circle"
                            formatter={(value) => <span className="text-slate-600 dark:text-slate-400 font-medium text-xs">{value}</span>}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
