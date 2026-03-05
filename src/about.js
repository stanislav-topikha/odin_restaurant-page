import JordanBlake from './assets/Jordan Blake.png'
import MiaTorres from './assets/Mia Torres.png'
import EthanCole from './assets/Ethan Cole.png'

export function getAboutContent () {
  const h1 = document.createElement('h1');
  h1.textContent = 'Who we are';

  const p = document.createElement('p');
  p.textContent = `
    We’re Feastria, the fast-food spot that ditched the boring playbook. No frozen patties, no dull vibes, no “Would you like to upsize that?” energy. Just freshly grilled burgers, crispy fries, and a hangout that feels more like a flavor party than a pit stop.
  `;

  const sectionOne = document.createElement('div');
  sectionOne.className = 'section-one';
  sectionOne.append(h1, p);

  const h2 = document.createElement('h2');
  h2.textContent = 'Our team';

  const teamMembers = [[
    'Jordan Blake',
    'Brand Director',
     JordanBlake
  ],[
    'Mia Torres',
    'Brand Director',
    MiaTorres
  ],[
    'Ethan Cole',
    'Operations Lead',
    EthanCole
  ]];

  const team = document.createElement('div');
  team.classList.add = 'team';

  team.append(...teamMembers.map(member => {
    const h3 = document.createElement('h3');
    h3.textContent = member[0];

    const p = document.createElement('p');
    p.textContent = member[1];

    const img = document.createElement('img');
    img.src = member[2];

    const div = document.createElement('div');
    div.append(img, h3, p);

    return div;
  }));

  const sectionTwo = document.createElement('div');
  sectionTwo.className = 'section-two';
  sectionTwo.append(h2, team);

  return [sectionOne, sectionTwo];
}