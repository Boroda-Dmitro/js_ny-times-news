// import { fetchCategories } from './fetchCategories';
// import { createHomePageSeachingNews } from './createHomePageSeachingNews';
// var debounce = require('lodash.debounce');

// const refs = {
//   filterContainer: document.querySelector('.categories__container'),
//   filterDropdown: document.querySelector('.categories__dropdown-header'),
//   filterList: document.querySelector('.categories__dropdown-container'),
// };

// refs.filterDropdown.addEventListener('click', dropdownHandler);
// refs.filterList.addEventListener('click', filterSearch, dropdownHandler);
// refs.filterContainer.addEventListener('click', filterSearch);
// window.addEventListener('resize', debounce(calcFilters, 500));

// calcFilters();

// function calcFilters() {
//   let filterAmount = 0;
//   refs.filterContainer.innerHTML = '';
//   refs.filterList.innerHTML = '';

//   if (window.matchMedia('(max-width: 767px)').matches) {
//     filterAmount = 0;
//     filtersAPICall(filterAmount);
//     return;
//   } else if (
//     window.matchMedia('(min-width: 768px)').matches &&
//     window.matchMedia('(max-width: 1279px)').matches
//   ) {
//     filterAmount = 4;
//     filtersAPICall(filterAmount);
//     return;
//   } else {
//     filterAmount = 6;
//     filtersAPICall(filterAmount);
//     return;
//   }
// }

// function dropdownHandler() {
//   refs.filterList.classList.toggle('categories__dropdown-container-hidden');
// }

// function filtersAPICall(filtersToShow) {
//   try {
//     fetchCategories()
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }
//         return response.json();
//       })
//       .then(response => {
//         createFilterMarkup(response);
//       })
//       .catch(error => {
//         console.log(error);
//       });

//     function createFilterMarkup(filters) {
//       const array = filters.results;
//       for (i = 0; i < filtersToShow; i += 1) {
//         const category = array[i].display_name;
//         const section = array[i].section;
//         const el = ` <li>
//                 <button class="categories__item" value="${section}">${category}</button>
//             </li>`;
//         refs.filterContainer.insertAdjacentHTML('beforeend', el);
//       }
//       createOthersMarkup(filters);
//     }

//     function createOthersMarkup(filters) {
//       const array = filters.results;
//       for (i = filtersToShow; i < array.length; i += 1) {
//         const category = array[i].display_name;
//         const section = array[i].section;
//         const el = `<button class="categories__dropdown-item" value="${section}">${category}</button>`;
//         refs.filterList.insertAdjacentHTML('beforeend', el);
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// function filterSearch(e) {
//   const targetValue = e.target.value;
//   const target = e.target;
//   const filterItem = document.querySelectorAll('.categories__item');

//   filterItem.forEach(item => {
//     item.classList.remove('categories__item-selected');
//   });
//   target.classList.add('categories__item-selected');

//   if (
//     !refs.filterList.classList.contains('categories__dropdown-container-hidden')
//   ) {
//     refs.filterList.classList.add('categories__dropdown-container-hidden');
//   }
//   try {
//     createHomePageSeachingNews(targetValue);
//   } catch (error) {
//     console.log(error);
//   }
// }
