import React, { useEffect, useState } from 'react';

interface LastUpdatedProps {
    repository: string; // e.g., "pep-it-portugal-salaries"
}

export const LastUpdated: React.FC<LastUpdatedProps> = ({ repository }) => {
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLastCommit = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/repos/porqueeuprogramo/${repository}/commits?per_page=1`,
                    {
                        headers: {
                            'Accept': 'application/vnd.github.v3+json',
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    if (data && data.length > 0) {
                        const date = new Date(data[0].commit.committer.date);
                        setLastUpdated(date.toLocaleDateString('pt-PT', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        }));
                    }
                }
            } catch (error) {
                console.error('Error fetching last update date:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLastCommit();
    }, [repository]);

    if (loading) {
        return (
            <div className="text-xs text-slate-500 dark:text-slate-500 italic">
                A carregar data...
            </div>
        );
    }

    if (!lastUpdated) return null;

    return (
        <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Última atualização: {lastUpdated}</span>
        </div>
    );
};
