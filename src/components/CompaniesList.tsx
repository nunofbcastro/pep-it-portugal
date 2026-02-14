import React, { useEffect, useState } from 'react';
import { GetCompanies } from '../services/data';
import { DataTable } from './ui/DataTable';
import { LastUpdated } from './ui/LastUpdated';
import { SkeletonTable } from './ui/Skeleton';

// Simple in-memory cache
let companiesCache: any[] | null = null;
let cacheTimestamp: number | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const CompaniesList: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                // Check cache
                const now = Date.now();
                if (companiesCache && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) {
                    setData(companiesCache);
                    setIsLoading(false);
                    return;
                }

                const result = await GetCompanies();
                const allData = result['Todos os dados'] || [];

                // Update cache
                companiesCache = allData;
                cacheTimestamp = now;

                setData(allData);
            } catch (err) {
                console.error("Failed to fetch companies:", err);
                setError("Erro ao carregar os dados.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    if (isLoading) {
        return (
            <div className="space-y-4">
                <div className="h-6 w-48 bg-slate-300 dark:bg-slate-700 rounded animate-pulse"></div>
                <SkeletonTable />
            </div>
        );
    }

    if (error) {
        return <div className="text-red-700 dark:text-red-400 p-4 border border-red-300 dark:border-red-900/50 bg-red-100 dark:bg-red-900/10 rounded-lg">Erro ao carregar os dados.</div>;
    }

    return (
        <div className="space-y-4">
            <LastUpdated repository="pep-it-portugal-companies" />
            <DataTable data={data || []} title="Lista de Empresas de TI" />
        </div>
    );
};
