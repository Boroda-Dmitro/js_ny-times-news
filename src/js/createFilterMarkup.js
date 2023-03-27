import { fetchCategories } from './fetchCategories';

let filtersToShow = 6;

function calcFilters() {
  const TABLET_WIDTH = 768;
  const MOBILE_WIDTH = 320;
  const screenWidth = window.screen.width;

  if (screenWidth > TABLET_WIDTH) {
    return (filtersToShow = 6);
  } else if (screenWidth <= TABLET_WIDTH && screenWidth > MOBILE_WIDTH) {
    return (filtersToShow = 4);
  } else if (screenWidth <= MOBILE_WIDTH) {
    return (filtersToShow = 0);
  }
}

const refs = {
  filterContainer: document.querySelector('.categories__container'),
  filterDropdown: document.querySelector('[name="filterDropdown"]'),
};

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
  for (i = 0; i < filtersToShow; i += 1) {
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
  for (i = filtersToShow; i < array.length; i += 1) {
    const category = array[i].display_name;
    const el = `<option value="all" class="categories__item-dropdown-item">${category}</option>`;
    refs.filterDropdown.insertAdjacentHTML('beforeend', el);
  }
}
