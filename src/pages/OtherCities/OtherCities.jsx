import "./OtherCities.css";
import WeatherCities from "../../components/WeatherCities/WeatherCities";
import WeatherDates from "../../components/WeatherDates/WeatherDates";
import Spinner from "../../components/Spinner/Spinner";

import ActualTemperature from "../../components/ActualTemperature/ActualTemperature";
import CardNextDays from "../../components/CardNextDays/CardNextDays";

import usePetition from "../../hook/usePetition";
import { useEffect, useState } from "react";

const OtherCities = () => {
  const {
    img,
    direction,
    weatherDay,
    setCurrentCity,
    currentCity,
    stateLat,
    fetchData,
    dateCurrent,
    setDateCurrent,
    getWeatherCity,
    stateLon,
  } = usePetition();

  useEffect(() => {
    getWeatherCity();
  }, [currentCity]);

  // console.log("LATITUD NEXT DAY", stateLat);

  useEffect(() => {
    if (stateLat) {
      fetchData();
    }
  }, [stateLat, dateCurrent]);

  return (
    <>
      {direction ? (
        <main>
          <article
            className="background-image"
            style={{ backgroundImage: `url(${img})` }}
          />
          <article className="container-cities">
            <section className="section-cities cities-flex">
              <WeatherCities
                setCurrentCity={setCurrentCity}
                currentCity={currentCity}
                dateCurrent={dateCurrent}
                setDateCurrent={setDateCurrent}
              />
            </section>

            {dateCurrent === "today" ? (
              <section className="second-section">
                <ActualTemperature
                  styleInit="dates-sub cities-flex"
                  resWeather={weatherDay}
                  styleSecond="dates-half cities-flex"
                  styleImage="img-time"
                />

                <div className="dates-lower">
                  <h3>{currentCity}</h3>

                  <div className="cities-principal">
                    <WeatherDates resWeather={weatherDay} view="cities" />
                  </div>
                </div>
              </section>
            ) : (
              <CardNextDays stateLat={stateLat} stateLon={stateLon} />
            )}
          </article>
        </main>
      ) : (
        <main>
          <Spinner />
        </main>
      )}
    </>
  );
};

export default OtherCities;
