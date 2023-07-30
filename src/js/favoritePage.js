import moment from 'moment';
import { createPopularCardMarkup } from './createPopularCardMarkup';
import { onFavouritePageCardClick } from './onFavouritePageCardClick';
import { createSeachCardMarkup } from './createSeachCardMarkup';
import { removeFavouriteCard } from './removeFavouriteCard';
import { LOCAL_STORAGE_POPULAR_FAVOURITE_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_POPULAR_READ_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_INPUT_SEARCH_READ_KEY } from './createHomePageSeachingNews';
import { LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY } from './createHomePageSeachingNews';
import { createLocalStorageWithFavouriteKeyPopularCardMarkup } from './markups/createLocalStorageWithFavouriteKeyPopularCardMarkup';
import { createLocalStorageWithFavouriteKeySearchCardMarkup } from './markups/createLocalStorageWithFavouriteKeySearchCardMarkup';
import { createLocalStorageWithReadAndFavouriteKeyPopularCardMarkup } from './markups/createLocalStorageWithReadAndFavoutiteKeyPopularCardMarkup';
import { createLocalStorageWithReadAndFavouriteKeySearchCardMarkup } from './markups/createLocalStorageWithReadAndFavouriteKeySearchCardMarkup';
import { homePageNews } from './createHomePageNews';
import img from '../images/image.png';

export const picture = document.querySelector('.default-picture');

createFavoritePageMarkup();
removeFavouriteCard();

export function createFavoritePageMarkup() {
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
      let imgUrl = img;
      let altText = 'No text';
      if (news.media.length !== 0) {
        imgUrl = `${news.media[0]['media-metadata'][2].url}`;
        altText = `${news.media[0].caption}`;
      }

      const popularReadData = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_POPULAR_READ_KEY)
      );

      if (popularReadData) {
        const index = popularReadData.findIndex(
          element => element.title === news.title
        );
        index === -1
          ? createLocalStorageWithFavouriteKeyPopularCardMarkup(
              news,
              publishedDate,
              readMoreId,
              homePageNews,
              'beforeend',
              imgUrl,
              altText
            )
          : createLocalStorageWithReadAndFavouriteKeyPopularCardMarkup(
              news,
              publishedDate,
              readMoreId,
              homePageNews,
              'beforeend',
              imgUrl,
              altText
            );
      } else {
        createLocalStorageWithFavouriteKeyPopularCardMarkup(
          news,
          publishedDate,
          readMoreId,
          homePageNews,
          'beforeend',
          imgUrl,
          altText
        );
      }

      onFavouritePageCardClick(
        readMoreId,
        news,
        LOCAL_STORAGE_POPULAR_READ_KEY
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

      const searchReadData = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_INPUT_SEARCH_READ_KEY)
      );

      if (searchReadData) {
        const index = searchReadData.findIndex(
          element => element.headline.main === news.headline.main
        );
        index === -1
          ? createLocalStorageWithFavouriteKeySearchCardMarkup(
              news,
              publishedDate,
              readMoreId,
              imgUrl,
              homePageNews,
              'beforeend'
            )
          : createLocalStorageWithReadAndFavouriteKeySearchCardMarkup(
              news,
              publishedDate,
              readMoreId,
              imgUrl,
              homePageNews,
              'beforeend'
            );
      } else {
        createLocalStorageWithFavouriteKeySearchCardMarkup(
          news,
          publishedDate,
          readMoreId,
          imgUrl,
          homePageNews,
          'beforeend'
        );
      }
      onFavouritePageCardClick(
        readMoreId,
        news,
        LOCAL_STORAGE_INPUT_SEARCH_READ_KEY
      );
      picture.classList.add('visually-hidden');
    });
  }
}

const searchBtn = document.querySelector('.search-button svg');
const input = document.querySelector('.search-input');

searchBtn.addEventListener('click', searchInFavorite);

document.addEventListener('keydown', e => {
  if (e.code !== 'Enter') {
    return;
  }
  searchInFavorite();
  removeFavouriteCard();
});

function searchInFavorite() {
  const popularData = localStorage.getItem(LOCAL_STORAGE_POPULAR_FAVOURITE_KEY);
  const inputSearch = localStorage.getItem(
    LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY
  );
  const searchOnPopularArr = [];
  const searchOnSearchArr = [];

  if (popularData === null && inputSearch === null) {
    picture.classList.remove('visually-hidden');
    return;
  }

  if (popularData) {
    parsedPopularArray = [...JSON.parse(popularData)];
    parsedPopularArray.map(news => {
      if (news.abstract.includes(input.value)) {
        searchOnPopularArr.push(news);
      }
    });
  }

  if (inputSearch) {
    parsedSeachArray = [...JSON.parse(inputSearch)];
    parsedSeachArray.map(news => {
      if (news.abstract.includes(input.value)) {
        searchOnSearchArr.push(news);
      }
    });
  }

  if (searchOnPopularArr.length > 0 || searchOnSearchArr.length > 0) {
    homePageNews.innerHTML = '';
  } else {
    homePageNews.innerHTML = '';
    picture.classList.remove('visually-hidden');
    return;
  }

  if (searchOnSearchArr.length > 0) {
    searchOnSearchArr.map((news, index) => {
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
      onFavouritePageCardClick(
        readMoreId,
        news,
        LOCAL_STORAGE_INPUT_SEARCH_READ_KEY
      );
    });
  }

  if (searchOnPopularArr.length > 0) {
    searchOnPopularArr.map((news, index) => {
      const publishedDate = moment(news.published_date).format('YY/MM/YYYY');
      const readMoreId = `${index}`;
      let imgUrl = img;
      let altText = 'No text';
      if (news.media.length !== 0) {
        imgUrl = `${news.media[0]['media-metadata'][2].url}`;
        altText = `${news.media[0].caption}`;
      }

      createPopularCardMarkup(
        news,
        publishedDate,
        readMoreId,
        homePageNews,
        'beforeend',
        imgUrl,
        altText
      );

      onFavouritePageCardClick(
        readMoreId,
        news,
        LOCAL_STORAGE_POPULAR_READ_KEY
      );

      picture.classList.add('visually-hidden');
    });
  }

  input.value = '';
}
