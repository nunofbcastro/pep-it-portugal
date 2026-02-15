import React from 'react';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

interface ScatterChartProps {
    data: any[];
    xKey: string;
    yKey: string;
    zKey?: string;
    title?: string;
    height?: number;
    xLabel?: string;
    yLabel?: string;
}

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5', '#9DE1FE'];

export const ScatterChartComponent: React.FC<ScatterChartProps> = ({
    data,
    xKey,
    yKey,
    zKey,
    title,
    height = 400,
    xLabel,
    yLabel
}) => {
    return (
        <div className="w-full bg-card p-6 rounded-xl shadow-xl border border-border transition-all hover:shadow-2xl">
            {title && <h2 className="text-xl font-extrabold text-foreground mb-6 text-center tracking-tight">{title}</h2>}
            <div style={{ height: `${height}px` }}>
                <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" vertical={false} opacity={0.1} />
                        <XAxis
                            type="number"
                            dataKey={xKey}
                            name={xLabel || xKey}
                            stroke="#94a3b8"
                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                            axisLine={{ stroke: '#94a3b8', opacity: 0.2 }}
                            tickLine={{ stroke: '#94a3b8', opacity: 0.2 }}
                            label={{ value: xLabel, position: 'insideBottom', offset: -10, fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                        />
                        <YAxis
                            type="number"
                            dataKey={yKey}
                            name={yLabel || yKey}
                            stroke="#94a3b8"
                            tick={{ fill: '#94a3b8', fontSize: 11 }}
                            axisLine={{ stroke: '#94a3b8', opacity: 0.2 }}
                            tickLine={{ stroke: '#94a3b8', opacity: 0.2 }}
                            label={{ value: yLabel, angle: -90, position: 'insideLeft', offset: 10, fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                        />
                        {zKey && <ZAxis type="number" dataKey={zKey} range={[60, 400]} name="size" />}
                        <Tooltip
                            cursor={{ strokeDasharray: '3 3', stroke: '#94a3b8', strokeWidth: 1 }}
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
                                color: 'rgb(var(--color-foreground))',
                                padding: '2px 0'
                            }}
                            labelStyle={{ display: 'none' }}
                            formatter={(value: any, name: string | undefined) => {
                                const formattedValue = (name === yLabel || name === yKey) ? `${Number(value).toLocaleString()}€` : value;
                                return [formattedValue, name || ''];
                            }}
                        />
                        <Scatter
                            name="Dados"
                            data={data}
                            shape={(props: any) => {
                                const { cx, cy, index } = props;
                                return (
                                    <circle
                                        cx={cx}
                                        cy={cy}
                                        r={7}
                                        fill={COLORS[index % COLORS.length]!}
                                        className="drop-shadow-md transition-all duration-300 hover:r-9 cursor-pointer"
                                        style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))' }}
                                    />
                                );
                            }}
                        />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
