// const apiKey = "6625d83c18f735c69f3dbe7b28f1e560";
// const apiBase = "https://api.openweathermap.org/data/2.5/weather";

/** Converting Data to JSON Format **/
weatherData = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6625d83c18f735c69f3dbe7b28f1e560`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => weatherUpdate(data));
};

weatherData("Dhaka");

/** Search Button Event Handler **/
const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", () => {
  const cityInput = document.getElementById("city-input").value;
  weatherData(cityInput);
});

/** Weather Update Function **/
weatherUpdate = (data) => {
  document.getElementById("city-name").innerText =
    data.name || "Unknown Location";
  document.getElementById("temperature").innerText = data.main.temp;
  document.getElementById("weather-status").innerText = data.weather[0].main;
  document
    .getElementById("icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
  document.getElementById("city-input").value = "";
};
