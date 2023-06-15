import "./Home.css";

import WeatherDates from "../../components/WeatherDates/WeatherDates";
import ActualTemperature from "../../components/ActualTemperature/ActualTemperature";
import Spinner from "../../components/Spinner/Spinner";
import InfoNotFound from "../../components/InfoNotFound/InfoNotFound";
import usePetition from "../../hook/usePetition";
import { useEffect } from "react";

const Home = () => {
  const { direction, denied, weatherDay, getWeatherPosition } = usePetition();

  useEffect(() => {
    getWeatherPosition();
  }, []);

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
