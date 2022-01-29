import {
  RiProfileLine,
  RiFileListLine,
  FaRegUser,
  RiContactsLine,
} from './Icons.js';

export const navigations = [
  {
    name: 'Your Profile',
    icon: <FaRegUser />,
    path: '/profile',
  },
  {
    name: 'Customers',
    icon: <RiContactsLine />,
    path: '/customers',
  },
  {
    name: 'Invoices',
    icon: <RiFileListLine />,
    path: '/invoices',
  },
  {
    name: 'Delivery Challans',
    icon: <RiProfileLine />,
    path: '/delivery-challans',
  },
];
