import { Navbar } from 'flowbite-react';
import { NavbarModel } from '../../../models/NavbarModel';

import { Link } from 'react-router-dom';

import logo from '../../../assets/images/icon.png';

import GenerateNavbarCollapse from './GenerateNavbarCollapse';

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
            { title: 'ChatGPT', to: '/chatgpt' },
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
