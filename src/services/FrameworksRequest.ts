import axios from 'axios';
import { FrameworksTables } from '../models/FrameworksTables';
import { convertTableToJson, selectTableFromMarkdown } from '../utils/markdown';

export async function GetFrameworks(): Promise<FrameworksTables> {
  const url = `${import.meta.env.VITE_URL_FRAMEWORKS}`;

  let result = (
    await axios.get(url, {
      timeout: 5000,
    })
  ).data;

  let resultInJson: FrameworksTables = {
    allData: convertTableToJson(selectTableFromMarkdown(result, 0)),
    dataAnalysis: convertTableToJson(selectTableFromMarkdown(result, 1)),
  };

  return resultInJson;
}
