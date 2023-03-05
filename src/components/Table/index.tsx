import './style.scss';

import { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';

import { TableSizes } from '../../models/TableSizes';
import { TableItem } from '../../models/TableItem';
import { TableSort } from '../../models/TableSort';

import { sortArrayTableItems } from '../../utils/Sorting';
import { searchTableItems } from '../../utils/Search';

import TableSearch from './TableSearch';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

export interface TableProps {
  size?: TableSizes;
  tableData: TableItem[];
  colorArrowSelected: string;
  placeholder: string;
}

function getTitles(tableData: TableItem[]): string[] {
  if (tableData.length <= 0) {
    return [];
  }
  return Object.keys(tableData[0]);
}

export default function Table({
  size = TableSizes.MEDIUM,
  tableData,
  colorArrowSelected = 'text-black',
  placeholder,
}: TableProps) {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value);

  const [titles, setTitles] = useState<string[]>(() => getTitles(tableData));
  const [content, setContent] = useState<TableItem[]>(() => tableData);
  const [sort, setSort] = useState<TableSort>({});

  useEffect(() => {
    setContent(sortArrayTableItems(content, sort));
  }, [sort]);

  useEffect(() => {
    setContent(sortArrayTableItems(searchTableItems(tableData, value), sort));
  }, [debouncedValue]);

  useEffect(() => {
    setTitles(getTitles(tableData));
    setContent(tableData);
  }, [tableData]);

  return (
    <div className={`${size.size} w-full`}>
      <div className="block bg-BackgroundLight dark:bg-BackgroundDark border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
        <div className="myTableTop">
          <TableSearch placeholder={placeholder} onChange={setValue} />
        </div>

        <div className="block overflow-x-scroll">
          <table className="myTable">
            <tbody>
              <TableHeaders
                titles={titles}
                sort={sort}
                onArrowClick={setSort}
                colorArrowSelected={colorArrowSelected}
              />

              <TableBody titles={titles} content={content} />
            </tbody>
          </table>
        </div>

        <div className="myTableBottom"></div>
      </div>
    </div>
  );
}
