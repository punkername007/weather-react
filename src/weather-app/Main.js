import React from "react";
import "./Main.css";

export default function Main(props) {
  return (
    <div className="Main">
      <main>
        <div className="current-weather">
          <div>
            <h1 className="current-city">{props.weather.city}</h1>
            <p className="current-details">
              <span>{props.weather.date}</span>,{" "}
              <span>{props.weather.weather}</span>
              <br />
              Humidity: <strong>{props.weather.humidity}%</strong>, Wind: {""}
              <strong>{props.weather.wind}km/h</strong>
            </p>
          </div>
          <div className="current-temperature-container">
            <div>
              <img
                src={props.weather.icon}
                alt="weather-icon"
                className="temperature-icon"
              />
            </div>
            <div className="temperature-value">
              {Math.round(props.weather.temperature)}
            </div>
            <div className="temperature-unit">°C</div>
          </div>
        </div>
      </main>
    </div>
  );
}
