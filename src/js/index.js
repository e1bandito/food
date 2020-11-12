import { components } from '../components/components';
import {} from './import/main';
import fslightbox from 'fslightbox';


window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
