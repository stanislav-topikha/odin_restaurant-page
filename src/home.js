import heroSrc from './assets/hero.avif';

export const getHomeContent = () => {
  const heroImg = document.createElement('img');
  heroImg.src = heroSrc;
  heroImg.setAttribute('alt', 'Burger');
  heroImg.classList.add('hero');

  const animatedTextOne = document.createElement('p');
  animatedTextOne.textContent = 'Feastria - Burgers, Bites & Community Vibes Feastria - Burgers, Bites & Community Vibes Feastria - Burgers, Bites & Community Vibes Feastria - Burgers, Bites & Community Vibes Feastria - Burgers, Bites & Community Vibes';
  animatedTextOne.classList.add('animated-text-one');

  const animatedTextTwo = document.createElement('p');
  animatedTextTwo.textContent = 'Feastria - Burgers, Bites & Community Vibes Feastria - Burgers, Bites & Community Vibes Feastria - Burgers, Bites & Community Vibes Feastria - Burgers, Bites & Community Vibes Feastria - Burgers, Bites & Community Vibes';
  animatedTextTwo.classList.add('animated-text-two');

  const button = document.createElement('button');
  button.innerText = 'Explore menu';
  button.classList.add("button-big");

  button.addEventListener('click', () => {
     const menuBtn = document.querySelector('#menu').click();
  });

  return [heroImg, animatedTextOne, animatedTextTwo, button];
};