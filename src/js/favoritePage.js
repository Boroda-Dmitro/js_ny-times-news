import moment from 'moment';

import { createPopularCardMarkup } from './createPopularCardMarkup';
import { onCardClick } from './onCardClick';

import { LOCAL_STORAGE_FAVOURITE_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_POPULAR_READ_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_INPUT_SEARCH_READ_KEY } from './createHomePageSeachingNews';
import { LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY } from './createHomePageSeachingNews';

const picture = document.querySelector('.default-picture');
const homePageNews = document.querySelector('.news__box');

let parsedPopularArray = [];
let parsedSeachArray = [];

createFavoritePageMarkup();

function createFavoritePageMarkup() {
  const popularData = localStorage.getItem(LOCAL_STORAGE_FAVOURITE_KEY);
  const inputSearch = localStorage.getItem(
    LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY
  );
  if (popularData === null && inputSearch === null) {
    return;
  }

  picture.classList.add('visually-hidden');

  parsedPopularArray = [...JSON.parse(popularData)];
  parsedPopularArray.map((news, index) => {
    const publishedDate = moment(news.published_date).format('YY/MM/YYYY');
    const readMoreId = `${index}`;
    createPopularCardMarkup(
      news,
      publishedDate,
      readMoreId,
      homePageNews,
      'beforeend'
    );
    onCardClick(
      readMoreId,
      news,
      LOCAL_STORAGE_POPULAR_READ_KEY,
      LOCAL_STORAGE_FAVOURITE_KEY
    );
  });

  parsedSeachArray = [...JSON.parse(inputSearch)];
  parsedSeachArray.map((news, index) => {
    const publishedDate = moment(news.published_date).format('YY/MM/YYYY');
    const readMoreId = `${parsedPopularArray.length + index}`;
    createPopularCardMarkup(
      news,
      publishedDate,
      readMoreId,
      homePageNews,
      'beforeend'
    );
    onCardClick(
      readMoreId,
      news,
      LOCAL_STORAGE_INPUT_SEARCH_READ_KEY,
      LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY
    );
  });
}
