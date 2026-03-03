import { createCard } from "./card";
import img1 from './assets/1.avif';
import img2 from './assets/2.avif';
import img3 from './assets/3.avif';
import img4 from './assets/4.avif';

export function getMenuContent () {
  const burgers = [
    [3,img1,'CLASSIC CHEESEBURGER','Juicy beef patty, melted cheese, crisp lettuce, tomato, onion, and Feastria sauce.'],
    [3,img2,'DOUBLE CHEESEBURGER', 'Two patties, double cheese, and a whole lot of Feastria flavor.'],
    [3,img3,'BACON BURGER', 'Stacked with bacon, cheddar, fresh veggies, and smoky Feastria flavor.'],
    [3,img4,'VEGGIE BURGER', 'Fresh, flavorful plant-based patty topped with crisp veggies and vegan Feastria sauce.'],
  ];

  const cards = document.createElement('div');
  cards.classList.add('cards');

  cards.append(...burgers.map(b => createCard(b[0], b[1], b[2], b[3])));

  return [cards];
}