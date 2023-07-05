import React, { useState } from "react";
import ForecastFormattedDate from "./ForecastFormattedDate";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response);
    setForecast(response.data.list);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div key={index}>
                {index}
                <ForecastFormattedDate data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    const apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
    const unit = "imperial";
    const lat = props.data.coord.lat;
    const lon = props.data.coord.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
