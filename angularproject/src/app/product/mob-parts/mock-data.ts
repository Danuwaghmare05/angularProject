import { MobParts } from 'src/app/models/mob-parts';

export const MOBPARTS: MobParts[] = [
  {
    id: 1001,
    name: 'Screen 5.5',
    description: '5.5 Screen for Moto g',
    inStock: 6,
    price: 1200,
    country: 'Germany',
    prdImg: 'mob1.png',
    clsVar: true,
    quantity: 5,
  },
  {
    id: 1002,
    name: 'Screen 5',
    description: '5 Screen for Samsung',
    inStock: 9,
    price: 1200,
    country: 'India',
    prdImg: 'mob2.png',
    clsVar: true,
    quantity: 0,
  },
  {
    id: 1003,
    name: 'key panel',
    description: 'Key panel for Nokia',
    inStock: 0,
    price: 1200,
    country: 'Australia',
    prdImg: 'mob3.png',
    clsVar: true,
    quantity: 5,
  },
];
