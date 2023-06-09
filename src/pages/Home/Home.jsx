import "./Home.css";

import WeatherDates from "../../components/WeatherDates/WeatherDates";
import ActualTemperature from "../../components/ActualTemperature/ActualTemperature";
import Spinner from "../../components/Spinner/Spinner";


import { useState, useEffect } from "react";

const Home = () => {

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

  // console.log("esto vale la lat", stateLat);
  // console.log("esto vale la lon", stateLon);
  // console.log("Tengo dirección?", direction);

  const WEATHER_API_KEY = "dfad8d7ba7c96049c80872a31938271f";
  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${stateLat}&lon=${stateLon}&appid=${WEATHER_API_KEY}`;
  const WEATHER_API_FIVEDAYS = `https://api.openweathermap.org/data/2.5/forecast?lat=${stateLat}&lon=${stateLon}&appid=${WEATHER_API_KEY}`;

  const fetchData = async () => {
    setDirection(false);

    const data = await fetch(WEATHER_API);
    const dataJSON = await data.json();
    // console.log(dataJSON);
    // console.log("DENTRO DEL FETCH", dataJSON);
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
            <div
              className="background-weather"
              style={{
                backgroundImage: `url(./public/icon-background/${weatherDay.weather[0].icon}.jpg)`,
              }}
            />
            <div className="text-weather">
              <h1>
                {weatherDay.name} - {weatherDay.sys.country}
              </h1>

              <ActualTemperature 
              styleInit="datesHome"
              resWeather={weatherDay}
              styleSecond="secondHome"
              styleImage="imageIcon"
              />

            </div>
          </section>

          <section className="weather-chart">

            <WeatherDates resWeather={weatherDay} view="home" />

          </section>
        </article>
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default Home;
