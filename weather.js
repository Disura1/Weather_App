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
    document.getElementById(
      "temp"
    ).innerText = `🌡️ Temperature: ${data.main.temp} °C`;
    document.getElementById(
      "desc"
    ).innerText = `🌤️ ${data.weather[0].description}`;
    const iconCode = data.weather[0].icon;
    document.getElementById(
      "icon"
    ).src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById("icon").alt = data.weather[0].main;
  })
  .catch((error) => {
    document.getElementById("city").innerText = "Error loading weather 😢";
    console.error(error);
  });
