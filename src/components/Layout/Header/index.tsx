import { Navbar } from 'flowbite-react';
import AppNavLink from '../../AppNavLink';
import logo from '../../../assets/images/icon.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar rounded={false} className="!bg-transparent !shadow-lg">
      <Link to="/#" className="flex">
        <img src={logo} className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          PorqueEUprogramo
        </span>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <AppNavLink to="/companies" text="Empresas" />
        <AppNavLink to="/salaries" text="Salários" />
        <AppNavLink to="/courses" text="Cursos" />
        <AppNavLink to="/workmode" text="Modo de trabalho" />
        <AppNavLink to="/frameworks" text="Frameworks" />
        <AppNavLink to="/chatgpt" text="Chatgpt" />
      </Navbar.Collapse>
    </Navbar>
  );
}
