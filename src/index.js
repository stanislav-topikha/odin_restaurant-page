import { getHomeContent } from './home';
import './styles.css';

const loadPage = () => {
  const content = document.querySelector('#content');

  content.append(...getHomeContent());
};

loadPage();