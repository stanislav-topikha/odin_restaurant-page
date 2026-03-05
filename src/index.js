import { getAboutContent } from './about';
import { getHomeContent } from './home';
import { getMenuContent } from './menu';
import './styles.css';

const content = document.querySelector('#content');
const render = (section, ...nodes) => {
  content.replaceChildren(...nodes);
  content.className = section;
};

const loadPage = () => {
  document.querySelector('footer>div').textContent += ` ${(new Date()).getFullYear()}`;
  const homeBtn = document.querySelector('#home');
  const menuBtn = document.querySelector('#menu');
  const aboutBtn = document.querySelector('#about');

  render('home', ...getHomeContent());

  homeBtn.classList.add('active');

  homeBtn.addEventListener('click', () => {
    if (homeBtn.classList.contains('active')) {
      return;
    }

    render('home', ...getHomeContent());
    homeBtn.classList.add('active');
    menuBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
  });

  menuBtn.addEventListener('click', () => {
    if (menuBtn.classList.contains('active')) {
      return;
    }

    render('menu', ...getMenuContent());

    menuBtn.classList.add('active');
    homeBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
  });

  aboutBtn.addEventListener('click', () => {
    if (aboutBtn.classList.contains('active')) {
      return;
    }

    render('about', ...getAboutContent());

    aboutBtn.classList.add('active');
    menuBtn.classList.remove('active');
    homeBtn.classList.remove('active');
  });
};

loadPage();