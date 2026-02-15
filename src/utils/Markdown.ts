import type { TableItem } from '../models/TableItem';

function addProtocolToMarkdownLinks(markdownText: string): string {
    return markdownText.replace(/\[(.+?)\]\(([^'"]+)\)/g, (_match, p1, p2) => {
        if (!/^https?:\/\//i.test(p2)) {
            p2 = `//${p2}`;
        }
        return `[${p1}](${p2})`;
    });
}

function removeNonTableLines(text: string): string {
    // Regex pattern to match table lines
    //const tableRegex = /^\s*\|.*\|\s*$/gm;
    const tableRegex = /^\s*\|.*$/gm;

    // Split the text into lines
    const lines = text.split('\n');

    // Filter out non-table lines using the regex pattern
    const tableLines = lines.filter((line) => line.match(tableRegex));

    // Join the filtered lines back into a single string
    return tableLines.join('\n');
}

function parseTable(tableString: string): TableItem[] {
    const lines = tableString.split('\n');
    const table: TableItem[] = [];
    let headers: string[] = [];

    if (lines.length < 2) {
        throw new Error(
            'Tabela inválida: a tabela deve ter pelo menos duas linhas.'
        );
    }

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (i === 0 && line) {
            headers = line.split('|').map((header) => header.trim());
        } else if (i === 1) {
            continue;
        } else {
            const item: TableItem = {};

            if (line) {
                const values = line.split('|').map((value) => value.trim());
                for (let j = 1; j < headers.length - 1; j++) {
                    const key = headers[j] !== undefined ? headers[j] : `col_${j}`;
                    if (j < values.length && key !== undefined) {
                        const value = values[j];
                        if (value !== undefined) {
                            item[key] = value;
                        }
                    }
                }
            }

            if (Object.keys(item).length > 0) {
                table.push(item);
            }
        }
    }

    return table;
}

export function selectTableFromMarkdown(
    markdown: string,
    index: number = 0
): string {
    const lines = markdown.trim().split('\n');
    const tables: string[][] = [];
    let currentTable: string[] = [];
    let insideTable = false;
    let numColumns = 0;

    // separa cada tabela em um array de linhas
    lines.forEach((line) => {
        if (line.trim().startsWith('|')) {
            // nova linha da tabela atual
            currentTable.push(line);
            numColumns = Math.max(numColumns, line.split('|').length - 2);
            insideTable = true;
        } else if (insideTable) {
            // fim da tabela atual
            tables.push(currentTable);
            currentTable = [];
            insideTable = false;
        }
    });

    // adicionar última tabela, se houver
    if (insideTable && currentTable.length > 0) {
        tables.push(currentTable);
    }

    // seleciona a tabela especificada pelo índice
    const selectedTable = tables[index];
    if (selectedTable) {
        return selectedTable.join('\n');
    }

    return '';
}

export function convertTableToJson(input: string): TableItem[] {
    const lines = removeNonTableLines(addProtocolToMarkdownLinks(input));
    try {
        const table = parseTable(lines);
        return table;
    } catch (error) {
        console.error("Error parsing table:", error);
        return [];
    }
}
