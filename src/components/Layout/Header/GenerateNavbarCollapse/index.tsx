import React from 'react';

import { Navbar } from 'flowbite-react';
import { NavbarModel } from '../../../../models/NavbarModel';

import CreateNavLink from '../CreateNavLink';
import CreateDropdown from '../CreateDropdown';

export interface GenerateNavbarCollapseProps {
  navbarData: NavbarModel;
}

function GenerateNavbarCollapse(props: GenerateNavbarCollapseProps) {
  return (
    <Navbar.Collapse>
      {props.navbarData.items.map((item, index) => (
        <div key={index}>
          {item.navbarLink ? (
            <CreateNavLink navbarLink={item.navbarLink} />
          ) : (
            item.navbarDropdown && (
              <CreateDropdown navbarDropdown={item.navbarDropdown} />
            )
          )}
        </div>
      ))}
    </Navbar.Collapse>
  );
}

export default React.memo(GenerateNavbarCollapse);
