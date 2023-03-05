import { NavbarLinkModel } from '../../../../models/NavbarLinkModel';
import AppNavLink from '../../../AppNavLink';

export interface CreateNavLinkProps {
  navbarLink: NavbarLinkModel;
}

export default function CreateNavLink(props: CreateNavLinkProps) {
  return (
    <AppNavLink to={props.navbarLink.to}>{props.navbarLink.title}</AppNavLink>
  );
}
