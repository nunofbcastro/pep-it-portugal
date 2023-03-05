import { ChangeEvent } from 'react';

import { AiOutlineSearch as SearchIcon } from 'react-icons/ai';

export type TableSearchProps = {
  placeholder?: string;
  onChange: (value: string) => void;
};

export default function TableSearch(props: TableSearchProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
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
  );
}
