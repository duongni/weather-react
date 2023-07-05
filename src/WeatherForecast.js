import React from "react";

export default function WeatherForecast(prop) {
  return (
    <div className="WeatherForecast">
      <div>Date</div>
      <i className={`wi wi-owm-${prop.info.icon} mb-3`}></i>
      <div>
        80° <span>60°</span>
      </div>
    </div>
  );
}
