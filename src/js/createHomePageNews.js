import moment from 'moment';
import { fetchPopularNews } from './fetchPopularNews';
import { onCardClick } from './onCardClick';
import { createPopularCardMarkup } from './createPopularCardMarkup';
import { sortFavouriteCards } from './sortFavouriteCards';
import { createLocalStorageWithFavouriteKeyPopularCardMarkup } from './markups/createLocalStorageWithFavouriteKeyPopularCardMarkup';
import { createLocalStorageWithReadKeyPopularCardMarkup } from './markups/createLocalStorageWithReadKeyPopularCardMarkup';
import { createLocalStorageWithReadAndFavouriteKeyPopularCardMarkup } from './markups/createLocalStorageWithReadAndFavoutiteKeyPopularCardMarkup';
import img from '../images/image.png';

export const LOCAL_STORAGE_POPULAR_READ_KEY = 'already read';
export const LOCAL_STORAGE_POPULAR_FAVOURITE_KEY = 'favourite news';
export const homePageNews = document.querySelector('.news__box');

export const createHomePageNews = () => {
  fetchPopularNews().then(({ results }) => {
    const markupArray = results.map((news, index) => {
      const publishedDate = moment(news.published_date).format('YY/MM/YYYY');
      const readMoreId = `${index}`;
      let imgUrl = img;
      let altText = 'No text';
      if (news.media.length !== 0) {
        imgUrl = `${news.media[0]['media-metadata'][2].url}`;
        altText = `${news.media[0].caption}`;
      }

      const popularData = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_POPULAR_FAVOURITE_KEY)
      );
      const popularReadData = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_POPULAR_READ_KEY)
      );

      if (popularData === null && popularReadData === null) {
        createPopularCardMarkup(
          news,
          publishedDate,
          readMoreId,
          homePageNews,
          'beforeend',
          imgUrl,
          altText
        );
      } else if (popularData !== null && popularReadData === null) {
        const index = popularData.findIndex(
          element => element.title === news.title
        );
        index === -1
          ? createPopularCardMarkup(
              news,
              publishedDate,
              readMoreId,
              homePageNews,
              'beforeend',
              imgUrl,
              altText
            )
          : createLocalStorageWithFavouriteKeyPopularCardMarkup(
              news,
              publishedDate,
              readMoreId,
              homePageNews,
              'beforeend',
              imgUrl,
              altText
            );
      } else if (popularData === null && popularReadData !== null) {
        const index = popularReadData.findIndex(
          element => element.title === news.title
        );
        index === -1
          ? createPopularCardMarkup(
              news,
              publishedDate,
              readMoreId,
              homePageNews,
              'beforeend',
              imgUrl,
              altText
            )
          : createLocalStorageWithReadKeyPopularCardMarkup(
              news,
              publishedDate,
              readMoreId,
              homePageNews,
              'beforeend',
              imgUrl,
              altText
            );
      } else if (popularData !== null && popularReadData !== null) {
        const index = popularData.findIndex(
          element => element.title === news.title
        );
        const index2 = popularReadData.findIndex(
          element => element.title === news.title
        );

        if (index === -1 && index2 === -1) {
          createPopularCardMarkup(
            news,
            publishedDate,
            readMoreId,
            homePageNews,
            'beforeend',
            imgUrl,
            altText
          );
        } else if (index !== -1 && index2 === -1) {
          createLocalStorageWithFavouriteKeyPopularCardMarkup(
            news,
            publishedDate,
            readMoreId,
            homePageNews,
            'beforeend',
            imgUrl,
            altText
          );
        } else if (index === -1 && index2 !== -1) {
          createLocalStorageWithReadKeyPopularCardMarkup(
            news,
            publishedDate,
            readMoreId,
            homePageNews,
            'beforeend',
            imgUrl,
            altText
          );
        } else if (index !== -1 && index2 !== -1) {
          createLocalStorageWithReadAndFavouriteKeyPopularCardMarkup(
            news,
            publishedDate,
            readMoreId,
            homePageNews,
            'beforeend',
            imgUrl,
            altText
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

    document.querySelectorAll('.markup-unit__section').forEach(el => {
      if (el.textContent === '') {
        el.style.display = 'none';
      }
    });

    sortFavouriteCards();
  });
};
