import { Navbar } from 'flowbite-react';
import { Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';
import AppNavLink from '../../AppNavLink';

import logo from '../../../assets/images/icon.png';

import { NavbarModel } from '../../../models/NavbarModel';
import { NavbarLinkModel } from '../../../models/NavbarLinkModel';
import { NavbarDropdownModel } from '../../../models/NavbarDropdownModel';

interface CreateDropdownProps {
  navbarDropdown: NavbarDropdownModel;
}

function CreateDropdown(props: CreateDropdownProps) {
  return (
    <div className="!text-gray-700  dark:!text-gray-400">
      <Dropdown
        label={props.navbarDropdown.title}
        inline={true}
        className="bg-white dark:bg-zinc-800"
      >
        {props.navbarDropdown.links.map((item, index) => (
          <Dropdown.Item className="dark:hover:!bg-transparent" key={index}>
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

interface CreateNavLinkProps {
  navbarLink: NavbarLinkModel;
}

function CreateNavLink(props: CreateNavLinkProps) {
  return (
    <AppNavLink to={props.navbarLink.to}>{props.navbarLink.title}</AppNavLink>
  );
}

interface GenerateNavbarCollapseProps {
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

export default function Header() {
  const navbarData: NavbarModel = {
    items: [
      {
        navbarLink: {
          title: 'Empresas',
          to: '/companies',
        },
      },
      {
        navbarLink: {
          title: 'Salários',
          to: '/salaries',
        },
      },
      {
        navbarDropdown: {
          title: 'Mais estudos',
          links: [
            { title: 'Cursos', to: '/courses' },
            { title: 'Modo de trabalho', to: '/workmode' },
            { title: 'Frameworks', to: '/frameworks' },
            { title: 'Chatgpt', to: '/chatgpt' },
            { title: 'Primeiro emprego', to: '/firstjob' },
          ],
        },
      },
    ],
  };

  return (
    <Navbar rounded={false} className="!bg-transparent !shadow-lg">
      <Link to="/#" className="flex">
        <img src={logo} className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          PorqueEUprogramo
        </span>
      </Link>
      <Navbar.Toggle />
      <GenerateNavbarCollapse navbarData={navbarData} />
    </Navbar>
  );
}
