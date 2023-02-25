import axios from 'axios';
import { FirstJobTable } from '../models/FirstJobTable';
import { convertTableToJson, selectTableFromMarkdown } from '../utils/markdown';

export async function GetFirstJob(): Promise<FirstJobTable> {
  const url = `${import.meta.env.VITE_URL_FIRST_JOB}`;

  let result = (
    await axios.get(url, {
      timeout: 5000,
    })
  ).data;

  let resultInJson: FirstJobTable = {
    allData: convertTableToJson(selectTableFromMarkdown(result, 0)),
    dataAnalysis: convertTableToJson(selectTableFromMarkdown(result, 1)),
  };

  return resultInJson;
}
