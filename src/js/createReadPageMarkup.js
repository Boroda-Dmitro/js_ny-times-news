import { LOCAL_STORAGE_POPULAR_READ_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_INPUT_SEARCH_READ_KEY } from './createHomePageSeachingNews';

const picture = document.querySelector('.default-picture');
const accordion = document.querySelector('.accordion');

let datesArray = [];

function createReadPageMarkup() {
  const popularData = localStorage.getItem(LOCAL_STORAGE_POPULAR_READ_KEY);

  if (popularData !== null) {
    datesArray = [...JSON.parse(popularData)];
    console.log(datesArray);
  }
}
