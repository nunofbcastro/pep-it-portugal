import React from 'react';

import { Dropdown } from 'flowbite-react';

import AppNavLink from '../../../AppNavLink';
import { NavbarDropdownModel } from '../../../../models/NavbarDropdownModel';

export interface CreateDropdownProps {
  navbarDropdown: NavbarDropdownModel;
}

function CreateDropdown(props: CreateDropdownProps) {
  return (
    <div className="!text-gray-700 dark:!text-gray-400 py-2 pr-4 pl-3 md:p-0 hover:!text-black dark:hover:!text-white">
      <Dropdown
        label={props.navbarDropdown.title}
        inline={true}
        className="bg-white dark:bg-zinc-800"
      >
        {props.navbarDropdown.links.map((item, index) => (
          <Dropdown.Item
            className="dark:hover:!bg-transparent !p-0 md:!py-2 md:!px-4"
            key={index}
          >
            <ul className="w-full">
              <AppNavLink to={item.to} className="w-full">
                {item.title}
              </AppNavLink>
            </ul>
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
}

export default React.memo(CreateDropdown);
