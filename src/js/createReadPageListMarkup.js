export function createReadPageListMarkup(datesArray, targetElement) {
  const uniqueDates = datesArray
    .filter((date, index, array) => array.indexOf(date) === index)
    .sort((firstElement, secondElement) =>
      secondElement.localeCompare(firstElement)
    );

  const containerArrayMarkup = uniqueDates
    .map(element => {
      return `<div class="accordion__container">
                  <p class="accordion__label">${element}</p>
                  <ul class="accordion__content news__box news__box--accordion"></ul>
                </div>`;
    })
    .join('');
  targetElement.innerHTML = containerArrayMarkup;
}

//перевірка
