import { useCallback, useEffect, useState } from 'react';
import { Tables } from '../../models/Tables';
import { LoadingScreen } from '../../components/LoadingScreen';
import Table from '../../components/Table';
import Tab from '../../components/Tabs/Tab';
import Tabs from '../../components/Tabs';

export interface TableScreenProps {
  request: () => Promise<Tables>;
}

export default function TableScreen({ request }: TableScreenProps) {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [titles, setTitles] = useState<string[]>([]);
  const [data, setData] = useState<Tables>({});

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await request();
      setData(result);
      setTitles(Object.keys(result));
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const hasMultipleTables = titles.length > 1;

  return (
    <LoadingScreen isLoading={isLoading} isError={isError}>
      <div className="p-10 flex min:h-screen justify-center items-center">
        {hasMultipleTables ? (
          <Tabs>
            {titles.map((item, index) => (
              <Tab title={item} key={index}>
                <Table tableData={data[item]} />
              </Tab>
            ))}
          </Tabs>
        ) : (
          <Table tableData={data[titles[0]]} />
        )}
      </div>
    </LoadingScreen>
  );
}
