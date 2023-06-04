import "./Home.css";

import { useState, useEffect } from "react";

const Home = () => {
  const hours = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const today = new Date().toLocaleDateString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  //Obteniendo coordenadas del ordenador!
  const [stateLat, setStateLat] = useState();
  const [stateLon, setStateLon] = useState();
  const [direction, setDirection] = useState(false);

  const [weatherDay, setWeatherDay] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setStateLat(position.coords.latitude.toFixed(2));
      setStateLon(position.coords.longitude.toFixed(2));
    });
  }, []);

  console.log("esto vale la lat", stateLat);
  console.log("esto vale la lon", stateLon);
  console.log("Tengo dirección?", direction);

  const WEATHER_API_KEY = "dfad8d7ba7c96049c80872a31938271f";
  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${stateLat}&lon=${stateLon}&appid=${WEATHER_API_KEY}`;

  const fetchData = async () => {
    setDirection(false);

    const data = await fetch(WEATHER_API);
    const dataJSON = await data.json();

    console.log("DENTRO DEL FETCH", dataJSON);
    setWeatherDay(dataJSON);
    setDirection(true);
  };

  useEffect(() => {
    if (stateLat) {
      fetchData();
    }
  }, [stateLat]);

  return (
    <main>
      {direction ? (
        <article className="container-home">
          <section className="weather-today">
            <div className="info-days">
              <h1>
                {weatherDay.name} - {weatherDay.sys.country}
              </h1>
              <p>
                {hours} - {today}
              </p>
              <h2>{Math.round(weatherDay.main.temp - 273.15)}º</h2>
              <h3>
                Mínima {Math.round(weatherDay.main.temp_min - 273.15)}º - Máxima{" "}
                {Math.round(weatherDay.main.temp_max - 273.15)}º
              </h3>
              <p>
                Sensación térmica{" "}
                {Math.round(weatherDay.main.feels_like - 273.15)}º
              </p>
              <br />
              <img
                className="img-time"
                src={`/public/icon-temps/${weatherDay.weather[0].icon}.png`}
                alt={weatherDay.weather[0].description}
              />
            </div>
          </section>

          <section className="weather-chart">
            <div className="card">
              <h4>Viento</h4>
              <p>{Math.round(weatherDay.wind.speed * 3.6)} km/h</p>
              <img src="./icon-wind.png" alt="icon-wind" />
            </div>
            <div className="card">
              <h4>Dirección del viento</h4>
              <p>{weatherDay.wind.deg}º</p>
              <img src="./icon-wind-direction.png" alt="icon-wind-direction" />
            </div>
            <div className="card">
              <h4>Humedad</h4>
              <p>{weatherDay.main.humidity}%</p>
              <img src="./icon-humidity.png" alt="icon-humidity" />
            </div>
            <div className="card">
              <h4>Visibilidad</h4>
              <p>{weatherDay.visibility / 1000} km</p>
              <img src="./icon-visibility.png" alt="icon-visibility" />
            </div>
            <div className="card">
              <h4>Nubes</h4>
              <p>{weatherDay.clouds.all}%</p>
              <img src="./icon-clouds.png" alt="icon-clouds" />
            </div>
          </section>
        </article>
      ) : (
        <h2>Cargando!!!!</h2>
      )}
    </main>
  );
};

export default Home;
