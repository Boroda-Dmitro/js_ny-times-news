import moment from 'moment';
import { fetchPopularNews } from './fetchPopularNews';
import { onCardClick } from './onCardClick';
import { createPopularCardMarkup } from './createPopularCardMarkup';
import { sortFavouriteCards } from './sortFavouriteCards';
import { createLocalStoragePopularCardMarkup } from './markups/createLocalStoragePopularCardMarkup';

export const LOCAL_STORAGE_POPULAR_READ_KEY = 'already read';
export const LOCAL_STORAGE_POPULAR_FAVOURITE_KEY = 'favourite news';
export const homePageNews = document.querySelector('.news__box');

export const createHomePageNews = () => {
  fetchPopularNews().then(({ results }) => {
    const markupArray = results.map((news, index) => {
      const publishedDate = moment(news.published_date).format('YY/MM/YYYY');
      const readMoreId = `${index}`;

      const popularData = localStorage.getItem(
        LOCAL_STORAGE_POPULAR_FAVOURITE_KEY
      );

      if (popularData === null) {
        createPopularCardMarkup(
          news,
          publishedDate,
          readMoreId,
          homePageNews,
          'beforeend'
        );
      } else {
        const parsedPopularArray = [...JSON.parse(popularData)];
        const index = parsedPopularArray.findIndex(
          element => element.title === news.title
        );

        if (index === -1) {
          createPopularCardMarkup(
            news,
            publishedDate,
            readMoreId,
            homePageNews,
            'beforeend'
          );
        } else {
          createLocalStoragePopularCardMarkup(
            news,
            publishedDate,
            readMoreId,
            homePageNews,
            'beforeend'
          );
        }
      }

      onCardClick(
        readMoreId,
        news,
        LOCAL_STORAGE_POPULAR_READ_KEY,
        LOCAL_STORAGE_POPULAR_FAVOURITE_KEY
      );
    });
    sortFavouriteCards();
  });
};
