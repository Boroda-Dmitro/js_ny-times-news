import moment from 'moment';
import { createSeachCardMarkup } from './createSeachCardMarkup';
import { onCardClick } from './onCardClick';
import { LOCAL_STORAGE_INPUT_SEARCH_READ_KEY } from './createHomePageSeachingNews';
import { LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY } from './createHomePageSeachingNews';
import { createLocalStorageWithFavouriteKeySearchCardMarkup } from './markups/createLocalStorageWithFavouriteKeySearchCardMarkup';
import img from '../images/desktop-no-news-601.png';

export function createInputSearchCardMarkupOnReadPage(parsedArray) {
  const cardArrayMarkup = parsedArray.map((element, index) => {
    const publishedDate = moment(element.pub_date).format('YY/MM/YYYY');
    const accordion__label = document.querySelectorAll('.accordion__label');
    const readMoreId = `${index}`;
    let imgUrl = img;
    if (element.multimedia.length > 0) {
      imgUrl = `http://www.nytimes.com/${element.multimedia[0].url}`;
    }
    const review = [...accordion__label].find(
      el => el.textContent === publishedDate
    );

    const searchData = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY)
    );

    if (searchData) {
      const index = searchData.findIndex(
        value => value.headline.main === element.headline.main
      );
      index === -1
        ? createSeachCardMarkup(
            element,
            publishedDate,
            readMoreId,
            imgUrl,
            review.nextElementSibling,
            'afterbegin'
          )
        : createLocalStorageWithFavouriteKeySearchCardMarkup(
            element,
            publishedDate,
            readMoreId,
            imgUrl,
            review.nextElementSibling,
            'afterbegin'
          );
    } else {
      createSeachCardMarkup(
        element,
        publishedDate,
        readMoreId,
        imgUrl,
        review.nextElementSibling,
        'afterbegin'
      );
    }

    onCardClick(
      readMoreId,
      element,
      LOCAL_STORAGE_INPUT_SEARCH_READ_KEY,
      LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY
    );
  });
}
