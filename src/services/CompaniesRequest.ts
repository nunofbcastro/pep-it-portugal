import axios from 'axios';
import { TableItem } from '../models/TableItem';
import { convertTableToJson, selectTableFromMarkdown } from '../utils/markdown';

export async function GetCompanies(): Promise<TableItem[]> {
  const url = `${import.meta.env.VITE_URL_COMPANIES}`;

  let result = (
    await axios.get(url, {
      timeout: 5000,
    })
  ).data;

  return convertTableToJson(selectTableFromMarkdown(result));
}
