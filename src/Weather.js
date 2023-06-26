import React from "react";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  return (
    <div>
      <div className="container">
        <div className="city-weather">
          <i className={`wi wi-owm-${props.info.icon} mb-3`}></i>
          <h2>{props.info.city}</h2>

          <h1>{Math.round(props.info.temp)}°F</h1>

          <h3 className="text-capitalize">{props.info.description}</h3>
        </div>
        <div className="weather-details">
          <div>
            <h4>{Math.round(props.info.feel)}°F</h4>
            <p>Feels Like</p>
          </div>
          <div>
            <h4>{props.info.humidity}%</h4>
            <p>Humidity</p>
          </div>
          <div>
            <h4>{Math.round(props.info.wind)}MPH</h4>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
      <p className="date">
        Updated on:
        <FormattedDate date={props.info.date} />
      </p>
    </div>
  );
}
