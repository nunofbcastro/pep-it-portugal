import { useEffect, useState } from 'react';

import { GetFrameworks } from '../../services/FrameworksRequest';

import { TableItem } from '../../models/TableItem';

import { LoadingScreen } from '../../components/LoadingScreen';
import Table from '../../components/Table';

export default function Frameworks() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [data, setData] = useState<TableItem[]>([]);

  useEffect(() => {
    setLoading(true);
    GetFrameworks()
      .then((salaries: TableItem[]) => {
        setData(salaries);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} isError={isError}>
        <div className="p-10 flex min:h-screen justify-center items-center">
          <Table tableData={data} placeholder="" />
        </div>
      </LoadingScreen>
    </>
  );
}