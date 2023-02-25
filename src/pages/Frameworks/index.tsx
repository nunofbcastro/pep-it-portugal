import { useEffect, useState } from 'react';

import { GetFrameworks } from '../../services/FrameworksRequest';

import { FrameworksTables } from '../../models/FrameworksTables';

import { LoadingScreen } from '../../components/LoadingScreen';
import Table from '../../components/Table';
import Tab from '../../components/Tabs/Tab';
import Tabs from '../../components/Tabs';

export default function Frameworks() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [data, setData] = useState<FrameworksTables>({
    allData: [],
    dataAnalysis: [],
  });

  useEffect(() => {
    setLoading(true);
    GetFrameworks()
      .then((salaries: FrameworksTables) => {
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
              <Table tableData={data.allData} placeholder="" />
            </Tab>
            <Tab title="Análise dos dados">
              <Table tableData={data.dataAnalysis} placeholder="" />
            </Tab>
          </Tabs>
        </div>
      </LoadingScreen>
    </>
  );
}
