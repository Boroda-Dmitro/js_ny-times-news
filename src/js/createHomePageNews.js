import moment from 'moment';
import { fetchPopularNews } from './fetchPopularNews';
import { onCardClick } from './onCardClick';
import { createPopularCardMarkup } from './createPopularCardMarkup';
import { sortFavouriteCards } from './sortFavouriteCards';
import { createLocalStoragePopularCardMarkup } from './markups/createLocalStoragePopularCardMarkup';
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

      const popularData = localStorage.getItem(
        LOCAL_STORAGE_POPULAR_FAVOURITE_KEY
      );

      if (popularData === null) {
        createPopularCardMarkup(
          news,
          publishedDate,
          readMoreId,
          homePageNews,
          'beforeend',
          imgUrl,
          altText
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
            'beforeend',
            imgUrl,
            altText
          );
        } else {
          createLocalStoragePopularCardMarkup(
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

      document.querySelectorAll('.markup-unit__section').forEach(el => {
        if (el.textContent === '') {
          el.style.display = 'none';
        }
      });

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
