import { getHomeContent } from './home';
import { createMenu } from './menu';
import './styles.css';

const loadPage = () => {
  const content = document.querySelector('#content');

  content.append(createMenu());
};

loadPage();