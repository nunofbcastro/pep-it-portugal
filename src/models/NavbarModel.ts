import { NavbarDropdownModel } from './NavbarDropdownModel';
import { NavbarLinkModel } from './NavbarLinkModel';

interface item {
  navbarLink?: NavbarLinkModel;
  navbarDropdown?: NavbarDropdownModel;
}

export interface NavbarModel {
  items: item[];
}
