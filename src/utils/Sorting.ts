import { SortOrder } from '../models/SortOrder';
import { TableItem } from '../models/TableItem';
import { TableSort } from '../models/TableSort';
import { compareValues } from './Compare';

export function sortArrayTableItems(
  content: TableItem[],
  tableSort: TableSort
): TableItem[] {
  if (!tableSort.key || tableSort.sortOrder == undefined) {
    return content;
  }

  const sortedArr = [...content].sort((a, b) => {
    const comparison = compareValues(a[tableSort.key!], b[tableSort.key!]);

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
