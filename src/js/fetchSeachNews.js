export const fetchSeachNews = (name, seachDate) => {

  const date = new Date();
  const todayDate = `${date.getFullYear()}${String(
    date.getMonth() + 1
  ).padStart(2, '0')}${date.getDate()}`;

  if (seachDate) {
    return fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=${name}&api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV&page=0&begin_date=20221125&end_date=${todayDate}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
  return fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${name}&api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV&facet_fields=section_name&facet_filter=true&begin_date=20150101`
    ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};


// `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${name}&api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV&facet_fields=section_name&facet_filter=true&begin_date=20150101`


// `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=${name}&api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV`
