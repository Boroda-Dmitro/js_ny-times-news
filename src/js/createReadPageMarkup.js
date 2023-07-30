import moment from 'moment';
import { createReadPageListMarkup } from './createReadPageListMarkup';
import { createPopularCardMarkupOnReadPage } from './createPopularCardMarkupOnReadPage';
import { createInputSearchCardMarkupOnReadPage } from './createInputSearchCardMarkupOnReadPage';
import { createMagic } from './createMagic';
import { LOCAL_STORAGE_POPULAR_READ_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_INPUT_SEARCH_READ_KEY } from './createHomePageSeachingNews';
import { sortFavouriteCards } from './sortFavouriteCards';

const picture = document.querySelector('.default-picture');
const accordion = document.querySelector('.accordion');

let parsedArray = [];
let datesArray = [];

createReadPageMarkup();
createMagic('accordion__label');

document.querySelectorAll('.markup-unit__already-read').forEach(el => {
  el.classList.remove('visually-hidden');
});

function createReadPageMarkup() {
  const popularData = localStorage.getItem(LOCAL_STORAGE_POPULAR_READ_KEY);
  const inputSearchData = localStorage.getItem(
    LOCAL_STORAGE_INPUT_SEARCH_READ_KEY
  );

  if (popularData === null && inputSearchData === null) {
    picture.classList.remove('visually-hidden');
    return;
  } else if (popularData !== null && inputSearchData === null) {
    parsedArray = [...JSON.parse(popularData)];

    datesArray = parsedArray.map(element =>
      moment(element.published_date).format('YY/MM/YYYY')
    );

    createReadPageListMarkup(datesArray, accordion);
    createPopularCardMarkupOnReadPage(parsedArray);
    sortFavouriteCards();
    document.querySelectorAll('.markup-unit__section').forEach(el => {
      if (el.textContent === '') {
        el.style.display = 'none';
      }
    });
  } else if (inputSearchData !== null && popularData === null) {
    parsedArray = [...JSON.parse(inputSearchData)];

    datesArray = parsedArray.map(element =>
      moment(element.pub_date).format('YY/MM/YYYY')
    );

    createReadPageListMarkup(datesArray, accordion);
    createInputSearchCardMarkupOnReadPage(parsedArray);
    sortFavouriteCards();
    document.querySelectorAll('.markup-unit__section').forEach(el => {
      if (el.textContent === '') {
        el.style.display = 'none';
      }
    });
  } else if (inputSearchData !== null && popularData !== null) {
    parsedArray = [...JSON.parse(popularData), ...JSON.parse(inputSearchData)];
    let popularCardsArray = [];
    let inputSearchCardsArray = [];

    datesArray = parsedArray.map(element => {
      if (element.pub_date) {
        inputSearchCardsArray.push(element);
        return moment(element.pub_date).format('YY/MM/YYYY');
      } else if (element.published_date) {
        popularCardsArray.push(element);
        return moment(element.published_date).format('YY/MM/YYYY');
      }
    });

    createReadPageListMarkup(datesArray, accordion);
    createInputSearchCardMarkupOnReadPage(inputSearchCardsArray);
    createPopularCardMarkupOnReadPage(popularCardsArray);
    sortFavouriteCards();
    document.querySelectorAll('.markup-unit__section').forEach(el => {
      if (el.textContent === '') {
        el.style.display = 'none';
      }
    });
  }
}
