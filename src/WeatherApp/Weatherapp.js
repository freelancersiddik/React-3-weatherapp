import React from "react";
import "./sass/main.css";
import Card from "./Card";
import { useState, useEffect } from "react";

setInterval(() => {
  const time = document.querySelector(".time");
  let currentTime = new Date().toLocaleString();
  time.innerHTML = currentTime;
}, 1000);

const Weatherapp = () => {
  const [inputData, setinputData] = useState("Dhaka");
  const [details, setdetails] = useState("");

  const onclickToGetData = async () => {
    try {
      let api = `https://api.openweathermap.org/data/2.5/weather?q=${inputData}&units=metric&appid=c8d1779250bdfd7174967dd6db50ef0f`;
      let res = await fetch(api);
      let data = await res.json();
      const { temp, pressure, humidity } = data.main;
      const { speed } = data.wind;
      const { country, sunset, sunrise } = data.sys;
      const { name } = data;
      const { main: weathertype } = data.weather[0];
      const getApiDetails = {
        temp,
        pressure,
        humidity,
        speed,
        country,
        sunset,
        sunrise,
        name,
        weathertype,
      };
      setdetails(getApiDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onclickToGetData();
  }, []);
  return (
    <div className="wrapper">
      <div className="inputField">
        <input
          type="search"
          name="input"
          id="input"
          value={inputData}
          onChange={(e) => setinputData(e.target.value)}
          placeholder="Enter City Name..."
          autoFocus
        />
        <button onClick={onclickToGetData}>Search</button>
      </div>

      {/* Card box */}
      <Card details={details} />
    </div>
  );
};

export default Weatherapp;
