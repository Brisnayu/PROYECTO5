import "./OtherCities.css";
import { useContext, useState, useEffect } from "react";
import WeatherCities from "../../components/WeatherCities/WeatherCities";
import WeatherDates from "../../components/WeatherDates/WeatherDates";
import Spinner from "../../components/Spinner/Spinner";

import { WeatherContext } from "../../context/weatherContext";
import { GeoCoordinates } from "../../utils/GeoCoordinates";
import { imageCities } from "../../utils/ImageCities";
import ActualTemperature from "../../components/ActualTemperature/ActualTemperature";

const OtherCities = () => {
  const { currentCity, setCurrentCity } = useContext(WeatherContext);

  const img = imageCities[currentCity];

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
    <>
      {poli ? (
        <main>
          <article className="background-image"
            style={{ backgroundImage: `url(${img})` }}
          />
          <article className="container-cities">
            <section className="section-cities cities-flex">
              <label htmlFor="cities">
                <h3>Selecciona una ciudad</h3>
              </label>

              <WeatherCities
                setCurrentCity={setCurrentCity}
                currentCity={currentCity}
              />
            </section>

            <section>

              <ActualTemperature
                classInit="dates-sub cities-flex"
                resWeather={weatherDay1}
                classSecond="dates-half cities-flex"
                classImage="img-time"
              />

              <div className="dates-lower">
                <h3>{currentCity}</h3>

                <div className="cities-principal">
                  <WeatherDates resWeather={weatherDay1} view="cities" />
                </div>
              </div>
            </section>
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