import moment from 'moment';
import { createReadPageListMarkup } from './createReadPageListMarkup';
import { createPopularCardMarkupOnReadPage } from './createPopularCardMarkupOnReadPage';
import { createMagic } from './createMagic';
import { LOCAL_STORAGE_POPULAR_READ_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_INPUT_SEARCH_READ_KEY } from './createHomePageSeachingNews';

const picture = document.querySelector('.default-picture');
const accordion = document.querySelector('.accordion');

let parsedArray = [];
let datesArray = [];

createReadPageMarkup();
createMagic('accordion__label');

document.querySelectorAll('.markup-unit__already-read').forEach(el => {
  el.classList.remove('visually-hidden');
  // el.style.fontWeight = 400;
});

function createReadPageMarkup() {
  const popularData = localStorage.getItem(LOCAL_STORAGE_POPULAR_READ_KEY);
  const inputSearch = localStorage.getItem(LOCAL_STORAGE_INPUT_SEARCH_READ_KEY);

  if (popularData === null && inputSearch === null) {
    return;
  } else if (popularData !== null && inputSearch === null) {
    picture.classList.add('visually-hidden');
    parsedArray = [...JSON.parse(popularData)];

    console.log('popularData !== null && inputSearch === null', parsedArray);

    datesArray = parsedArray.map(element => {
      const publishedDate = moment(element.published_date).format('YY/MM/YYYY');

      return publishedDate;
    });

    createReadPageListMarkup(datesArray, accordion);
    createPopularCardMarkupOnReadPage(parsedArray);
  } else if (inputSearch !== null && popularData === null) {
    picture.classList.add('visually-hidden');
    parsedArray = [...JSON.parse(inputSearch)];

    // console.log('inputSearch !== null && popularData === null', parsedArray);

    // datesArray = parsedArray.map((element, index) => {
    //   const publishedDate = moment(element.pub_date).format('YY/MM/YYYY');

    //   return publishedDate;
    // });

    // createReadPageListMarkup(datesArray, accordion);
    // createInputSearchCardMarkupOnReadPage(parsedArray);
  } else if (inputSearch !== null && popularData !== null) {
    parsedArray = [...JSON.parse(popularData), JSON.parse(inputSearch)];
    console.log('inputSearch !== null && popularData !== null', parsedArray);
  }
}
