import MyAPI from './MyAPI';
import { Tables } from '../models/Tables';
import { convertTableToJson, selectTableFromMarkdown } from '../utils/Markdown';

export async function GetSalaries(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_SALARIES}`;

  let result = (await MyAPI().get(url)).data;

  let resultInJson: Tables = {
    ['All_Data']: convertTableToJson(selectTableFromMarkdown(result, 0)),
    ['Data_Analysis_Portugal']: convertTableToJson(
      selectTableFromMarkdown(result, 1)
    ),
    ['Data_Analysis_Outside_Portugal']: convertTableToJson(
      selectTableFromMarkdown(result, 2)
    ),
    ['Data_Analysis_Roles_Order_Remuneration']: convertTableToJson(
      selectTableFromMarkdown(result, 3)
    ),
  };

  return resultInJson;
}
