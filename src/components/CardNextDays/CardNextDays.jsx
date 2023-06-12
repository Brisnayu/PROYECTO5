import Spinner from "../Spinner/Spinner";
import "./CardNextDays.css";

import { useState, useEffect } from "react";

const CardNextDays = ({ stateLat, stateLon }) => {
  const [weatherDay, setWeatherDay] = useState([]);
  const [originWeather, setOriginWeather] = useState([]);
  const [direction, setDirection] = useState(false);

  const WEATHER_API_KEY = "dfad8d7ba7c96049c80872a31938271f";
  const WEATHER_API_FIVEDAYS = `https://api.openweathermap.org/data/2.5/forecast?lat=${stateLat}&lon=${stateLon}&appid=${WEATHER_API_KEY}`;

  const fetchData = async () => {
    setDirection(false);

    const data = await fetch(WEATHER_API_FIVEDAYS);
    const dataJSON = await data.json();
    // console.log(dataJSON);
    // console.log("DENTRO DEL FETCH", dataJSON.list);
    setOriginWeather(dataJSON);

    const newArray = dataJSON.list.filter((element, index) => {
      return [index + 9] % 8 === 0;
    });

    setWeatherDay(newArray);
    setDirection(true);
  };

  useEffect(() => {
    if (stateLat) {
      fetchData();
    }
  }, [stateLat]);

  // console.log("ARRAY DENTRO DE LA LISTA", weatherDay);
  console.log("ARRAY ORIGINAL", originWeather);

  return (
    <>
      {direction ? (
        <article className="container-card">
          <h2>
            {originWeather.city.name} - {originWeather.city.country}
          </h2>

          <section className="container-info-days">
            {weatherDay.map((weather) => (
              <div key={weather.dt} className="info-days">
                <h3>
                  {new Date(weather.dt_txt).toLocaleDateString([], {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </h3>
                <img
                  src={`/public/icon-temps/${weather.weather[0].icon}.png`}
                  alt={weather.weather[0].description}
                />
                <h2>{Math.round(weather.main.temp - 273.15)}º</h2>

                <h3>
                  Sensación térmica{" "}
                  {Math.round(weather.main.feels_like - 273.15)}º
                </h3>
                {/* <h3>
                  Mínima {Math.round(weather.main.temp_min - 273.15)}º - Máxima{" "}
                  {Math.round(weather.main.temp_max - 273.15)}º
                </h3> */}
                <div className="dates-next-day">
                  <p>Viento {Math.round(weather.wind.speed * 3.6)} km/h </p>
                  <p>Humedad {weather.main.humidity}% </p>
                  <p>Visibilidad {weather.visibility / 1000}km </p>
                  <p>nubes {weather.clouds.all}% </p>
                </div>
              </div>
            ))}
          </section>
        </article>
      ) : (
        <main>
          <Spinner />
        </main>
      )}
    </>
  );
};

export default CardNextDays;
