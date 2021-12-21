import React from "react";
import { useEffect } from "react";
const Card = ({ details }) => {
  const [weather, setWeather] = React.useState("");
  const {
    temp,
    pressure,
    humidity,
    speed,
    country,
    sunset,
    sunrise,
    name,
    weathertype,
  } = details;
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  let sec1 = sunrise;
  let date1 = new Date(sec1 * 1000);
  let timeStr1 = `${date1.getHours()}:${date1.getMinutes()}`;

  //   for changing weather
  useEffect(() => {
    if (weathertype) {
      switch (weathertype) {
        case "Clouds":
          setWeather("wi-day-cloudy");
          break;
        case "Haze":
          setWeather("wi-fog");
          break;
        case "Clear":
          setWeather("wi-day-sunny");
          break;
        case "Cloud":
          setWeather("wi-day-cloudy");
          break;
        case "Mist":
          setWeather("wi-dust");
          break;
        case "Rainy":
          setWeather("sleet");
          break;

        default:
          setWeather("wi-day-sunny");
          break;
      }
    }
  }, [weathertype]);

  return (
    <>
      <div className="Card_box">
        <div className="icon">
          <i className={`wi ${weather}`}></i>
        </div>
        <div className="card_main_box">
          <div className="deg_date">
            <div className="deg">
              <p>
                {temp}&deg; <br />
                {weathertype}
              </p>
            </div>
            <div className="country_name">
              {name} | {country}
            </div>
            <div className="time">{new Date().toLocaleString()}</div>
          </div>
          <div className="weather_details">
            <div className="weather_min">
              <p>
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className="weather_min">
              <p>
                {humidity} <br />
                Humidity
              </p>
            </div>
            <div className="weather_min">
              <p>
                {speed} <br />
                Wind
              </p>
            </div>
            <div className="weather_min">
              <p>
                {timeStr} <br />
                Sunset
              </p>
            </div>
            <div className="weather_min">
              <p>
                {timeStr1} <br />
                Sunrise
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
