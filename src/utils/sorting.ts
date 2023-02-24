import { SortOrder } from '../models/SortOrder';
import { TableItem } from '../models/TableItem';
import { TableSort } from '../models/TableSort';

export function sortArrayTableItems(
  content: TableItem[],
  tableSort: TableSort
): TableItem[] {
  if (!tableSort.key || tableSort.sortOrder == undefined) {
    return content;
  }

  const sortedArr = [...content].sort((a, b) => {
    const comparison = a[tableSort.key!]
      .toString()
      .localeCompare(b[tableSort.key!].toString());

    if (comparison < 0) {
      return tableSort.sortOrder === SortOrder.asc ? -1 : 1;
    } else if (comparison > 0) {
      return tableSort.sortOrder === SortOrder.asc ? 1 : -1;
    } else {
      return 0;
    }
  });

  return sortedArr;
}
