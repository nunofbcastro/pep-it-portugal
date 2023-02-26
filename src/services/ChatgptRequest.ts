import MyAPI from './MyAPI';
import { Tables } from '../models/Tables';
import { convertTableToJson, selectTableFromMarkdown } from '../utils/Markdown';

export async function GetChatGPT(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_CHATGPT}`;

  let result = (await MyAPI().get(url)).data;

  let resultInJson: Tables = {
    ['All_Data']: convertTableToJson(selectTableFromMarkdown(result, 0)),
    ['Data_Analysis']: convertTableToJson(selectTableFromMarkdown(result, 1)),
  };

  return resultInJson;
}
