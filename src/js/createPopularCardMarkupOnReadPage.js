import moment from 'moment';
import { createPopularCardMarkup } from './createPopularCardMarkup';
import { onCardClick } from './onCardClick';
import { LOCAL_STORAGE_POPULAR_READ_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_POPULAR_FAVOURITE_KEY } from './createHomePageNews';

export function createPopularCardMarkupOnReadPage(parsedArray) {
  const cardArrayMarkup = parsedArray.map((element, index) => {
    const publishedDate = moment(element.published_date).format('YY/MM/YYYY');
    const accordion__label = document.querySelectorAll('.accordion__label');
    const readMoreId = `${index}`;

    const review = [...accordion__label].find(
      el => el.textContent === publishedDate
    );

    createPopularCardMarkup(
      element,
      publishedDate,
      readMoreId,
      review.nextElementSibling,
      'afterbegin'
    );

    onCardClick(
      readMoreId,
      element,
      LOCAL_STORAGE_POPULAR_READ_KEY,
      LOCAL_STORAGE_POPULAR_FAVOURITE_KEY
    );
  });
}
