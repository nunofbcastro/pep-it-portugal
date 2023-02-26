import { useEffect, useState } from 'react';
import { useTitle } from '../../utils/PageTitle';

import { GetFirstJob } from '../../services/FirstJobRequest';

import { Tables } from '../../models/Tables';

import { LoadingScreen } from '../../components/LoadingScreen';
import Table from '../../components/Table';
import Tab from '../../components/Tabs/Tab';
import Tabs from '../../components/Tabs';

export default function FirstJob() {
  useTitle('Primeiro emprego');

  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [data, setData] = useState<Tables>({
    ['All_Data']: [],
    ['Data_Analysis']: [],
  });

  useEffect(() => {
    setLoading(true);
    GetFirstJob()
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
          <Tabs>
            <Tab title="Todos os dados">
              <Table tableData={data['All_Data']} placeholder="" />
            </Tab>
            <Tab title="Análise dos dados">
              <Table tableData={data['Data_Analysis']} placeholder="" />
            </Tab>
          </Tabs>
        </div>
      </LoadingScreen>
    </>
  );
}
