import { createCard } from "./cards";
import one from './assets/1.avif';

export function createMenu () {
  return createCard(
    3,
    one,
    'CLASSIC CHEESEBURGER',
    'Juicy beef patty, melted cheese, crisp lettuce, tomato, onion, and Feastria sauce.',
  );
}