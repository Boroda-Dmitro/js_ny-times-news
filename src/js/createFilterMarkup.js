import { fetchCategories } from './fetchCategories';
import { createHomePageSeachingNews } from './createHomePageSeachingNews';
var debounce = require('lodash.debounce');

const DESKTOP_WIDTH = 1280;
const TABLET_WIDTH = 768;
const MOBILE_WIDTH = 320;

const refs = {
  filterContainer: document.querySelector('.categories__container'),
  filterDropdown: document.querySelector('.categories__dropdown-header'),
  filterList: document.querySelector('.categories__dropdown-container'),
};

refs.filterDropdown.addEventListener('click', dropdownHandler);
refs.filterList.addEventListener('click', filterSearch, dropdownHandler);
refs.filterContainer.addEventListener('click', filterSearch);
window.addEventListener('resize', debounce(calcFilters, 500));

calcFilters();

function calcFilters() {
  const screenWidth = window.screen.width;
  let filterAmount = 0;
  refs.filterContainer.innerHTML = '';
  refs.filterList.innerHTML = '';

  if (
    screenWidth < MOBILE_WIDTH ||
    (screenWidth >= MOBILE_WIDTH && screenWidth < TABLET_WIDTH)
  ) {
    filterAmount = 0;
    filtersAPICall(filterAmount);
    return;
  } else if (screenWidth >= TABLET_WIDTH && screenWidth < DESKTOP_WIDTH) {
    filterAmount = 4;
    filtersAPICall(filterAmount);
    return;
  } else {
    filterAmount = 6;
    filtersAPICall(filterAmount);
    return;
  }
}

function dropdownHandler() {
  refs.filterList.classList.toggle('categories__dropdown-container-hidden');
}

function filtersAPICall(filtersToShow) {
  try {
    fetchCategories()
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(response => {
        createFilterMarkup(response);
      })
      .catch(error => {
        console.log(error);
      });

    function createFilterMarkup(filters) {
      const array = filters.results;
      for (i = 0; i < filtersToShow; i += 1) {
        const category = array[i].display_name;
        const section = array[i].section;
        const el = ` <li>
                <button class="categories__item" value="${section}">${category}</button>
            </li>`;
        refs.filterContainer.insertAdjacentHTML('beforeend', el);
      }
      createOthersMarkup(filters);
    }

    function createOthersMarkup(filters) {
      const array = filters.results;
      for (i = filtersToShow; i < array.length; i += 1) {
        const category = array[i].display_name;
        const section = array[i].section;
        const el = `<button class="categories__dropdown-item" value="${section}">${category}</button>`;
        refs.filterList.insertAdjacentHTML('beforeend', el);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function filterSearch(e) {
  const target = e.target.value;
  // const item = document.querySelector('.categories__item');

  // item.classList.add('categories__item-selected');
  if (
    !refs.filterList.classList.contains('categories__dropdown-container-hidden')
  ) {
    refs.filterList.classList.add('categories__dropdown-container-hidden');
  }
  try {
    createHomePageSeachingNews(target);
  } catch (error) {
    console.log(error);
  }
}
