// src/components/Header/menuData.tsx

import { MenuItem } from '@/sanity/shared-types';

const menuData: MenuItem[] = [
  {
    id: 1,
    title: 'home',
    path: '/',
    newTab: false,
  },
  {
    id: 2,
    title: 'aboutUs',
    path: '/about',
    newTab: false,
  },
  {
    id: 3,
    title: 'blog',
    path: '/blog',
    newTab: false,
  },
  {
    id: 4,
    title: 'contact',
    path: '/contact',
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: 'Blog-sidebar',
  //   path: '/blog-sidebar',
  //   newTab: false,
  // },
];

export default menuData;
