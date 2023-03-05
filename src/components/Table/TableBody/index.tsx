import ReactMarkdown from 'react-markdown';

import { TableItem } from '../../../models/TableItem';

export type TableBodyProps = {
  titles: string[];
  content: TableItem[];
};

export default function TableBody({ titles, content }: TableBodyProps) {
  return (
    <>
      {content.map((item, index) => (
        <tr key={index}>
          {titles.map((title) => (
            <td key={title}>
              <div className="flex items-center justify-center">
                <ReactMarkdown>{item[title]}</ReactMarkdown>
              </div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
