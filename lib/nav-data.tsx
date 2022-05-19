import * as React from 'react';

import {
  HomeIcon,
  SearchIcon,
  BellIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';

import { home } from '../assets/img';

export interface NavigationItem {
  name?: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
  href: string;
  exact?: boolean;
  external?: boolean;
}

export type NavMenuItem = Omit<NavigationItem, 'icon'>;

export const bottomNavigation: NavigationItem[] = [
  {
    icon: HomeIcon,
    href: '/',
    exact: true,
  },
  {
    icon: SearchIcon,
    href: '/',
  },
  {
    icon: BellIcon,
    href: '/',
  },
  {
    icon: UserCircleIcon,
    href: '/',
  },
];
