import React from "react";

export default function WeatherForecast(props) {
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
