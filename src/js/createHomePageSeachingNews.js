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

        })
      .join('');
      container.innerHTML = markupArray
  });
};
