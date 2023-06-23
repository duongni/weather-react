import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div>
      <form className="search">
        <input type="search" placeholder="enter a city" />
      </form>
      <div className="container">
        <div className="city-weather">
          <h2>New York</h2>
          <h1>60°F</h1>
          <img src="" alt="weather icon" />
          <h3>Clouds</h3>
        </div>
        <div className="weather-details">
          <div>
            <h4>34°F</h4>
            <p>Feels Like</p>
          </div>
          <div>
            <h4>70%</h4>
            <p>Humidity</p>
          </div>
          <div>
            <h4>2MPH</h4>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
