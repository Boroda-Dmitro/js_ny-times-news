import moment from 'moment';
import { LOCAL_STORAGE_POPULAR_READ_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_INPUT_SEARCH_READ_KEY } from './createHomePageSeachingNews';

const picture = document.querySelector('.default-picture');
const accordion = document.querySelector('.accordion');

let parsedArray = [];
let datesArray = [];
createReadPageMarkup();

function createReadPageMarkup() {
  const popularData = localStorage.getItem(LOCAL_STORAGE_POPULAR_READ_KEY);
  const inputSearch = localStorage.getItem(LOCAL_STORAGE_INPUT_SEARCH_READ_KEY);

  if (popularData === null && inputSearch === null) {
    return;
  } else if (popularData !== null && inputSearch === null) {
    picture.classList.add('visually-hidden');
    parsedArray = [...JSON.parse(popularData)];
    console.log('popularData !== null && inputSearch === null', parsedArray);

    datesArray = parsedArray.map((element, index) => {
      const publishedDate = moment(element.published_date).format('YY/MM/YYYY');
      console.log(`${index}: ${publishedDate}`);
      return publishedDate;
    });
    console.log(datesArray);

    const uniqueDates = datesArray.filter(
      (date, index, array) => array.indexOf(date) === index
    );
    const markupArray = uniqueDates
      .map(element => {
        return `<div class="accordion__container">
                  <p class="accordion__label">${element}</p>
                  <ul class="accordion__content"></ul>
                </div>`;
      })
      .join('');
    accordion.innerHTML = markupArray;
  } else if (inputSearch !== null && popularData === null) {
    parsedArray = [...JSON.parse(inputSearch)];
    console.log('inputSearch !== null && popularData === null', parsedArray);
  } else if (inputSearch !== null && popularData !== null) {
    parsedArray = [...JSON.parse(popularData), JSON.parse(inputSearch)];
    console.log('inputSearch !== null && popularData !== null', parsedArray);
  }
}
