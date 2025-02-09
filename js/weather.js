const API_KEY = ""; //api는 보안상의 이유로 비워 둠

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

      const weatherBox = document.querySelector("#weather");
      weatherBox.classList.remove("hidden");
    });
}

function onGeoError() {
  alert("can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
