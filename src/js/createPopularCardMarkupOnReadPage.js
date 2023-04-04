import moment from 'moment';
import { createPopularCardMarkup } from './createPopularCardMarkup';
import { onCardClick } from './onCardClick';
import { LOCAL_STORAGE_POPULAR_READ_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_POPULAR_FAVOURITE_KEY } from './createHomePageNews';
import img from '../images/image.png';

export function createPopularCardMarkupOnReadPage(parsedArray) {
  const cardArrayMarkup = parsedArray.map((element, index) => {
    const publishedDate = moment(element.published_date).format('YY/MM/YYYY');
    const accordion__label = document.querySelectorAll('.accordion__label');
    const readMoreId = `${index}`;
    let imgUrl = img;
    let altText = 'No text';
    if (element.media.length !== 0) {
      imgUrl = `${element.media[0]['media-metadata'][2].url}`;
      altText = `${element.media[0].caption}`;
    }

    const review = [...accordion__label].find(
      el => el.textContent === publishedDate
    );

    createPopularCardMarkup(
      element,
      publishedDate,
      readMoreId,
      review.nextElementSibling,
      'afterbegin',
      imgUrl,
      altText
    );

    document.querySelectorAll('.markup-unit__section').forEach(el => {
      if (el.textContent === '') {
        el.style.display = 'none';
      }
    });

    onCardClick(
      readMoreId,
      element,
      LOCAL_STORAGE_POPULAR_READ_KEY,
      LOCAL_STORAGE_POPULAR_FAVOURITE_KEY
    );
  });
}
