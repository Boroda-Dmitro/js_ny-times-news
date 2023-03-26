import { addNewsToLocalStorage } from './addNewsToLocalStorage';

export function onReadMoreClick(value, news, key) {
  document
    .querySelector(`[data-id = "${value}"]`)
    .addEventListener('click', e => {
      if (e.target.nodeName !== 'A' && e.target.nodeName !== 'BUTTON') {
        return;
      } else if (e.target.nodeName === 'A') {
        // if (key === undefined) {
        //   return;
        // }
        addNewsToLocalStorage(news, key);
      }
      //   else if (e.target.nodeName === 'BUTTON') {
      //     функція favourite;
      //   }
    });
}
