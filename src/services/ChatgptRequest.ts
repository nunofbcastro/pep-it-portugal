import axios from 'axios';
import { ChatgptTables } from '../models/ChatgptTables';
import { convertTableToJson, selectTableFromMarkdown } from '../utils/markdown';

export async function GetChatgpt(): Promise<ChatgptTables> {
  const url = `${import.meta.env.VITE_URL_CHATGPT}`;

  let result = (
    await axios.get(url, {
      timeout: 5000,
    })
  ).data;

  let resultInJson: ChatgptTables = {
    allData: convertTableToJson(selectTableFromMarkdown(result, 0)),
    dataAnalysis: convertTableToJson(selectTableFromMarkdown(result, 1)),
  };

  return resultInJson;
}
