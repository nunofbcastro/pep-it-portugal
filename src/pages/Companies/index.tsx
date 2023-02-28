import { useEffect, useState } from 'react';
import { useTitle } from '../../hooks/useTitle';

import { GetCompanies } from '../../services/CompaniesRequest';

import { Tables } from '../../models/Tables';

import { LoadingScreen } from '../../components/LoadingScreen';
import Table from '../../components/Table';

export default function Companies() {
  useTitle('Empresas');

  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [data, setData] = useState<Tables>({ ['All_Data']: [] });

  useEffect(() => {
    setLoading(true);
    GetCompanies()
      .then((salaries: Tables) => {
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
          <Table tableData={data['All_Data']} placeholder="" />
        </div>
      </LoadingScreen>
    </>
  );
}
