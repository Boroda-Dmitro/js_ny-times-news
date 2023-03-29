export { fetchCategories };

async function fetchCategories() {
  try {
    const API_KEY = 'eQ8t8FWqeAGnKDTtIFrHmgZCflFrUTcV';
    const apiUrl = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`;

    return await fetch(apiUrl);
  } catch (error) {
    console.log(error);
  }
}
