import React from "react";

export default function ForecastFormattedDate(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}`;
  }
  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="ForecastFormattedDate">
      <div className="ForecastDate">
        <div>{day()}</div>
        <i className={`wi wi-owm-${props.data.weather[0].id} mb-3`}></i>
        <div className="forecast-temp">
          {maxTemp()}° <span>{minTemp()}°</span>
        </div>
      </div>
    </div>
  );
}
