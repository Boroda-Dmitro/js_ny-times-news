import Notiflix from 'notiflix';
import { createHomePageSeachingNews } from '../js/createHomePageSeachingNews';
import moment from 'moment';

let dateApi = '';
export function setDateApi(value) {
  dateApi = value;
}

const calendarForm = document.querySelector('.calendar-form');
const daysTag = document.querySelector('.calendar-days-list');
const currentDate = document.querySelector('.calendar-switcher__current-date');
const switchesMonth = document.querySelectorAll('.calendar-icons span');
const selectedDate = document.getElementById('input-picker');

const calendar = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('body'),
  modal: document.querySelector('[data-modal]'),
  inputField: document.querySelector('.calendar-form__input'),
  toggleBtn: document.querySelector('.calendar-form__button-down'),
  calendarBtn: document.querySelector('.calendar-form__icon-calendar'),
};

let today = new Date(),
  currentMonth = today.getMonth(),
  currentYear = today.getFullYear();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// зміна розмітки при закритті
const closeModalAndResetCalendar = () => {
  calendarForm.querySelector('[data-modal]').classList.add('hidden');
  calendarForm
    .querySelector('.calendar-form__input')
    .classList.remove('isActive');
  calendarForm
    .querySelector('.calendar-form__button-down')
    .classList.remove('switched');
  calendarForm
    .querySelector('.calendar-form__icon-calendar')
    .classList.remove('switchedColor');
};

function calendarEl() {
  const { modal, inputField, toggleBtn, calendarBtn } = calendar;
  modal.classList.toggle('hidden');
  inputField.classList.toggle('isActive');
  toggleBtn.classList.toggle('switched');
  calendarBtn.classList.toggle('switchedColor');
}

// обробник події по кліку на інпут
calendar.openModalBtn.addEventListener('click', function () {
  calendarEl();
});

// обробник події по кліку поза календарем
document.addEventListener('click', hideModals);

function hideModals(e) {
  if (e.target.closest('.calendar-form')) return;
  if (calendar.inputField.classList.contains('isActive')) {
    calendarEl();
  }
}

// ---------  Рендеринг календаря  ---------

const render = () => {
  // отримаємо перший день місяця, останній день місяця, останній день попереднього місяця
  const firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay() - 1, // для відображення понеділка
    lastDateofMonth = new Date(currentYear, currentMonth, 0).getDate(),
    lastDayofMonth = new Date(
      currentYear,
      currentMonth,
      lastDateofMonth
    ).getDay(),
    lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();

  let liTag = '';

  // елементи для днів попереднього місяця
  for (let j = firstDayofMonth; j > 0; j--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - j + 1}</li>`;
  }

  // додаємо елементи для днів поточного місяця
  for (let i = 1; i <= lastDateofMonth; i++) {
    const currentDateObj = new Date(currentYear, currentMonth, i);
    const isToday =
      i === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear();
    const isFuture = currentDateObj > today;
    liTag += `<li class="${isToday ? 'active' : ''} ${
      isFuture ? 'future' : ''
    }">${i}</li>`;
  }

  // додаємо елементи для днів наступного місяця
  for (let i = lastDayofMonth; i < 7; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }

  // виводимо поточну дату та елементи календаря в HTML
  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;

  // обробник події по кліку на день
  const dayChange = document.querySelector('.calendar-days-list');
  dayChange.addEventListener('click', e => {
    // перевіряємо чи є елемент неактивним
    if (e.target.classList.contains('inactive')) {
      return;
    }

    // видаляємо клас active і всіх днів і додаємо його тільки вибраному
    [...e.currentTarget.children].forEach(item => {
      item.classList.remove('active');
    });
    e.target.classList.add('active');

    // отримуємо вибрану дату і виводимо її в input
    let selectedDay = e.target.textContent;
    if (selectedDay.length > 10) {
      return;
    }

    const selectedMonth = (currentMonth + 1).toString();
    selectedDate.value = `${selectedDay.padStart(
      2,
      '0'
    )}/${selectedMonth.padStart(2, '0')}/${currentYear}`;

    // відправляємо вибрану дату на сервер
    handleSelectedBeginDate();
  });
};

