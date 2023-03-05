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
  tableNames: string[]
): Promise<Tables> {
  const result = (await API().get(url)).data;

  return {
    ...tableNames.reduce((acc: Tables, tableName: string, index: number) => {
      acc[tableName] = convertTableToJson(
        selectTableFromMarkdown(result, index)
      );
      return acc;
    }, {}),
  };
}

export async function GetChatGPT(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_CHATGPT}`;
  return fetchDataFromUrl(url, ['Todos os dados', 'Análise dos dados']);
}

export async function GetCompanies(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_COMPANIES}`;
  return fetchDataFromUrl(url, ['Todos os dados']);
}

export async function GetCourses(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_COURSES}`;
  return fetchDataFromUrl(url, ['Todos os dados']);
}

export async function GetFirstJob(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_FIRST_JOB}`;
  return fetchDataFromUrl(url, ['Todos os dados', 'Análise dos dados']);
}

export async function GetFrameworks(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_FRAMEWORKS}`;
  return fetchDataFromUrl(url, ['Todos os dados', 'Análise dos dados']);
}

export async function GetSalaries(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_SALARIES}`;
  return fetchDataFromUrl(url, [
    'Todos os dados',
    'Análise dos dados Portugal',
    'Análise dos dados Fora de Portugal',
    'Roles por ordem de Remuneração',
  ]);
}

export async function GetWorkMode(): Promise<Tables> {
  const url = `${import.meta.env.VITE_URL_WORK_MODE}`;
  return fetchDataFromUrl(url, ['Todos os dados', 'Análise dos dados']);
}
