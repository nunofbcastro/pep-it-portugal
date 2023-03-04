import axios, { AxiosInstance } from 'axios';
import { Tables } from '../models/Tables';
import { convertTableToJson, selectTableFromMarkdown } from '../utils/Markdown';

function API(): AxiosInstance {
  return axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: import.meta.env.VITE_DEFAULT_TIMEOUT,
  });
}

async function fetchDataFromUrl(
  url: string,
  tableNames: string[] = []
): Promise<Tables> {
  const result = (await API().get(url)).data;

  return {
    All_Data: convertTableToJson(selectTableFromMarkdown(result, 0)),
    ...tableNames.reduce((acc: Tables, tableName: string, index: number) => {
      acc[tableName] = convertTableToJson(
        selectTableFromMarkdown(result, index + 1)
      );
      return acc;
    }, {}),
  };
}

export async function GetChatGPT(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_CHATGPT}`;
  return fetchDataFromUrl(url, ['Data_Analysis']);
}

export async function GetCompanies(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_COMPANIES}`;
  return fetchDataFromUrl(url);
}

export async function GetCourses(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_COURSES}`;
  return fetchDataFromUrl(url);
}

export async function GetFirstJob(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_FIRST_JOB}`;
  return fetchDataFromUrl(url, ['Data_Analysis']);
}

export async function GetFrameworks(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_FRAMEWORKS}`;
  return fetchDataFromUrl(url, ['Data_Analysis']);
}

export async function GetSalaries(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_SALARIES}`;
  return fetchDataFromUrl(url, [
    'Data_Analysis_Portugal',
    'Data_Analysis_Outside_Portugal',
    'Data_Analysis_Roles_Order_Remuneration',
  ]);
}

export async function GetWorkMode(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_WORK_MODE}`;
  return fetchDataFromUrl(url, ['Data_Analysis']);
}
