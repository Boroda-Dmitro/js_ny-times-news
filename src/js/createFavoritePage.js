import { onBtnClicks } from './changeAddToFavoriteBtn';
import { addNewsToLocalStorage } from './addNewsToLocalStorage';
import { LOCAL_STORAGE_FAVOURITE_KEY } from './createHomePageNews';
import { createFavouriteCardMarkup } from './createFavouriteCardMarkup';


const createFavoritePage = () => {
  const favoriteNews = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVOURITE_KEY));

  const favoritePage = document.createElement('div');
  favoritePage.classList.add('favorite-page');

  const gallery = document.createElement('div');
  gallery.classList.add('gallery');

  favoritePage.appendChild(gallery);
  document.body.appendChild(favoritePage);
    
  favoriteNews.forEach((news) => {
    const cardMarkup = createFavoriteCardMarkup(news);
    gallery.appendChild(cardMarkup);
  });
};

createFavouriteCardMarkup();