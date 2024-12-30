const apiKey = "1ab4953c463dfd8b1816d549947f0f6e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const weatherIcon = document.querySelector(".weather-icon");
const cityName = document.getElementById("city-name");
const tempElement = document.querySelector(".temp");
const humidityElement = document.querySelector(".humidity");
const windElement = document.querySelector(".wind");
const weatherContainer = document.querySelector(".weather");

// Function to fetch and display weather data
async function fetchWeather(city) {
  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    if (response.status === 404) {
      alert("City not found. Please enter a valid city name.");
      return;
    }

    const data = await response.json();

    cityName.textContent = data.name;
    tempElement.textContent = `${Math.round(data.main.temp)}°C`;
    humidityElement.textContent = `${data.main.humidity}%`;
    windElement.textContent = `${data.wind.speed} km/hr`;

    const weatherIcons = {
      Clouds: "images/clouds.png",
      Clear: "images/clear.png",
      Rain: "images/rain.png",
      Drizzle: "images/drizzle.png",
      Mist: "images/mist.png"
    };

    const weatherCondition = data.weather[0].main;
    weatherIcon.src = weatherIcons[weatherCondition] || "images/default.png";

    // Save the last searched city to localStorage
    localStorage.setItem("lastCity", city);

    weatherContainer.style.display = "block";
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
searchButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});
window.addEventListener("load", () => {
  const lastCity = localStorage.getItem("lastCity");
  if (lastCity) {
    fetchWeather(lastCity);
  }
});
