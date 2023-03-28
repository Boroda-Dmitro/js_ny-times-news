import moment from 'moment';

import { createPopularCardMarkup } from './createPopularCardMarkup';
import { onCardClick } from './onCardClick';
import { createSeachCardMarkup } from './createSeachCardMarkup';
import { LOCAL_STORAGE_POPULAR_FAVOURITE_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_POPULAR_READ_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_INPUT_SEARCH_READ_KEY } from './createHomePageSeachingNews';
import { LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY } from './createHomePageSeachingNews';

const picture = document.querySelector('.default-picture');
const homePageNews = document.querySelector('.news__box');

let parsedPopularArray = [];
let parsedSeachArray = [];

createFavoritePageMarkup();

function createFavoritePageMarkup() {
  const popularData = localStorage.getItem(LOCAL_STORAGE_POPULAR_FAVOURITE_KEY);
  const inputSearch = localStorage.getItem(
    LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY
  );

  if (popularData === null && inputSearch === null) {
    picture.classList.remove('visually-hidden');
    return;
  }

  if (popularData) {
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
        LOCAL_STORAGE_POPULAR_FAVOURITE_KEY
      );

      picture.classList.add('visually-hidden');
    });
  }
  if (inputSearch) {
    parsedSeachArray = [...JSON.parse(inputSearch)];
    parsedSeachArray.map((news, index) => {
      const publishedDate = moment(news.pub_date).format('YY/MM/YYYY');
      let imgUrl = './images/desktop-no-news-601.png';
      if (news.multimedia.length > 0) {
        imgUrl = `http://www.nytimes.com/${news.multimedia[0].url}`;
      }
      const readMoreId = `${index}`;
      createSeachCardMarkup(
        news,
        publishedDate,
        readMoreId,
        imgUrl,
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
}
