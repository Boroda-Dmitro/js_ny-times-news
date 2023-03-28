import { createHomePageNews } from './js/createHomePageNews';
import { createHomePageSeachingNews } from './js/createHomePageSeachingNews';
import { Calendar } from './js/calendar';

createHomePageNews();

const searchBtn = document.querySelector('.search-button svg');
const input = document.querySelector('.search-input');

searchBtn.addEventListener('click', () => {

    createHomePageSeachingNews(input.value);
    input.value = '';
  });

  document.addEventListener("keydown", e => {
    if (e.code !== "Enter") {
        return
    }
    createHomePageSeachingNews(input.value);
    input.value = '';
  });


  let selectedDate = '';
const daysTag = document.querySelector('.calendar-days-list');
daysTag.addEventListener('click', e => {
if (!e.target.classList.contains('inactive')) {
    const day = e.target.innerText;
    const month = months[currentMonth];
    const year = currentYear;
    selectedDate = `${day} ${month} ${year}`;
}
  console.log(selectedDate);
});
console.log(selectedDate);
