import moment from 'moment';
import { fetchSeachNews } from './fetchSeachNews';
import { onCardClick } from './onCardClick';
import { createSeachCardMarkup } from './createSeachCardMarkup';
import { createLocalStorageInputSearchCardMarkup } from './markups/createLocalStorageInputSearchCardMarkup';
import { sortFavouriteCards } from './sortFavouriteCards';

export const LOCAL_STORAGE_INPUT_SEARCH_READ_KEY = 'have read';
export const LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY = 'favourite search news';
export const homePageNews = document.querySelector('.news__box');
const picture = document.querySelector('.default-picture');
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
      let imgUrl = './images/desktop-no-news-601.png';
      if (news.multimedia.length > 0) {
        imgUrl = `http://www.nytimes.com/${news.multimedia[0].url}`;
      }
      const readMoreId = `${index}`;

      const inputSearchData = localStorage.getItem(
        LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY
      );

      if (inputSearchData === null) {
        console.log('inputSearchData === null');
        createSeachCardMarkup(
          news,
          publishedDate,
          readMoreId,
          imgUrl,
          homePageNews,
          'beforeend'
        );
      } else {
        const parsedInputSearchArray = [...JSON.parse(inputSearchData)];
        const index = parsedInputSearchArray.findIndex(
          element => element.headline.main === news.headline.main
        );

        if (index === -1) {
          createSeachCardMarkup(
            news,
            publishedDate,
            readMoreId,
            imgUrl,
            homePageNews,
            'beforeend'
          );
        } else {
          createLocalStorageInputSearchCardMarkup(
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
    sortFavouriteCards();
  });
};
