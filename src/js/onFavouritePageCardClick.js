import { addNewsToLocalStorage } from './addNewsToLocalStorage';

export function onFavouritePageCardClick(value, news, key) {
  document
    .querySelector(`[data-id = "${value}"]`)
    .addEventListener('click', e => {
      if (e.target.nodeName === 'A') {
        addNewsToLocalStorage(news, key);
      }
    });
}
