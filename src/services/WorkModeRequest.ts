import axios from 'axios';
import { WorkModeTables } from '../models/WorkModeTables';
import { convertTableToJson, selectTableFromMarkdown } from '../utils/markdown';

export async function GetWorkMode(): Promise<WorkModeTables> {
  const url = `${import.meta.env.VITE_URL_WORK_MODE}`;

  let result = (
    await axios.get(url, {
      timeout: 5000,
    })
  ).data;

  let resultInJson: WorkModeTables = {
    allData: convertTableToJson(selectTableFromMarkdown(result, 0)),
    dataAnalysis: convertTableToJson(selectTableFromMarkdown(result, 1)),
  };

  return resultInJson;
}
