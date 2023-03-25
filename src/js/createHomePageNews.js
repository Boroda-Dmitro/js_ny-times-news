import { fetchPopularNews } from './fetchPopularNews';

const homePageNews = document.querySelector('.news__box')

export const createHomePageNews = () => {
  fetchPopularNews().then(({ results }) => {
    const markupArray = results.map(news => {
      const publishedDate = news.published_date
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('/');

     return `<li class="markup-unit markup-unit__read" name="card">
      <p class="markup-unit__section">${news.subsection}</p>
      <p class="markup-unit__already-read">Already read
      <svg class="markup-unit__icon-check" width="18" height="18" viewBox="0 0 37 32">
      <path stroke="#00DD73" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="4" stroke-width="2.2857" d="M28.779 6.389c-0.288 0.009-0.546 0.131-0.732 0.323l-16.313 16.313-6.713-6.713c-0.195-0.209-0.473-0.339-0.78-0.339-0.589 0-1.067 0.478-1.067 1.067 0 0.308 0.13 0.585 0.339 0.78l0.001 0.001 7.467 7.467c0.193 0.193 0.459 0.312 0.754 0.312s0.561-0.119 0.754-0.312v0l17.067-17.067c0.199-0.194 0.323-0.465 0.323-0.765 0-0.589-0.478-1.067-1.067-1.067-0.011 0-0.022 0-0.033 0l0.002-0z"></path>
      </svg>
      </p>
      <img class="markup-unit__card-image" src="${news.media[0]['media-metadata'][2].url}" alt="${news.media[0].caption}" />
      <button class="markup-unit__add-favorite" type="button" data-info>
      <p class="markup-unit__favorite-text">Add to favorite</p>
      <svg class="markup-unit__favorite-icon markup-unit__favorite-icon--active" width="16" height="16" viewBox="0 0 32 32">
      <path style="stroke:var(--color-brand, #4440f6)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2" d="M9.334 4c-3.682 0-6.668 2.954-6.668 6.6 0 2.942 1.168 9.926 12.652 16.986 0.194 0.12 0.43 0.191 0.682 0.191s0.488-0.071 0.688-0.194l-0.006 0.003c11.484-7.060 12.652-14.044 12.652-16.986 0-3.646-2.986-6.6-6.668-6.6-3.68 0-6.666 4-6.666 4s-2.986-4-6.666-4z"></path>
      </svg>
      </button>
       <h2 class="markup-unit__card-header" name="card_header"">${news.title}</h2>
      <p class="markup-unit__card-text" name="card_text">${news.abstract}</p>
      <div class="markup-unit__card-info">
       <p class="markup-unit__card-date">${publishedDate}</p>
      <a class="markup-unit__read-more" href="${news.url}name="read_more">Read more</a>
      </div>
      </li>`;
    });

    homePageNews.innerHTML = markupArray.join('');
  });
};
