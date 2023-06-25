import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
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

  function handleSearch(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {
    setCity(event.target.city);
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
      </div>
    );
  } else {
    const apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
    const unit = "imperial";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
