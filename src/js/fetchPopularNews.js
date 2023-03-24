export const fetchPopularNews = () => {
  return fetch(
    `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};


