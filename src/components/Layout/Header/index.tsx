import { Navbar } from 'flowbite-react';
import AppNavLink from '../../AppNavLink';
import logo from '../../../assets/images/icon.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar rounded={false} className="!bg-transparent !shadow-lg">
      <Navbar.Brand>
        <Link to="/#" className="flex">
          <img src={logo} className="mr-3 h-6 sm:h-9" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            PorqueEUprogramo
          </span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <AppNavLink to="/salaries" text="Salaries" />
        <AppNavLink to="/companies" text="Companies" />
        <AppNavLink to="/courses" text="Courses" />
        <AppNavLink to="/workmode" text="Work mode" />
        <AppNavLink to="/frameworks" text="Frameworks" />
        <AppNavLink to="/chatgpt" text="Chatgpt" />
      </Navbar.Collapse>
    </Navbar>
  );
}
