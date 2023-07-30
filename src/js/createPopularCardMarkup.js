export function createPopularCardMarkup(
  data,
  publishedDate,
  id,
  targetElement,
  insertMethod,
  imgUrl,
  altText
) {
  const markup = `<li class="markup-unit markup-unit__read article" name="card" data-id = ${id}>
                  <div class = "markup-unit__overlay visually-hidden" ></div>
                  <p class="markup-unit__section">${data.subsection}</p>   
                <img class="markup-unit__card-image" src="${imgUrl}" alt="${altText}" />
                <button class="markup-unit__add-favorite" type="button" data-info>
                  <p class="markup-unit__favorite-text">Add to favorite</p>
                    <svg class="markup-unit__favorite-icon markup-unit__favorite-icon--active" width="16" height="16" viewBox="0 0 32 32">
                  <path fill="none" stroke="#4440f7" style="stroke: var(--color2, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2" d="M9.334 4c-3.682 0-6.668 2.954-6.668 6.6 0 2.942 1.168 9.926 12.652 16.986 0.194 0.12 0.43 0.191 0.682 0.191s0.488-0.071 0.688-0.194l-0.006 0.003c11.484-7.060 12.652-14.044 12.652-16.986 0-3.646-2.986-6.6-6.668-6.6-3.68 0-6.666 4-6.666 4s-2.986-4-6.666-4z"></path>
                  </svg>
                </button>
                <h2 class="markup-unit__card-header" name="card_header"">${data.title}</h2>
                <p class="markup-unit__card-text" name="card_text">${data.abstract}</p>
                <div class="markup-unit__card-info">
                  <p class="markup-unit__card-date">${publishedDate}</p>
                  <a class="markup-unit__read-more" href="${data.url}" name="read_more"  target = "_blank">Read more</a>
                </div>

                
              </li>`;

  targetElement.insertAdjacentHTML(insertMethod, markup);
}