// --------  ФУНКЦІЯ ДЛЯ ВІДПРАВКИ ДАТИ НА API  --------
let errorDisplayed = false; // для виводу помилки на екран
const handleSelectedBeginDate = async () => {
  const selectedDay = document.querySelector(
      '.calendar-days-list .active'
    ).textContent,
    selectedMonth = (currentMonth + 1).toString(),
    selectedYear = currentYear,
    selectedDateStr = `${selectedYear}-${selectedMonth}-${selectedDay.padStart(
      2,
      '0'
    )}`,
    selectedDateObj = new Date(selectedDateStr);

  try {
    if (selectedDateObj > today) {
      if (!errorDisplayed) {
        Notiflix.Notify.failure(`Невірна дата. Виберіть іншу дату`);
        errorDisplayed = true;
      }
      throw new Error(`Невірна дата. Виберіть іншу дату`);
    } else {
      setDateApi(`${selectedDateStr}`);
      closeModalAndResetCalendar();
      errorDisplayed = false;
    }
  } catch (err) {
    console.log(err);
  }
};

// відправляємо на сервер сьогоднішню дату при завантаження сторінки
setDateApi(
  `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`
);

// --------  ПЕРЕМИКАЧ РОКІВ  --------
const prevYearBtn = document.getElementById('prev-years');
const nextYearBtn = document.getElementById('next-years');

// обробник події по кліку на кнопку "попередній рік"
prevYearBtn.addEventListener('click', () => {
  const prevYear = currentYear - 1;
  if (prevYear < today.getFullYear()) {
    currentYear = prevYear;
    today = new Date(currentYear, currentMonth, today.getDate());
    render();
  }
});

// обробник події по кліку на кнопку"наступний рік"
nextYearBtn.addEventListener('click', () => {
  const nextYear = currentYear + 1;
  if (nextYear <= new Date().getFullYear()) {
    currentYear = nextYear;
    today = new Date(currentYear, currentMonth, today.getDate());
    render();
  } else {
    Notiflix.Notify.failure(`Наступний рік перевищує поточний`);
  }
});

// --------  ПЕРЕМИКАЧ МІСЯЦІВ  --------
switchesMonth.forEach(switchMonth => {
  switchMonth.addEventListener('click', () => {
    const nextMonth =
      switchMonth.id === 'prev' ? currentMonth - 1 : currentMonth + 1;

    if (nextMonth < 0 || nextMonth > 11) {
      const nextYear = nextMonth < 0 ? currentYear - 1 : currentYear + 1;
      if (nextYear > new Date().getFullYear()) {
        Notiflix.Notify.failure(`Наступний місяць перевищує поточний`);
        return; // перемикання заборонено
      }
      currentYear = nextYear;
      currentMonth = nextMonth < 0 ? 11 : 0;
    } else if (
      currentYear === new Date().getFullYear() &&
      nextMonth > new Date().getMonth()
    ) {
      Notiflix.Notify.failure(`Наступний місяць перевищує поточний`);
      return; // перемикання заборонено
    } else {
      currentMonth = nextMonth;
    }
    render();
  });
});

render();

function getMonthNumber(month) {
  const monthIndex = months.indexOf(month);
  if (monthIndex !== -1) {
    // Якщо місяць знайдений в масиві
    return (monthIndex + 1).toString().padStart(2, '0'); // Повертаємо числовий вираз місяця з відповідним форматуванням
  } else {
    // Якщо місяць не знайдений в масиві
    return 'Error: Invalid month name';
  }
}

export let searchDate = '';
const y = document.querySelector('.calendar-days-list');
y.addEventListener('click', e => {
  if (!e.target.classList.contains('inactive')) {
    const day = e.target.innerText;
    const month = getMonthNumber(months[currentMonth]);
    const year = currentYear;
    searchDate = `${year}${month}${day} `;
  }
  console.log(searchDate);
});



const searchBtn = document.querySelector('.search-button svg');
const input = document.querySelector('.search-input');

searchBtn.addEventListener('click', () => {
  createHomePageSeachingNews(input.value, searchDate);
  input.value = '';
});

document.addEventListener('keydown', e => {
  if (e.code !== 'Enter') {
    return;
  }
  createHomePageSeachingNews(input.value, searchDate);
  input.value = '';
});
