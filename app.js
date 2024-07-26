const cityInput = document.getElementById("city");

const showWeatherBtn = document.getElementById("show-weather");
const showForecastBtn = document.getElementById("show-forecast");

const weatherContainer = document.getElementById("weather-container");
const forecastContainer = document.getElementById("forecast-container");

const forecastTitle = document.getElementById("forecast-title");

showWeatherBtn.addEventListener("click", showWeather);
showForecastBtn.addEventListener("click", showForecast);

const URL_CURRENT_WEATHER =
  "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

const URL_FORECAST_WEATHER =
  "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

async function showWeather() {
  const city = cityInput.value;
  const response = await fetch(`${URL_CURRENT_WEATHER}${city}`);
  const weather = await response.json();

  const iconCode = weather.weather[0].icon;
  const iconImageUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  weatherContainer.innerHTML = `
    <h1 class="roboto-bold">Vremea acum</h1>
    <div id="weather-card">
      <div class="roboto-medium" id=header-weather-card">
        <div class="roboto-bold" id="city-weather-card">${city}</div> 
        <img id="icon-weather-card" src=${iconImageUrl} />
        <div id="description-weather-card" >${weather.weather[0].description}</div>
      </div>
      <div class="roboto-bold" id="body-weather-card">
        <div id="temp-weather-card">Acum: ${weather.main.temp} °C</div>
      </div>
      <div class="roboto-medium" id="footer-weather-card">
        <div id="min-weather-card">Minima zilei: ${weather.main.temp_min} °C</div>
        <div id="max-weather-card">Maxima zilei: ${weather.main.temp_max} °C</div>
        <div id="humidity-weather-card">Umiditatea: ${weather.main.humidity} %</div>
        <div id="pressure-weather-card">Presiunea: ${weather.main.pressure} hPa</div>
      </div>
    </div>
    
    `;
}

async function showForecast() {
  const city = cityInput.value;
  const response = await fetch(`${URL_FORECAST_WEATHER}${city}`);
  const forecast = await response.json();
  const forecastArray = forecast.list;

  forecastTitle.innerHTML = `<h1 class="roboto-bold">Prognoza meteo in ${city}</h1>`;
  for (let i = 0; i < forecastArray.length; i++) {
    console.log("alo");
    const iconCode = forecastArray[i].weather[0].icon;
    const iconImageUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    forecastContainer.innerHTML += `
    <div id="forecast-card">
      <div class="roboto-bold" id="main-forecast-card">
        <div>Data: ${forecastArray[i].dt_txt} </div>
        <div>Temperatura: ${forecastArray[i].main.temp} °C</div>
      </div>
      <div class="roboto-medium" id="footer-forecast-card">
        <img id="icon-forecast-card" src=${iconImageUrl} />
        <div id="description-forecast-card">${forecastArray[i].weather[0].description}</div>
      </div>
    </div>
    `;
  }

  console.log(forecast);
}
