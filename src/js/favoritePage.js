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
test();

function test() {
  document.querySelectorAll('.markup-unit__add-favorite').forEach(el => {
    el.innerHTML = `<p class="markup-unit__favorite-text">Remove from favorite</p>
                    <svg class="markup-unit__favorite-icon markup-unit__favorite-icon--active" width="16" height="16" viewBox="0 0 32 32">
                  <path d="M9.334 4c-3.682 0-6.668 2.954-6.668 6.6 0 2.942 1.168 9.926 12.652 16.986 0.194 0.12 0.43 0.191 0.682 0.191s0.488-0.071 0.688-0.194l-0.006 0.003c11.484-7.060 12.652-14.044 12.652-16.986 0-3.646-2.986-6.6-6.668-6.6-3.68 0-6.666 4-6.666 4s-2.986-4-6.666-4z"></path>
</svg>`;
    el.addEventListener('click', e => {
      const popularData = localStorage.getItem(
        LOCAL_STORAGE_POPULAR_FAVOURITE_KEY
      );
      const inputSearch = localStorage.getItem(
        LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY
      );

      if (popularData) {
        parsedPopularArray = [...JSON.parse(popularData)];

        const index = parsedPopularArray.findIndex(
          element => element.title === el.nextElementSibling.innerHTML
        );

        if (index === -1) {
          return;
        } else {
          parsedPopularArray.splice(index, 1);
          if (parsedPopularArray.length === 0) {
            localStorage.removeItem(LOCAL_STORAGE_POPULAR_FAVOURITE_KEY);
            homePageNews.innerHTML = '';
            picture.classList.remove('visually-hidden');
          } else {
            localStorage.setItem(
              LOCAL_STORAGE_POPULAR_FAVOURITE_KEY,
              JSON.stringify(parsedPopularArray)
            );
            homePageNews.innerHTML = '';
            createFavoritePageMarkup();
            return test();
          }
        }
      } else if (inputSearch) {
        parsedPopularArray = [...JSON.parse(inputSearch)];

        const index = parsedPopularArray.findIndex(
          element => element.headline.main === el.nextElementSibling.innerHTML
        );

        if (index === -1) {
          return;
        } else {
          parsedPopularArray.splice(index, 1);
          if (parsedPopularArray.length === 0) {
            localStorage.removeItem(LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY);
            homePageNews.innerHTML = '';
            picture.classList.remove('visually-hidden');
          } else {
            localStorage.setItem(
              LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY,
              JSON.stringify(parsedPopularArray)
            );
            homePageNews.innerHTML = '';
            createFavoritePageMarkup();
            return test();
          }
        }
      }
    });
  });
}

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
