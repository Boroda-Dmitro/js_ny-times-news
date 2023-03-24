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

      return `<div class="card">
                  <div class="img__box">
                      <img src="${news.media[0]['media-metadata'][2].url}" alt="${news.media[0].caption}" />
                      <span class="category">${news.subsection}</span>
                      <button type="button">add to favofite</button>
                      <div class="box">
                      <h3 class="title">${news.title}</h3>
                      <p class="text">${news.abstract}</p>
                      <span class="data">${publishedDate}</span>
                  <a href="${news.url}" class="origin"></a>
              </div>
              </div>
              </div>`;
    });

    homePageNews.innerHTML = markupArray.join('');
  });
};
