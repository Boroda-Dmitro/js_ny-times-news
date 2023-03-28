import { fetchCategories } from './fetchCategories';

const TABLET_WIDTH = 768;
const MOBILE_WIDTH = 320;

const refs = {
  filterContainer: document.querySelector('.categories__container'),
  filterDropdown: document.querySelector('.categories__dropdown-header'),
  filterList: document.querySelector('.categories__dropdown-container'),
};

refs.filterDropdown.addEventListener('click', dropdownHandler);
refs.filterList.addEventListener('click', dropdownHandler);

function calcFilters() {
  const screenWidth = window.screen.width;

  if (screenWidth > TABLET_WIDTH) {
    return 6;
  } else if (screenWidth <= TABLET_WIDTH && screenWidth > MOBILE_WIDTH) {
    return 4;
  } else {
    return 0;
  }
}

function dropdownHandler() {
  refs.filterList.classList.toggle('categories__dropdown-container-hidden');
  console.log('open');
}

fetchCategories()
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(response => {
    createFilterMarkup(response);
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

function createFilterMarkup(filters) {
  const array = filters.results;
  for (i = 0; i < calcFilters(); i += 1) {
    const category = array[i].display_name;
    const el = ` <li>
            <button class="categories__item">${category}</button>
        </li>`;
    refs.filterContainer.insertAdjacentHTML('beforeend', el);
  }
  createOthersMarkup(filters);
}

function createOthersMarkup(filters) {
  const array = filters.results;
  for (i = calcFilters(); i < array.length; i += 1) {
    const category = array[i].display_name;
    const el = `<li class="categories__dropdown-item">${category}</li>`;
    refs.filterList.insertAdjacentHTML('beforeend', el);
  }
}
