import moment from 'moment';
import { fetchSeachNews } from './fetchSeachNews';
import { onCardClick } from './onCardClick';
import { createSeachCardMarkup } from './createSeachCardMarkup';
import { createLocalStorageWithFavouriteKeySearchCardMarkup } from './markups/createLocalStorageWithFavouriteKeySearchCardMarkup';
import { createLocalStorageWithReadKeySearchCardMarkup } from './markups/createLocalStorageWithReadKeySearchCardMarkup';
import { createLocalStorageWithReadAndFavouriteKeySearchCardMarkup } from './markups/createLocalStorageWithReadAndFavouriteKeySearchCardMarkup';
import { sortFavouriteCards } from './sortFavouriteCards';
import { homePageNews } from './createHomePageNews';
import img from '../images/image.png';

export const LOCAL_STORAGE_INPUT_SEARCH_READ_KEY = 'have read';
export const LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY = 'favourite search news';
export const picture = document.querySelector('.default-picture');
const pagination = document.querySelector('.page-container');

export const createHomePageSeachingNews = seach => {
  homePageNews.innerHTML = '';
  fetchSeachNews(seach).then(({ response }) => {
    if (response.docs.length === 0) {
      picture.classList.remove('visually-hidden');
      pagination.classList.add('visually-hidden');

      return;
    }
    const markupArray = response.docs.map((news, index) => {
      const publishedDate = moment(news.pub_date).format('YY/MM/YYYY');
      let imgUrl = img;
      if (news.multimedia.length > 0) {
        imgUrl = `http://www.nytimes.com/${news.multimedia[0].url}`;
      }
      const readMoreId = `${index}`;

      const searchData = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY)
      );
      const searchReadData = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_INPUT_SEARCH_READ_KEY)
      );

      if (searchData === null && searchReadData === null) {
        createSeachCardMarkup(
          news,
          publishedDate,
          readMoreId,
          imgUrl,
          homePageNews,
          'beforeend'
        );
      } else if (searchData !== null && searchReadData === null) {
        const index = searchData.findIndex(
          element => element.headline.main === news.headline.main
        );
        index === -1
          ? createSeachCardMarkup(
              news,
              publishedDate,
              readMoreId,
              imgUrl,
              homePageNews,
              'beforeend'
            )
          : createLocalStorageWithFavouriteKeySearchCardMarkup(
              news,
              publishedDate,
              readMoreId,
              imgUrl,
              homePageNews,
              'beforeend'
            );
      } else if (searchData === null && searchReadData !== null) {
        const index = searchReadData.findIndex(
          element => element.headline.main === news.headline.main
        );
        index === -1
          ? createSeachCardMarkup(
              news,
              publishedDate,
              readMoreId,
              imgUrl,
              homePageNews,
              'beforeend'
            )
          : createLocalStorageWithReadKeySearchCardMarkup(
              news,
              publishedDate,
              readMoreId,
              imgUrl,
              homePageNews,
              'beforeend'
            );
      } else if (searchData !== null && searchReadData !== null) {
        const index = searchData.findIndex(
          element => element.headline.main === news.headline.main
        );
        const index2 = searchReadData.findIndex(
          element => element.headline.main === news.headline.main
        );

        if (index === -1 && index2 === -1) {
          createSeachCardMarkup(
            news,
            publishedDate,
            readMoreId,
            imgUrl,
            homePageNews,
            'beforeend'
          );
        } else if (index !== -1 && index2 === -1) {
          createLocalStorageWithFavouriteKeySearchCardMarkup(
            news,
            publishedDate,
            readMoreId,
            imgUrl,
            homePageNews,
            'beforeend'
          );
        } else if (index === -1 && index2 !== -1) {
          createLocalStorageWithReadKeySearchCardMarkup(
            news,
            publishedDate,
            readMoreId,
            imgUrl,
            homePageNews,
            'beforeend'
          );
        } else if (index !== -1 && index2 !== -1) {
          createLocalStorageWithReadAndFavouriteKeySearchCardMarkup(
            news,
            publishedDate,
            readMoreId,
            imgUrl,
            homePageNews,
            'beforeend'
          );
        }
      }

      onCardClick(
        readMoreId,
        news,
        LOCAL_STORAGE_INPUT_SEARCH_READ_KEY,
        LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY
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
