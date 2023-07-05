import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import Weather from "./Weather";

export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,
      temp: response.data.main.temp,
      city: response.data.name,
      iconURL: "https://openweathermap.org/img/wn/10d@2x.png",
      feel: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].id,
    });
  }

  function search() {
    const apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
    const unit = "imperial";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);
  }
  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div>
        <form className="search" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="enter a city"
            autoFocus="on"
            onChange={handleCityChange}
          />
        </form>
        <Weather info={weather} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
