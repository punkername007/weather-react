import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import Main from "./Main";
import Footer from "./Footer";
import "./Header.css";

export default function Header() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    city: "Paris",
    date: moment().format("dddd HH:MM"),
    weather: "moderate rain",
    humidity: 69,
    wind: 6.5,
    temperature: 14,
    icon: `https://openweathermap.org/img/wn/{01d}.png`,
    loaded: false,
  });

  function handleResponse(response) {
    setWeather({
      city: response.data.name,
      date: moment().format("dddd HH:MM"),
      weather: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      temperature: response.data.main.temp,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      loaded: true,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let key = "57b2c40fdae71a6ba41d72685e3226e2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="Header">
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="search-field"
            placeholder="Enter a city.."
            onChange={updateQuery}
            required
          />
          <input type="submit" className="search-button" value="Search" />
        </form>
      </header>
      <Main weather={weather} />
      <Footer />
    </div>
  );
}
