import axios, { type AxiosInstance } from 'axios';
import type { Tables } from '../models/Tables';
import { convertTableToJson, selectTableFromMarkdown } from '../utils/Markdown';

function API(): AxiosInstance {
    return axios.create({
        baseURL: import.meta.env.PUBLIC_BASE_URL,
        timeout: Number(import.meta.env.PUBLIC_DEFAULT_TIMEOUT) || 5000,
    });
}

async function fetchDataFromUrl(
    url: string,
    tableNames: string[]
): Promise<Tables> {
    try {
        const response = await API().get(url);
        const result = response.data;

        return {
            ...tableNames.reduce((acc: Tables, tableName: string, index: number) => {
                const markdownTable = selectTableFromMarkdown(result, index);
                if (markdownTable) {
                    acc[tableName] = convertTableToJson(markdownTable);
                } else {
                    acc[tableName] = [];
                }
                return acc;
            }, {}),
        };
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return {};
    }
}

export async function GetChatGPT(): Promise<Tables> {
    const url = `${import.meta.env.PUBLIC_URL_CHATGPT}`;
    return fetchDataFromUrl(url, ['Todos os dados', 'Análise dos dados']);
}

export async function GetCompanies(): Promise<Tables> {
    const url = `${import.meta.env.PUBLIC_URL_COMPANIES}`;
    return fetchDataFromUrl(url, ['Todos os dados']);
}

export async function GetCourses(): Promise<Tables> {
    const url = `${import.meta.env.PUBLIC_URL_COURSES}`;
    return fetchDataFromUrl(url, ['Todos os dados']);
}

export async function GetFirstJob(): Promise<Tables> {
    const url = `${import.meta.env.PUBLIC_URL_FIRST_JOB}`;
    return fetchDataFromUrl(url, ['Todos os dados', 'Análise dos dados']);
}

export async function GetFrameworks(): Promise<Tables> {
    const url = `${import.meta.env.PUBLIC_URL_FRAMEWORKS}`;
    return fetchDataFromUrl(url, ['Todos os dados', 'Análise dos dados']);
}

export async function GetSalaries(): Promise<Tables> {
    const url = `${import.meta.env.PUBLIC_URL_SALARIES}`;
    return fetchDataFromUrl(url, [
        'Todos os dados',
        'Análise dos dados Portugal',
        'Análise dos dados Fora de Portugal',
        'Roles por ordem de Remuneração',
    ]);
}

export async function GetWorkMode(): Promise<Tables> {
    const url = `${import.meta.env.PUBLIC_URL_WORK_MODE}`;
    return fetchDataFromUrl(url, ['Todos os dados', 'Análise dos dados']);
}
