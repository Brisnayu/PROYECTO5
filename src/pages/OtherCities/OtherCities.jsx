import "./OtherCities.css";
import { useContext, useState, useEffect } from "react";
import Today from "../../components/Today/Today";
import WeatherCities from "../../components/WeatherCities/WeatherCities";

import { WeatherContext } from "../../context/weatherContext";
import { GeoCoordinates } from "../../utils/GeoCoordinates";

const OtherCities = () => {
  const { currentCity, setCurrentCity } = useContext(WeatherContext);

  const currentCCityData = GeoCoordinates.filter(
    (city) => city.name === currentCity
  );

  const [latCurrentCity, setlatCurrentCity] = useState(
    currentCCityData[0].coord.lat
  );
  const [lonCurrentCity, setStatelonCurrentCity] = useState(
    currentCCityData[0].coord.lon
  );
  const [poli, setpoli] = useState(false);

  useEffect(() => {
    setlatCurrentCity(currentCCityData[0].coord.lat);
    setStatelonCurrentCity(currentCCityData[0].coord.lon);
  }, [currentCity]);

  // console.log("con el useState", latCurrentCity);
  // console.log("con el useState", lonCurrentCity);

  const [weatherDay1, setWeatherDay1] = useState([]);

  const WEATHER_API_KEY = "dfad8d7ba7c96049c80872a31938271f";
  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latCurrentCity}&lon=${lonCurrentCity}&appid=${WEATHER_API_KEY}`;

  const fetchData1 = async () => {
    setpoli(false);

    const data = await fetch(WEATHER_API);
    const dataJSON = await data.json();

    // console.log("DENTRO DEL FETCH", dataJSON);
    setWeatherDay1(dataJSON);
    // setDayPhoto(weatherDay.weather[0].icon);
    setpoli(true);
  };

  useEffect(() => {
    if (latCurrentCity) {
      fetchData1();
    }
  }, [latCurrentCity]);

  // console.log(currentCity);

  return (
    <main>
      {poli ? (
        <article className="container-cities">
          <section className="section-cities cities-flex">
            <label htmlFor="cities">
              <h3>Selecciona una ciudad</h3>
            </label>

            <WeatherCities setCurrentCity={setCurrentCity} currentCity={currentCity} />
          </section>

          <section>
            <div className="dates-sub cities-flex">
              <Today />
              <h2>{Math.round(weatherDay1.main.temp - 273.15)}º</h2>
              <img
                src="https://i.pinimg.com/originals/02/5f/29/025f29a640db04a067d7a540a7b4d004.gif"
                alt="plane and world gif"
              />
            </div>
            <div className="dates-half cities-flex">
              <h3>
                Mínima {Math.round(weatherDay1.main.temp_min - 273.15)}º -
                Máxima
                {Math.round(weatherDay1.main.temp_max - 273.15)}º
              </h3>
              <img
                className="img-time"
                src={`/public/icon-temps/${weatherDay1.weather[0].icon}.png`}
                alt={weatherDay1.weather[0].description}
              />
              <p>
                Sensación térmica
                {Math.round(weatherDay1.main.feels_like - 273.15)}º
              </p>
            </div>
            <div className="dates-lower">
              <h3>{currentCity}</h3>

              <div className="cities-principal">
                <div className="cities-card">
                  <h4>Viento</h4>
                  <p>{Math.round(weatherDay1.wind.speed * 3.6)} km/h</p>
                  <img src="./icon-wind.png" alt="icon-wind" />
                </div>
                <div className="cities-card">
                  <h4>Dirección del viento</h4>
                  <p>{weatherDay1.wind.deg}º</p>
                  <img src="./icon-wind-direction.png" alt="icon-wind-direction" />
                </div>
                <div className="cities-card">
                  <h4>Humedad</h4>
                  <p>{weatherDay1.main.humidity}%</p>
                  <img src="./icon-humidity.png" alt="icon-humidity" />
                </div>
                <div className="cities-card">
                  <h4>Visibilidad</h4>
                  <p>{weatherDay1.visibility / 1000} km</p>
                  <img src="./icon-visibility.png" alt="icon-visibility" />
                </div>
                <div className="cities-card">
                  <h4>Nubes</h4>
                  <p>{weatherDay1.clouds.all}%</p>
                  <img src="./icon-clouds.png" alt="icon-clouds" />
                </div>
              </div>
            </div>
          </section>
        </article>
      ) : (
        <h2>CARGANDO</h2>
      )}
    </main>
  );
};

export default OtherCities;
