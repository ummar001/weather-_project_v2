document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_API_KEY' with the actual API key you wish to use
    const apiKey = '2b767bae393ae7e90bc4843aff5ee515';
  
    function getWeather() {
      const cityInput = document.getElementById('cityInput').value;
      const weatherInfoElement = document.getElementById('weather-info');
  
      // Make the API request
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          // I have provided these variables for you
          const cityName = data.name;
          const temperatureKelvin = data.main.temp;
          const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(2);
          const weatherDescription = data.weather[0].description;
  
          // Use these to update the HTML with weather information
          const weatherHTML = `
                      <h2>Current Weather in ${cityName}</h2>
                      <p>Temperature: ${temperatureCelsius}°C</p>
                      <p>Description: ${weatherDescription}</p>
                  `;
          // Code goes here
          weatherInfoElement.innerHTML = weatherHTML;
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          weatherInfoElement.innerHTML = '<p>Error fetching weather data</p>';
        });
    }
  
    // Add an event listener to the button to call getWeather() when clicked
    document.getElementById('getWeatherButton').addEventListener('click', getWeather);
  });
  