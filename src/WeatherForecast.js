import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div>
      <div className="WeatherForecast">
        <p>Date</p>
        <i className={`wi wi-owm-${props.data.icon} mb-3`}></i>
        <p>
          80° <span>60°</span>
        </p>
      </div>
      <div className="WeatherForecast">
        <p>Date</p>
        <i className={`wi wi-owm-${props.data.icon} mb-3`}></i>
        <p>
          80° <span>60°</span>
        </p>
      </div>
      <div className="WeatherForecast">
        <p>Date</p>
        <i className={`wi wi-owm-${props.data.icon} mb-3`}></i>
        <p>
          80° <span>60°</span>
        </p>
      </div>
    </div>
  );
}
