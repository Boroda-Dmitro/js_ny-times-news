import { createHomePageNews } from './js/createHomePageNews';
import { createHomePageSeachingNews } from './js/createHomePageSeachingNews';
import { Calendar } from './js/calendar';

createHomePageNews();

const searchBtn = document.querySelector('.search-button svg');

searchBtn.addEventListener('click', () => {
  createHomePageSeachingNews('batman');
});

const input = document.querySelector('.search-input');

console.log(input);

input.addEventListener('input', e => {
  console.log(e);
});
