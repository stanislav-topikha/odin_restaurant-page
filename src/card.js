export function createCard (price, imgSrc, name, description) {
  const card = document.createElement('div');
  card.classList.add('card');

  const priceEl = document.createElement('div');
  priceEl.classList.add('price');
  priceEl.innerText = `$${price} USD`

  const img = document.createElement('img');
  img.alt = 'Burger'
  img.src = imgSrc;

  const h2 = document.createElement('h2');
  h2.innerText = name;

  const p = document.createElement('p');
  p.innerText = description;

  card.append(priceEl, img, h2, p);

  return card;
}