import { useEffect, useState } from 'react';

import { GetChatgpt } from '../../services/ChatgptRequest';

import { ChatgptTables } from '../../models/ChatgptTables';

import { LoadingScreen } from '../../components/LoadingScreen';
import Table from '../../components/Table';
import Tab from '../../components/Tabs/Tab';
import Tabs from '../../components/Tabs';

export default function Chatgpt() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [data, setData] = useState<ChatgptTables>({
    allData: [],
    dataAnalysis: [],
  });

  useEffect(() => {
    setLoading(true);
    GetChatgpt()
      .then((salaries: ChatgptTables) => {
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
