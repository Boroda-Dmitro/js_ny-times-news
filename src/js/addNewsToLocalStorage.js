import { LOCAL_STORAGE_POPULAR_READ_KEY } from './createHomePageNews';
import { LOCAL_STORAGE_INPUT_SEARCH_READ_KEY } from './createHomePageSeachingNews';
export function addNewsToLocalStorage(value, key) {
  const parsedData = JSON.parse(localStorage.getItem(key));
  if (!parsedData) {
    localStorage.setItem(key, JSON.stringify([value]));
  } else {
    const arrayFilter = parsedData.every(
      element => element.abstract !== value.abstract
    );
    if (arrayFilter) {
      parsedData.push(value);
      localStorage.setItem(key, JSON.stringify(parsedData));
    } else {
      if (
        key !== LOCAL_STORAGE_POPULAR_READ_KEY &&
        key !== LOCAL_STORAGE_INPUT_SEARCH_READ_KEY
      ) {
        array = parsedData.filter(
          element => element.abstract !== value.abstract
        );
        array.length === 0
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(array));
      }
    }
  }
}
