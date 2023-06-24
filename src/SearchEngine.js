import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temp: response.data.main.temp,
      city: response.data.name,
      iconURL: "https://openweathermap.org/img/wn/10d@2x.png",
      feel: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }
  if (weather.ready) {
    return (
      <div>
        <form className="search">
          <input type="search" placeholder="enter a city" autoFocus="on" />
        </form>
        <div className="container">
          <div className="city-weather">
            <h2>{weather.city}</h2>
            <h1>{Math.round(weather.temp)}°F</h1>
            <img
              src={weather.iconURL}
              alt="{weather.description}"
              className="weather-icon"
            />
            <h3 className="text-capitalize">{weather.description}</h3>
          </div>
          <div className="weather-details">
            <div>
              <h4>{Math.round(weather.feel)}°F</h4>
              <p>Feels Like</p>
            </div>
            <div>
              <h4>{weather.humidity}%</h4>
              <p>Humidity</p>
            </div>
            <div>
              <h4>{Math.round(weather.wind)}MPH</h4>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
    const unit = "imperial";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
