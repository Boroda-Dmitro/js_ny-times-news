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
              <svg class="weather-location__icon" width="18" height="18">
                <use href="#icon-location"></use>
              </svg>
              <span class="weather-location__text">${name}</span>
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