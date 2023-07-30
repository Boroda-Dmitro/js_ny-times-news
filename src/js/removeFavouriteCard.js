import { createFavoritePageMarkup } from './favoritePage';
import { LOCAL_STORAGE_POPULAR_FAVOURITE_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY } from './createHomePageSeachingNews';
import { homePageNews } from './createHomePageNews';
import { picture } from './favoritePage';

export function removeFavouriteCard() {
  document.querySelectorAll('.markup-unit__section').forEach(el => {
    if (el.textContent === '') {
      el.style.display = 'none';
    }
  });

  document.querySelectorAll('.markup-unit__add-favorite').forEach(el => {
    el.addEventListener('click', e => {
      let popularData = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_POPULAR_FAVOURITE_KEY)
      );
      let inputSearch = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY)
      );
      if (popularData && !inputSearch) {
        const filter = popularData.filter(
          element => element.title !== el.nextElementSibling.innerHTML
        );

        if (filter.length === 0) {
          localStorage.removeItem(LOCAL_STORAGE_POPULAR_FAVOURITE_KEY);
          homePageNews.innerHTML = '';
          picture.classList.remove('visually-hidden');
        } else {
          localStorage.setItem(
            LOCAL_STORAGE_POPULAR_FAVOURITE_KEY,
            JSON.stringify(filter)
          );
          homePageNews.innerHTML = '';
          createFavoritePageMarkup();
          return removeFavouriteCard();
        }
      } else if (inputSearch && !popularData) {
        const filter = inputSearch.filter(
          element => element.headline.main !== el.nextElementSibling.innerHTML
        );

        if (filter.length === 0) {
          localStorage.removeItem(LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY);
          homePageNews.innerHTML = '';
          picture.classList.remove('visually-hidden');
        } else {
          localStorage.setItem(
            LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY,
            JSON.stringify(filter)
          );
          homePageNews.innerHTML = '';
          createFavoritePageMarkup();
          return removeFavouriteCard();
        }
      } else if (popularData && inputSearch) {
        const index = popularData.findIndex(
          element => element.title === el.nextElementSibling.innerHTML
        );

        if (index === -1) {
          const filter = inputSearch.filter(
            element => element.headline.main !== el.nextElementSibling.innerHTML
          );
          if (inputSearch.length === 0) {
            localStorage.removeItem(LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY);
            homePageNews.innerHTML = '';
            picture.classList.remove('visually-hidden');
            createFavoritePageMarkup();
            return removeFavouriteCard();
          } else {
            localStorage.setItem(
              LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY,
              JSON.stringify(filter)
            );
            homePageNews.innerHTML = '';
            createFavoritePageMarkup();
            return removeFavouriteCard();
          }
        } else {
          popularData.splice(index, 1);
          if (popularData.length === 0) {
            localStorage.removeItem(LOCAL_STORAGE_POPULAR_FAVOURITE_KEY);
            homePageNews.innerHTML = '';
            picture.classList.remove('visually-hidden');
            createFavoritePageMarkup();
            return removeFavouriteCard();
          } else {
            localStorage.setItem(
              LOCAL_STORAGE_POPULAR_FAVOURITE_KEY,
              JSON.stringify(popularData)
            );
            homePageNews.innerHTML = '';
            createFavoritePageMarkup();
            return removeFavouriteCard();
          }
        }
      }
    });
  });
}
