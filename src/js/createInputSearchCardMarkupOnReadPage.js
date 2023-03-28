import moment from 'moment';
import { createSeachCardMarkup } from './createSeachCardMarkup';
import { onCardClick } from './onCardClick';
import { LOCAL_STORAGE_INPUT_SEARCH_READ_KEY } from './createHomePageSeachingNews';
import { LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY } from './createHomePageSeachingNews';

export function createInputSearchCardMarkupOnReadPage(parsedArray) {
  const cardArrayMarkup = parsedArray.map((element, index) => {
    const publishedDate = moment(element.published_date).format('YY/MM/YYYY');
    const accordion__label = document.querySelectorAll('.accordion__label');
    const readMoreId = `${index}`;
    let imgUrl = './images/desktop-no-news-601.png';
    if (element.multimedia.length > 0) {
      imgUrl = `http://www.nytimes.com/${element.multimedia[0].url}`;
    }
    const review = [...accordion__label].find(
      el => el.textContent === publishedDate
    );

    createSeachCardMarkup(
      element,
      publishedDate,
      readMoreId,
      imgUrl,
      review.nextElementSibling,
      'afterbegin'
    );

    onCardClick(
      readMoreId,
      element,
      LOCAL_STORAGE_INPUT_SEARCH_READ_KEY,
      LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY
    );
  });
}
