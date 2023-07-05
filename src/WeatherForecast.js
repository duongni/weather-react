import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(data) {
    console.log(data);
  }
  const apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
  const unit = "imperial";
  const lat = props.data.coord.lat;
  const lon = props.data.coord.lon;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="ForecastDate">
        <p>Date</p>
        <i className={`wi wi-owm-${props.data.icon} mb-3`}></i>
        <p>
          80° <span>60°</span>
        </p>
      </div>
      <div className="ForecastDate">
        <p>Date</p>
        <i className={`wi wi-owm-${props.data.icon} mb-3`}></i>
        <p>
          80° |<span> 60°</span>
        </p>
      </div>
      <div className="ForecastDate">
        <p>Date</p>
        <i className={`wi wi-owm-${props.data.icon} mb-3`}></i>
        <p>
          80° |<span> 60°</span>
        </p>
      </div>
      <div className="ForecastDate">
        <p>Date</p>
        <i className={`wi wi-owm-${props.data.icon} mb-3`}></i>
        <p>
          80° |<span> 60°</span>
        </p>
      </div>
      <div className="ForecastDate">
        <p>Date</p>
        <i className={`wi wi-owm-${props.data.icon} mb-3`}></i>
        <p>
          80° |<span> 60°</span>
        </p>
      </div>
    </div>
  );
}
