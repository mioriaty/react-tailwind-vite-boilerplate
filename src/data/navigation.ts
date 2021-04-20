import { v4 as uuidv4 } from 'uuid';

import { LocationStates } from 'routers/types';

export interface NavItemType {
  id: string;
  name: string;
  link: keyof LocationStates | '#';
  children?: NavItemType[];
  isActive?: boolean;
  isMegamenu?: boolean;
}
export const NAVDATABASE: NavItemType[] = [
  {
    id: uuidv4(),
    name: 'Home',
    link: '/',
    children: [
      { id: uuidv4(), name: 'Home 1', link: '/' },
      { id: uuidv4(), name: 'Home 2', link: '/' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Shop',
    link: '/',
    children: [
      { id: uuidv4(), name: 'Shop Style 1', link: '/' },
      { id: uuidv4(), name: 'Shop Search', link: '/' },
      { id: uuidv4(), name: 'Single Vertical', link: '/' },
      { id: uuidv4(), name: 'Single Horizontal', link: '/' },
      { id: uuidv4(), name: 'Cart', link: '/' },
      { id: uuidv4(), name: 'Checkout', link: '/' },
    ],
  },
  { id: uuidv4(), name: 'About', link: '/' },
  { id: uuidv4(), name: 'Megamenu', link: '/', isMegamenu: true },
  {
    id: uuidv4(),
    name: 'Blog',
    link: '/',
    children: [
      { id: uuidv4(), name: 'Blog', link: '/' },
      { id: uuidv4(), name: 'Blog Masonry', link: '/' },
      { id: uuidv4(), name: 'Blog Single', link: '/' },
    ],
  },
  {
    id: uuidv4(),
    name: 'Pages',
    link: '/',
    children: [
      { id: uuidv4(), name: 'Contact', link: '/' },
      { id: uuidv4(), name: 'About Us', link: '/' },
      { id: uuidv4(), name: '404 Page', link: '/page404' },
      {
        id: uuidv4(),
        name: 'Shop',
        link: '/',
        children: [
          { id: uuidv4(), name: 'Shop ', link: '/' },
          { id: uuidv4(), name: 'Shop 2', link: '/' },
          { id: uuidv4(), name: 'Shop Single', link: '/' },
          { id: uuidv4(), name: 'Cart', link: '/' },
          { id: uuidv4(), name: 'Checkout', link: '/' },
        ],
      },
    ],
  },
];

export const MEGAMENU = [
  {
    title: 'Clothing',
    items: ['Blouses', 'Dresses', 'Footwear', 'Hats', 'Hoodies', 'T-shirts', 'Trousers'],
  },
  {
    title: 'Kitchen',
    items: ['Blenders', 'Colanders', 'Kettles', 'Knives', 'Pots & Pans', 'T-shirts', 'Toasters'],
  },
  {
    title: 'Electronics',
    items: ['Cameras', 'DVD Players', 'Headphones', 'MP3 Players', 'Radios  ', 'Televisions', 'Trousers'],
  },
  {
    title: 'Music',
    items: ['Albums', 'Singles', 'MP3', 'Posters', 'Radios  ', 'Hoodies', 'Dresses'],
  },
];
