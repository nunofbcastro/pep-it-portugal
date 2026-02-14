import React from 'react';
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
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

const COLORS = ['#E63946', '#1D3557', '#457B9D', '#A8DADC', '#F4A261', '#2A9D8F'];

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
        <div className="w-full bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 transition-colors">
            {title && <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 text-center">{title}</h2>}
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
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
                        <XAxis
                            type="number"
                            dataKey={xKey}
                            name={xLabel || xKey}
                            stroke="#94a3b8"
                            tick={{ fill: '#94a3b8' }}
                            axisLine={{ stroke: '#475569' }}
                            tickLine={{ stroke: '#475569' }}
                            label={{ value: xLabel, position: 'insideBottom', offset: -10, fill: '#94a3b8', fontSize: 12 }}
                        />
                        <YAxis
                            type="number"
                            dataKey={yKey}
                            name={yLabel || yKey}
                            unit="€"
                            stroke="#94a3b8"
                            tick={{ fill: '#94a3b8' }}
                            axisLine={{ stroke: '#475569' }}
                            tickLine={{ stroke: '#475569' }}
                            label={{ value: yLabel, angle: -90, position: 'insideLeft', offset: 10, fill: '#94a3b8', fontSize: 12 }}
                        />
                        {zKey && <ZAxis type="number" dataKey={zKey} range={[60, 400]} name="size" />}
                        <Tooltip
                            cursor={{ strokeDasharray: '3 3', stroke: '#94a3b8' }}
                            contentStyle={{
                                backgroundColor: '#1e293b',
                                borderRadius: '8px',
                                border: '1px solid #334155',
                                color: '#f8fafc'
                            }}
                            itemStyle={{ fontSize: '12px' }}
                            formatter={(value: any, name: string) => {
                                if (name === yLabel || name === yKey) return [`${value}€`, name];
                                return [value, name];
                            }}
                        />
                        <Scatter name="Dados" data={data}>
                            {data.map((_entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Scatter>
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
