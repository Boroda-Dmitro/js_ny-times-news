import { fetchCategories } from './fetchCategories';

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
  })
  .catch(error => {
    console.log(error);
  });

function createFilterMarkup(filters) {
  const array = filters.results;
  for (i = 0; i < 6; i += 1) {
    const category = array[i].display_name;
    const el = ` <li>
            <button class="categories__item">${category}</button>
        </li>`;
    refs.filterContainer.insertAdjacentHTML('beforeend', el);
  }
}
