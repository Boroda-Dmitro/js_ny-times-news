export default class WeatherApiService {};

const apiKey = 'e3cf51b9d19c1b71b5828e7d427ff71f';

function success(pos) {
  const crd = pos.coords;
  let lat = crd.latitude;
  let lon = crd.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('.weather-counteiner');
      const { name, weather: [ {main, icon } ], main: { temp } } = data;
      const roundedTemp = Math.round(temp);

      const date = new Date();
      const dateString = date.toDateString();
      const [dayOfWeek, month, dayOfMonth, year] = dateString.split(' ');

      weather.innerHTML = `
            <div class="weather-info">
            <h2 class="weather-temperature">${roundedTemp}&#176</h2>
            <div class="weather-conloc">
              <h3 class="weather-condition">${main}</h3>
            <p class="weather-location">
              <svg class="weather-location__icon">
                  <path fill="#fff" style="fill: var(--color1, #fff)" d="M16 2c-6.072 0.008-10.992 4.929-10.999 11v0.001c0 0.005 0 0.011 0 0.016 0 2.485 0.833 4.776 2.234 6.609l-0.019-0.026s0.3 0.395 0.348 0.452l8.436 9.948 8.439-9.954c0.044-0.053 0.345-0.446 0.345-0.446v-0.004c1.382-1.806 2.215-4.097 2.215-6.582 0-0.005 0-0.010 0-0.015v0.001c-0.007-6.072-4.927-10.993-10.998-11.001h-0.001zM16 17.001c-2.209 0-4-1.791-4-4s1.791-4 4-4v0c2.209 0 4 1.791 4 4s-1.791 4-4 4v0z"></path>
              </svg>
              ${name}
            </p>
            </div>
          </div>
          <div class="weather-icon">
            <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="${main}">
          </div>
          <p class="weather-data-time">${dayOfWeek} <br> ${dayOfMonth} ${month} ${year}</p>
        </div>
            `;
    })
    .catch(error => console.log(error));
}

function error(err) {
  const crd = pos.coords;
  const city = 'Kyiv';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('.weather-counteiner');
      const { name, weather: [ {main, icon } ], main: { temp } } = data;
      const roundedTemp = Math.round(temp);

      const date = new Date();
      const dateString = date.toDateString();
      const [dayOfWeek, month, dayOfMonth, year] = dateString.split(' ');

      weather.innerHTML = `
            <li class="list">
            <div class="weather-info">
            <h2 class="weather-temperature">${roundedTemp}&#176</h2>
            <div class="weather-conloc">
              <h3 class="weather-condition">${main}</h3>
            <p class="weather-location">
              <svg class="icon" width="18" height="18">
                  <use href="./images/sprite.svg#icon-location"></use>
              </svg>
              ${name}
            </p>
            </div>
          </div>
          <div class="weather-icon">
            <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="${main}">
          </div>
          <p class="weather-data-time">${dayOfWeek} <br> ${dayOfMonth} ${month} ${year}</p>
        </div>
        </li>
            `;
    })
    .catch(error => console.log(error));
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 0,
};

navigator.geolocation.getCurrentPosition(success, error, options);