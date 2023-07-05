import React from "react";

export default function WeatherForecast(props) {
  const apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
  const unit = "imperial";
  const lat = 40;
  const lon = 50;
  const ApiUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
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
