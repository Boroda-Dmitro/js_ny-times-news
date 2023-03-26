import moment from 'moment';
import { fetchSeachNews } from './fetchSeachNews';
import { onCardClick } from './onCardClick';
import { createOnSeachCardMarkup } from './createOnSeachCardMarkup';

export const LOCAL_STORAGE_POPULAR_READ_KEY = 'already read';
export const LOCAL_STORAGE_FAVOURITE_KEY = 'favourite news';
export const homePageNews = document.querySelector('.news__box');

export const createHomePageSeachingNews = seach => {
  homePageNews.innerHTML = '';
  fetchSeachNews(seach).then(({ response }) => {
    const markupArray = response.docs.map((news, index) => {
      const publishedDate = moment(news.pub_date).format('YY/MM/YYYY');
      let imgUrl = './images/desktop-no-news-601.png';
      if (news.multimedia.length > 0) {
        imgUrl = `http://www.nytimes.com/${news.multimedia[0].url}`;
      }
      const readMoreId = `${index}`;
      createOnSeachCardMarkup(news, publishedDate, readMoreId, imgUrl);
      onCardClick(
        readMoreId,
        news,
        LOCAL_STORAGE_POPULAR_READ_KEY,
        LOCAL_STORAGE_FAVOURITE_KEY
      );
    });
  });
};
