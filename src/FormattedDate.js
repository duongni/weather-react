import React from "react";

export default function FormattedDate(props) {
  let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];

  return (
    <div className="footer">
      Updated on: {day} {month} {date}
      <div>
        <a
          href="https://github.com/duongni/weather-react"
          title="Link to github"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced Code
        </a>
        by Ni D.
      </div>
    </div>
  );
}
