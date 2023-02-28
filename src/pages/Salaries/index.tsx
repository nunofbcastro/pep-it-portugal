import { useEffect, useState } from 'react';
import { useTitle } from '../../hooks/useTitle';

import { GetSalaries } from '../../services/SalariesRequest';

import { Tables } from '../../models/Tables';

import { LoadingScreen } from '../../components/LoadingScreen';
import Table from '../../components/Table';
import Tab from '../../components/Tabs/Tab';
import Tabs from '../../components/Tabs';

export default function Salaries() {
  useTitle('Salários');

  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [data, setData] = useState<Tables>({
    ['All_Data']: [],
    ['Data_Analysis_Portugal']: [],
    ['Data_Analysis_Outside_Portugal']: [],
    ['Data_Analysis_Roles_Order_Remuneration']: [],
  });

  useEffect(() => {
    setLoading(true);
    GetSalaries()
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
            <Tab title="Análise dos dados Portugal">
              <Table
                tableData={data['Data_Analysis_Portugal']}
                placeholder=""
              />
            </Tab>
            <Tab title="Análise dos dados Fora de Portugal">
              <Table
                tableData={data['Data_Analysis_Outside_Portugal']}
                placeholder=""
              />
            </Tab>
            <Tab title="Roles por ordem de Remuneração">
              <Table
                tableData={data['Data_Analysis_Roles_Order_Remuneration']}
                placeholder=""
              />
            </Tab>
          </Tabs>
        </div>
      </LoadingScreen>
    </>
  );
}
