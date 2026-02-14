import React, { useEffect, useState } from 'react';
import { PieChartComponent } from './charts/PieChartComponent';
import { BarChartComponent } from './charts/BarChartComponent';
import { SkeletonCard } from './ui/Skeleton';

// Simple in-memory cache
let dashboardCache: any | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const DashboardStats: React.FC = () => {
    const [dashboardData, setDashboardData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                // Check cache
                const now = Date.now();
                if (dashboardCache && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
                    setDashboardData(dashboardCache);
                    setIsLoading(false);
                    return;
                }

                // Sample data - replace with actual API calls when ready
                const data = {
                    workMode: [
                        { name: 'Remoto', value: 65, color: '#E63946' },
                        { name: 'Híbrido', value: 25, color: '#1D3557' },
                        { name: 'Presencial', value: 10, color: '#457B9D' },
                    ],
                    salaries: [
                        { experience: 'Junior', min: 18000, avg: 24000, max: 32000 },
                        { experience: 'Mid', min: 30000, avg: 45000, max: 60000 },
                        { experience: 'Senior', min: 50000, avg: 75000, max: 120000 },
                    ],
                    frameworks: [
                        { name: 'React', count: 180 },
                        { name: '.NET', count: 150 },
                        { name: 'Node.js', count: 120 },
                        { name: 'Vue', count: 90 },
                        { name: 'Angular', count: 85 },
                    ],
                };

                // Update cache
                dashboardCache = data;
                cacheTimestamp = now;

                setDashboardData(data);
            } catch (error) {
                console.error("Error loading dashboard data", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
                <SkeletonCard />
                <SkeletonCard />
                <div className="lg:col-span-2">
                    <SkeletonCard />
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
            <PieChartComponent
                data={dashboardData?.workMode || []}
                nameKey="name"
                dataKey="value"
                title="Regime de Trabalho (Estimado)"
                colors={['#E63946', '#1D3557', '#A8DADC']}
                repository="pep-it-portugal-work-mode"
            />

            <BarChartComponent
                data={dashboardData?.salaries || []}
                xKey="experience"
                barKeys={['min', 'avg', 'max']}
                title="Salários por Experiência (Anual €)"
                colors={['#A8DADC', '#1D3557', '#E63946']}
                repository="pep-it-portugal-salaries"
            />

            <div className="lg:col-span-2">
                <BarChartComponent
                    data={dashboardData?.frameworks || []}
                    xKey="name"
                    barKeys={['count']}
                    title="Top Tecnologias (Exemplo)"
                    colors={['#E63946']}
                    repository="pep-it-portugal-frameworks"
                />
            </div>
        </div>
    );
};
