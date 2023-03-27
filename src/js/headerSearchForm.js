import { createHomePageNews } from './createHomePageNews';
import { fetchSeachNews } from './fetchSeachNews';

const searchBtn = document.querySelector('.search-button');
searchBtn.addEventListener("click", createHomePageNews);
document.getElementById("search").addEventListener("input",fetchSeachNews);




