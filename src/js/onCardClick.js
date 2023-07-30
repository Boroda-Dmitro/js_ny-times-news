import { addNewsToLocalStorage } from './addNewsToLocalStorage';

export function onCardClick(value, news, key, key2) {
  document
    .querySelector(`[data-id = "${value}"]`)
    .addEventListener('click', e => {
      if (
        e.target.nodeName !== 'A' &&
        e.target.nodeName !== 'BUTTON' &&
        e.target.innerHTML !== 'Add to favorite' &&
        e.target.innerHTML !== 'Remove from favorite' &&
        e.target.classList.value !==
          'markup-unit__favorite-icon markup-unit__favorite-icon--active'
      ) {
        return;
      } else if (e.target.nodeName === 'A') {
        const cardOverlay = e.currentTarget.firstElementChild;
        cardOverlay.classList.remove('visually-hidden');
        cardOverlay.innerHTML = `<p class="markup-unit__already-read">Already read
                  <svg class="markup-unit__icon-check" width="18" height="18" viewBox="0 0 37 32">
                    <path stroke="#00DD73" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="4" stroke-width="2.2857" d="M28.779 6.389c-0.288 0.009-0.546 0.131-0.732 0.323l-16.313 16.313-6.713-6.713c-0.195-0.209-0.473-0.339-0.78-0.339-0.589 0-1.067 0.478-1.067 1.067 0 0.308 0.13 0.585 0.339 0.78l0.001 0.001 7.467 7.467c0.193 0.193 0.459 0.312 0.754 0.312s0.561-0.119 0.754-0.312v0l17.067-17.067c0.199-0.194 0.323-0.465 0.323-0.765 0-0.589-0.478-1.067-1.067-1.067-0.011 0-0.022 0-0.033 0l0.002-0z"></path>
                  </svg>
                </p>`;
        addNewsToLocalStorage(news, key);
      } else if (
        e.target.nodeName === 'BUTTON' ||
        e.target.innerHTML === 'Add to favorite' ||
        e.target.innerHTML === 'Remove from favorite' ||
        e.target.classList.value ===
          'markup-unit__favorite-icon markup-unit__favorite-icon--active'
      ) {
        addNewsToLocalStorage(news, key2);
      }
    });
}
