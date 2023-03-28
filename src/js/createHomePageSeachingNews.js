import moment from 'moment';
import { fetchSeachNews } from './fetchSeachNews';
import { onCardClick } from './onCardClick';
import { createSeachCardMarkup } from './createSeachCardMarkup';
import { noNewsFromSearch } from './noNewsFromSearch';

export const LOCAL_STORAGE_INPUT_SEARCH_READ_KEY = 'have read';
export const LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY = 'favourite search news';
export const homePageNews = document.querySelector('.news__box');

export const createHomePageSeachingNews = seach => {
  homePageNews.innerHTML = '';
  fetchSeachNews(seach).then(({ response }) => {
    if (response.docs.length === 0) {
      noNewsFromSearch(homePageNews);
      return;
    }
    const markupArray = response.docs.map((news, index) => {
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
  });
};
