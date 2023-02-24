import './style.scss';

import { ChangeEvent, useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';

import { TableSizes } from '../../models/TableSizes';
import { SortOrder } from '../../models/SortOrder';
import { TableItem } from '../../models/TableItem';
import { TableSort } from '../../models/TableSort';

import { linkify } from '../../utils/markdown';
import { sortArrayTableItems } from '../../utils/sorting';
import { searchTableItems } from '../../utils/search';

import {
  AiOutlineSearch as SearchIcon,
  AiOutlineArrowDown as ArrowDown,
  AiOutlineArrowUp as ArrowUp,
} from 'react-icons/ai';

export interface TableProps {
  size?: TableSizes;
  tableData: TableItem[];

  placeholder: string;
}

function getSize(size?: TableSizes): TableSizes {
  if (size) {
    return size;
  }
  return TableSizes.MEDIUM;
}

function getTitles(tableData: TableItem[]): string[] {
  if (tableData.length <= 0) {
    return [];
  }
  return Object.keys(tableData[0]);
}

export default function Table(props: TableProps) {
  const colorArrowSelected = 'text-black';

  let size = getSize(props.size);
  let [titles, setTitles] = useState<string[]>([]);
  const [content, setContent] = useState<TableItem[]>([]);

  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 300);
  const [sort, setSort] = useState<TableSort>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setContent(sortArrayTableItems(content, sort));
  }, [sort]);

  useEffect(() => {
    setContent(
      sortArrayTableItems(searchTableItems(props.tableData, value), sort)
    );
  }, [debouncedValue]);

  useEffect(() => {
    setTitles(getTitles(props.tableData));
    setContent(props.tableData);
  }, [props.tableData]);

  return (
    <div className={`${size.size}`}>
      <div className="block bg-BackgroundLight dark:bg-BackgroundDark border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
        <div className="myTableTop">
          <div className="myTableSearch">
            <span>
              <SearchIcon size={25} />
            </span>
            <input
              type="text"
              name="search"
              placeholder={props.placeholder}
              onChange={handleChange}
            />
          </div>
        </div>

        <table className="myTable">
          <tbody>
            <tr>
              {titles.map((item, index) => (
                <th key={index}>
                  <div className="flex items-center justify-center">
                    {item}
                    <div className="min-w-12 flex">
                      <ArrowDown
                        className={`h-4 w-4 mx-2 ${
                          sort.key == item &&
                          sort.sortOrder == SortOrder.asc &&
                          colorArrowSelected
                        }`}
                        onClick={() => {
                          setSort({
                            key: item,
                            sortOrder: SortOrder.asc,
                          });
                        }}
                      />
                      <ArrowUp
                        className={`h-4 w-4 mx-2 ${
                          sort.key == item &&
                          sort.sortOrder == SortOrder.desc &&
                          colorArrowSelected
                        }`}
                        onClick={() => {
                          setSort({
                            key: item,
                            sortOrder: SortOrder.desc,
                          });
                        }}
                      />
                    </div>
                  </div>
                </th>
              ))}
            </tr>

            {content.map((items, indexTr) => (
              <tr key={indexTr}>
                {titles.map((item, indexTd) => (
                  <td key={indexTd}>
                    <div
                      className="custom-a flex items-center justify-center text-justify"
                      dangerouslySetInnerHTML={{ __html: linkify(items[item]) }}
                    ></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="myTableBottom"></div>
      </div>
    </div>
  );
}
