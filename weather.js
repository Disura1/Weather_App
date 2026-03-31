const lat = 7.0393;
const lon = 79.9893;
const apiKey = "d3826f7015cb4de1e4aac1c1642b5b04";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById(
      "city"
    ).innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById("main").innerText = data.weather[0].main;
    document.getElementById("description").innerText =
      data.weather[0].description;
    document.getElementById(
      "icon"
    ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("feels_like").innerText = data.main.feels_like;
    document.getElementById("temp_min").innerText = data.main.temp_min;
    document.getElementById("temp_max").innerText = data.main.temp_max;
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("pressure").innerText = data.main.pressure;
    document.getElementById("visibility").innerText = data.visibility;

    document.getElementById("wind_speed").innerText = data.wind.speed;
    document.getElementById("wind_deg").innerText = data.wind.deg;
    document.getElementById("clouds").innerText = data.clouds.all;

    const toTime = (timestamp) => {
      const date = new Date(timestamp * 1000);
      return date.toLocaleTimeString();
    };

    document.getElementById("sunrise").innerText = toTime(data.sys.sunrise);
    document.getElementById("sunset").innerText = toTime(data.sys.sunset);
  })
  .catch((error) => {
    document.getElementById("city").innerText = "Error loading weather";
    console.error("Error:", error);
  });
