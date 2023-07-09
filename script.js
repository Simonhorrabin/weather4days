const timeE1 = document.querySelector('.time');
const dateE1 = document.getElementById('date');
const currentWeatherItemsE1 = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryE1 = document.getElementById('country');
const weatherForecastE1 = document.getElementById('weather-forecast');
const currentTempE1 = document.getElementById('current-temp');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_Key = '90ccaf76a1c136daef345d47598c58e1';

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  timeE1.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`;

  dateE1.innerHTML = days[day] + ' , ' + date + ' , ' + months[month];

}, 1000);

function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    console.log(success);

    let { latitude, longitude } = success.coords;
    console.log(latitude, longitude);

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_Key}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        var humidity = document.getElementById("current-humidity");
        humidity.textContent = data.main.humidity + "%";

        console.log(data);
      });
  });
}

getWeatherData();
