import placeholderImg from 'images/placeholder.jpg';
import { v4 as uuidv4 } from 'uuid';

export interface ProductType {
  id: string;
  img: string;
  gallery?: string[];
  name: string;
  price: string;
  oldPrice?: string;
  saleUp?: string;
}

export const PRODUCTS_1: ProductType[] = [
  {
    id: uuidv4(),
    price: '$144',
    oldPrice: '$244',
    saleUp: '12%',
    name: 'Women Wool Runner',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
  {
    id: uuidv4(),
    price: '$244',
    name: 'Two Colure Hoodie',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
  {
    id: uuidv4(),
    price: '$164',
    name: 'Beautifull Stylish Handbag',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
  {
    id: uuidv4(),
    price: '$224',
    oldPrice: '$333',
    saleUp: '11%',
    name: 'Shadedeye Gold Sunglasses',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },

  {
    id: uuidv4(),
    price: '$322',
    name: 'Stylish Smart Watch',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
  {
    id: uuidv4(),
    price: '$844',
    oldPrice: '$944',
    saleUp: '10%',
    name: 'Gray Fitness T-Shirt',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
  {
    id: uuidv4(),
    price: '$244',
    name: 'Two Colure Hoodie',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
  {
    id: uuidv4(),
    price: '$164',
    name: 'Beautifull Stylish Handbag',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
];

export const PRODUCTS_2: ProductType[] = [
  {
    id: uuidv4(),
    price: '$144',
    oldPrice: '$244',
    saleUp: '12%',
    name: 'Women Wool Runner',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
  {
    id: uuidv4(),
    price: '$244',
    name: 'Two Colure Hoodie',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
  {
    id: uuidv4(),
    price: '$164',
    name: 'Beautifull Stylish Handbag',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
  {
    id: uuidv4(),
    price: '$224',
    oldPrice: '$333',
    saleUp: '11%',
    name: 'Shadedeye Gold Sunglasses',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },

  {
    id: uuidv4(),
    price: '$322',
    name: 'Stylish Smart Watch',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
  {
    id: uuidv4(),
    price: '$844',
    oldPrice: '$944',
    saleUp: '10%',
    name: 'Gray Fitness T-Shirt',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
  {
    id: uuidv4(),
    price: '$244',
    name: 'Two Colure Hoodie',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
  {
    id: uuidv4(),
    price: '$164',
    name: 'Beautifull Stylish Handbag',
    img: placeholderImg,
    gallery: [placeholderImg, placeholderImg, placeholderImg],
  },
];
