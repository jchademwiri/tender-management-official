import { Icon } from '@iconify/react';

import {  MyLink, SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/dashboard/',
    icon: <Icon icon='lucide:home' width='24' height='24' />,
  },
  {
    title: 'Tenders',
    path: '/dashboard/tenders',
    icon: <Icon icon='lucide:folder' width='24' height='24' />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/dashboard/tenders' },
      { title: 'Open Tenders', path: '/dashboard/tenders/open-tenders' },
      { title: 'Submitted', path: '/dashboard/tenders/submitted' },
      { title: 'Appointed', path: '/dashboard/tenders/appointed' },
    ],
  },
  {
    title: 'Projects',
    path: '/dashboard/projects',
    icon: <Icon icon='lucide:folder' width='24' height='24' />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/dashboard/projects' },
      { title: 'In Progress', path: '/dashboard/projects/in-progress' },
      { title: 'Completed', path: '/dashboard/projects/completed' },
    ],
  },

  {
    title: 'Messages',
    path: '/dashboard/messages',
    icon: <Icon icon='lucide:mail' width='24' height='24' />,
  },
  {
    title: 'Settings',
    path: '/dashboard/settings',
    icon: <Icon icon='lucide:settings' width='24' height='24' />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/dashboard/settings/account' },
      { title: 'Privacy', path: '/dashboard/settings/privacy' },
      { title: 'Add User', path: '/dashboard/settings/adduser' },
    ],
  },
  {
    title: 'Help',
    path: '/dashboard/help',
    icon: <Icon icon='lucide:help-circle' width='24' height='24' />,
  },
];


