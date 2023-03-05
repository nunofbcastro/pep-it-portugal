import {
  AiOutlineArrowDown as ArrowDown,
  AiOutlineArrowUp as ArrowUp,
} from 'react-icons/ai';

import { SortOrder } from '../../../models/SortOrder';
import { TableSort } from '../../../models/TableSort';

export type TableHeadersProps = {
  titles: string[];
  sort: TableSort;
  onArrowClick: (sort: TableSort) => void;
  colorArrowSelected: string;
};

export default function TableHeaders({
  titles,
  sort,
  colorArrowSelected = 'bg-black',
  onArrowClick,
}: TableHeadersProps) {
  return (
    <tr>
      {titles.map((title) => (
        <th key={title}>
          <div className="flex items-center justify-center">
            {title}
            <div className="min-w-12 flex">
              <ArrowDown
                className={`h-4 w-4 mx-2 ${
                  sort.key === title &&
                  sort.sortOrder === SortOrder.asc &&
                  colorArrowSelected
                }`}
                onClick={() =>
                  onArrowClick({ key: title, sortOrder: SortOrder.asc })
                }
              />
              <ArrowUp
                className={`h-4 w-4 mx-2 ${
                  sort.key === title &&
                  sort.sortOrder === SortOrder.desc &&
                  colorArrowSelected
                }`}
                onClick={() =>
                  onArrowClick({ key: title, sortOrder: SortOrder.desc })
                }
              />
            </div>
          </div>
        </th>
      ))}
    </tr>
  );
}
