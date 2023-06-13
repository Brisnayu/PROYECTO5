import "./Home.css";

import WeatherDates from "../../components/WeatherDates/WeatherDates";
import ActualTemperature from "../../components/ActualTemperature/ActualTemperature";
import Spinner from "../../components/Spinner/Spinner";

import { useState, useEffect } from "react";
import InfoNotFound from "../../components/InfoNotFound/InfoNotFound";

const Home = () => {
  //Obteniendo coordenadas del ordenador!
  const [stateLat, setStateLat] = useState();
  const [stateLon, setStateLon] = useState();
  const [direction, setDirection] = useState(false);
  const [denied, setDenied] = useState(false);

  const [weatherDay, setWeatherDay] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStateLat(position.coords.latitude);
        setStateLon(position.coords.longitude);
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          setDenied(true);
        }
      }
    );
  }, []);

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
      {denied === true ? (
        <InfoNotFound
          gifCat="./gif-denied.gif"
          alt="Gif cat denied"
          text="Si quieres saber el tiempo en tu dirección actual, debes autorizar la geolocalización en tu navegador."
        />
      ) : (
        <>
          {direction ? (
            <article className="container-home">
              <section className="weather-today">
                <div
                  className="background-weather"
                  style={{
                    backgroundImage: `url(./icon-background/${weatherDay.weather[0].icon}.jpg)`,
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
        </>
      )}
    </main>
  );
};

export default Home;
