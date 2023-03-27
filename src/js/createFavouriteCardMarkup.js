export function createFavouriteCardMarkup(
    data,
    id,
    targetElement,
    insertMethod) {
  const markup = `
    <div class="card">
      <img src="${data.image}" alt="${data.title}" class="card__img" />
      <div class="card__info">
        <h2 class="card__title">${data.title}</h2>
        <p class="card__description">${data.description}</p>
        <a href="${data.url}" target="_blank" class="card__link">Read more</a>
      </div>
      <button class="card__remove-btn" data-id="${id}">Remove from favorites</button>
    </div>
  `;
  targetElement.insertAdjacentHTML(insertMethod, markup);
}