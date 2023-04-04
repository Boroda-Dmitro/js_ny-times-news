export const fetchPopularNews = () => {
  return fetch(
    `https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json?api-key=SDNZee2lZmjshzcMGajKH4vNi11jfCZr`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};


