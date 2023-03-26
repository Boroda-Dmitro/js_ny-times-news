import { addNewsToLocalStorage } from './addNewsToLocalStorage';

export function onCardClick(value, news, key, key2) {
  document
    .querySelector(`[data-id = "${value}"]`)
    .addEventListener('click', e => {
      console.log(e.target.innerHTML !== 'Add to favorite');
      if (
        e.target.nodeName !== 'A' &&
        e.target.nodeName !== 'BUTTON' &&
        e.target.innerHTML !== 'Add to favorite' &&
        e.target.classList.value !==
          'markup-unit__favorite-icon markup-unit__favorite-icon--active'
      ) {
        return;
      } else if (e.target.nodeName === 'A') {
        // if (key === undefined) {
        //   return;
        // }
        addNewsToLocalStorage(value, key);
      } else if (
        e.target.nodeName === 'BUTTON' ||
        e.target.innerHTML === 'Add to favorite' ||
        e.target.classList.value ===
          'markup-unit__favorite-icon markup-unit__favorite-icon--active'
      ) {
        addNewsToLocalStorage(value, key2);
      }
    });
}
