
import { Link } from 'react-router-dom';

// Define the navigation links structure
export interface NavLinkItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    name: string;
    path: string;
  }[];
}

// Export the navLinks array so it can be reused
export const navLinks: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Properties', path: '#', hasDropdown: true, dropdownItems: [
    { name: 'All Properties', path: '/properties/all' },
    { name: 'For Sale', path: '/properties/sale' },
    { name: 'For Rent', path: '/properties/rent' },
  ]},
  { name: 'Contact', path: '/contact' },
];
