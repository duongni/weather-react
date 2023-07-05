import React from "react";

export default function ForecastFormattedDate(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.main.temp_max);
    return `${maxTemp}`;
  }
  function minTemp() {
    let minTemp = Math.round(props.data.main.temp_min);
    return `${minTemp}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="ForecastFormattedDate">
      <div className="ForecastDate">
        <p>{day()}</p>
        <i className={`wi wi-owm-${props.data.weather[0].id} mb-3`}></i>
        <p className="forecast-temp">
          {maxTemp()}° <span>{minTemp()}°</span>
        </p>
      </div>
    </div>
  );
}
