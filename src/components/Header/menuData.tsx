// src/components/Header/menuData.tsx

import { MenuItem } from '@/sanity/menu';

const menuData: MenuItem[] = [
  {
    id: 1,
    title: 'Inicio',
    path: '/',
    newTab: false,
  },
  {
    id: 2,
    title: 'Sobre nosotros',
    path: '/about',
    newTab: false,
  },
  {
    id: 33,
    title: 'Actualidad',
    path: '/blog',
    newTab: false,
  },
  {
    id: 3,
    title: 'Contacto',
    path: '/contact',
    newTab: false,
  },
];

export default menuData;
