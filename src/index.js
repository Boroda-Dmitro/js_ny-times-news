import { createHomePageNews } from './js/createHomePageNews';
import { createHomePageSeachingNews } from './js/createHomePageSeachingNews';
import { createFilterMarkup } from './js/createFilterMarkup';
import { createHomePageSeachingNews } from './js/createHomePageSeachingNews';
import { Calendar, searchDate } from './js/calendar';
import { WeatherApiService } from './js/weather-widget';

createHomePageNews();

const searchBtn = document.querySelector('.search-button svg');
const input = document.querySelector('.search-input');

searchBtn.addEventListener('click', () => {
  createHomePageSeachingNews(input.value);
  input.value = '';
});

document.addEventListener('keydown', e => {
  if (e.code !== 'Enter') {
    return;
  }
  createHomePageSeachingNews(input.value);
  input.value = '';
});


console.log(searchDate);
