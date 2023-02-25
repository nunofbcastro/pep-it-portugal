import axios from 'axios';
import { SalariesTables } from '../models/SalariesTables';
import { convertTableToJson, selectTableFromMarkdown } from '../utils/markdown';

export async function GetSalaries(): Promise<SalariesTables> {
  const url = `${import.meta.env.VITE_URL_SALARIES}`;

  let result = (
    await axios.get(url, {
      timeout: 5000,
    })
  ).data;

  let resultInJson: SalariesTables = {
    allData: convertTableToJson(selectTableFromMarkdown(result, 0)),
    portugal: convertTableToJson(selectTableFromMarkdown(result, 1)),
    outsidePortugal: convertTableToJson(selectTableFromMarkdown(result, 2)),
    rolesOrderRemuneration: convertTableToJson(
      selectTableFromMarkdown(result, 3)
    ),
  };

  return resultInJson;
}
