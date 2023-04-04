export function addNewsToLocalStorage(value, key) {
  const keyEl = localStorage.getItem(key);
  if (keyEl === null) {
    const firstElement = [value];
    localStorage.setItem(key, JSON.stringify(firstElement));
  } else {
    let parsedData = JSON.parse(keyEl);
    const findSimilarElement = parsedData.every(
      element => element.abstract !== value.abstract
    );

    if (findSimilarElement) {
      parsedData.push(value);
      localStorage.setItem(key, JSON.stringify(parsedData));
    } else {
      parsedData = parsedData.filter(
        element => element.abstract !== value.abstract
      );
      localStorage.setItem(key, JSON.stringify(parsedData));
    }
  }
}
