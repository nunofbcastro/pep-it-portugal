import { useEffect, useState } from 'react';

import { GetSalaries } from '../../services/SalariesRequest';

import { SalariesTables } from '../../models/SalariesTables';

import { LoadingScreen } from '../../components/LoadingScreen';
import Table from '../../components/Table';
import Tab from '../../components/Tabs/Tab';
import Tabs from '../../components/Tabs';

export default function Salaries() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [data, setData] = useState<SalariesTables>({
    allData: [],
    portugal: [],
    outsidePortugal: [],
    rolesOrderRemuneration: [],
  });

  useEffect(() => {
    setLoading(true);
    GetSalaries()
      .then((salaries: SalariesTables) => {
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
            <Tab title="Análise dos dados Portugal">
              <Table tableData={data.portugal} placeholder="" />
            </Tab>
            <Tab title="Análise dos dados Fora de Portugal">
              <Table tableData={data.outsidePortugal} placeholder="" />
            </Tab>
            <Tab title="Roles por ordem de Remuneração">
              <Table tableData={data.rolesOrderRemuneration} placeholder="" />
            </Tab>
          </Tabs>
        </div>
      </LoadingScreen>
    </>
  );
}
