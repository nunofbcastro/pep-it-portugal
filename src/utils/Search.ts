import { TableItem } from '../models/TableItem';

export function searchTableItems(
  content: TableItem[],
  valueSearch: string
): TableItem[] {
  if (valueSearch.length == 0) {
    return content;
  }

  const filteredArr: TableItem[] = content.filter((item) => {
    return Object.values(item).some((value) => {
      if (typeof value === 'object') {
        // Se o valor é um objeto, chama a função searchObject novamente para pesquisar dentro do objeto
        return searchTableItems(value, valueSearch);
      } else {
        // Se o valor é uma string, verifica se o termo de pesquisa é uma substring do valor
        return (
          typeof value === 'string' &&
          value.toLowerCase().includes(valueSearch.toLowerCase())
        );
      }
    });
  });
  return filteredArr;
}
