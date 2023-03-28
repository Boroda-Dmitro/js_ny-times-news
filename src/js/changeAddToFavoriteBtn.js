const btn = document.querySelector('.markup-unit__add-favorite');

export const onBtnClick = e => {
  console.log(e);
  if (e.target.textContent.includes('Add to favorite')) {
    btn.innerHTML = `<p class="markup-unit__favorite-text">Remove from favorite</p>
          <svg class="markup-unit__favorite-icon markup-unit__favorite-icon--active" width="16" height="16" viewBox="0 0 32 32">
          <path style="stroke:var(--color-brand, #4440f6)" d="M9.334 4c-3.682 0-6.668 2.954-6.668 6.6 0 2.942 1.168 9.926 12.652 16.986 0.194 0.12 0.43 0.191 0.682 0.191s0.488-0.071 0.688-0.194l-0.006 0.003c11.484-7.060 12.652-14.044 12.652-16.986 0-3.646-2.986-6.6-6.668-6.6-3.68 0-6.666 4-6.666 4s-2.986-4-6.666-4z"></path>
          </svg>`;
  } else {
    btn.innerHTML = `<p class="markup-unit__favorite-text">Add to favorite</p>
          <svg class="markup-unit__favorite-icon markup-unit__favorite-icon--active" width="16" height="16" viewBox="0 0 32 32">
          <path fill="none" stroke="#4440f7" style="stroke: var(--color2, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2" d="M9.334 4c-3.682 0-6.668 2.954-6.668 6.6 0 2.942 1.168 9.926 12.652 16.986 0.194 0.12 0.43 0.191 0.682 0.191s0.488-0.071 0.688-0.194l-0.006 0.003c11.484-7.060 12.652-14.044 12.652-16.986 0-3.646-2.986-6.6-6.668-6.6-3.68 0-6.666 4-6.666 4s-2.986-4-6.666-4z"></path>
          </svg>`;
  }
};

// if (
//   e.target.nodeName === 'BUTTON' ||
//   e.target.textContent.includes('Add to favorite') ||
//   e.target.nodeName === 'svg'
// ) {
//   e.target.innerHTML = `<p class="markup-unit__favorite-text">Remove from favorite</p>
//         //   <svg class="markup-unit__favorite-icon markup-unit__favorite-icon--active" width="16" height="16" viewBox="0 0 32 32">
//         //   <path style="stroke:var(--color-brand, #4440f6)" d="M9.334 4c-3.682 0-6.668 2.954-6.668 6.6 0 2.942 1.168 9.926 12.652 16.986 0.194 0.12 0.43 0.191 0.682 0.191s0.488-0.071 0.688-0.194l-0.006 0.003c11.484-7.060 12.652-14.044 12.652-16.986 0-3.646-2.986-6.6-6.668-6.6-3.68 0-6.666 4-6.666 4s-2.986-4-6.666-4z"></path>
//         //   </svg>`;
// } else {
//   e.target.innerHTML = `<p class="markup-unit__favorite-text">Add to favorite</p>
//         //   <svg class="markup-unit__favorite-icon markup-unit__favorite-icon--active" width="16" height="16" viewBox="0 0 32 32">
//         //   <path fill="none" stroke="#4440f7" style="stroke: var(--color2, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2" d="M9.334 4c-3.682 0-6.668 2.954-6.668 6.6 0 2.942 1.168 9.926 12.652 16.986 0.194 0.12 0.43 0.191 0.682 0.191s0.488-0.071 0.688-0.194l-0.006 0.003c11.484-7.060 12.652-14.044 12.652-16.986 0-3.646-2.986-6.6-6.668-6.6-3.68 0-6.666 4-6.666 4s-2.986-4-6.666-4z"></path>
//         //   </svg>`;
// }
