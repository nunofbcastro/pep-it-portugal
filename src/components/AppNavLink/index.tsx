import { useLinkClickHandler, useLocation } from 'react-router-dom';
import { Navbar } from 'flowbite-react';

export interface AppNavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export default function AppNavLink(props: AppNavLinkProps) {
  const location = useLocation();
  const clickHandler = useLinkClickHandler(props.to);

  const ValidatePath = () => {
    let atualPath = location.pathname.split('/');
    let verifyPath = props.to.split('/');

    if (atualPath.length < verifyPath.length) {
      return false;
    }

    let count = 0;

    for (let i = 0; i < verifyPath.length; i++) {
      if (atualPath[i] != verifyPath[i]) {
        break;
      }
      count++;
    }

    return count == verifyPath.length;
  };

  return (
    <span onClick={clickHandler} className={props.className}>
      <Navbar.Link
        href={props.to}
        active={ValidatePath()}
        theme={{
          active: {
            on: 'md:!bg-transparent !bg-primary md:text-primary text-white',
            off: 'text-gray-700 dark:text-gray-400 dark:hover:text-white md:hover:text-black md:dark:hover:text-white',
          },
        }}
      >
        {props.children}
      </Navbar.Link>
    </span>
  );
}
