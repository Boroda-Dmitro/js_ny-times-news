import { fetchSeachNews } from './fetchSeachNews';

const container = document.querySelector('.container');
export const createHomePageSeachingNews = (seach) => {
  fetchSeachNews(seach).then(({ response }) => {
    console.log(response);

    const markupArray = response.docs
      .map(news => {
        const publishedDate = news.pub_date
          .slice(0, 10)
          .split('-')
          .reverse()
          .join('/');
        let imgUrl = '';
        if (news.multimedia.length > 0) {
          imgUrl = news.multimedia[0].url;
        }

        //   console.log(news.multimedia);

        return `<div class="card article">
                    <div class="img__box">
                        <img src="http://www.nytimes.com/${imgUrl}" alt="${news}" />
                        <span class="category">${news.section_name}</span>
                        <button type="button">add to favofite</button>
                        <div class="box">
                        <h3 class="title">${news.headline.main}</h3>
                        <p class="text">${news.abstract}</p>
                        <span class="data">${publishedDate}</span>
                    <a href="${news.web_url}" class="origin">link</a>
                </div>
                </div>
                </div>`;
      })
      .join('');
      container.innerHTML = markupArray
  });
};

