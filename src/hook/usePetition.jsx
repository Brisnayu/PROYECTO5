import { useState, useEffect, useContext } from "react";
import { WeatherContext } from "../context/weatherContext";
import { GeoCoordinates } from "../utils/GeoCoordinates";
import { imageCities } from "../utils/ImageCities";

import { WEATHER_API_KEY } from "../utils/DatesApi";

const usePetition = () => {
  const [stateLat, setStateLat] = useState();
  const [stateLon, setStateLon] = useState();
  const [direction, setDirection] = useState(false);
  const [denied, setDenied] = useState(false);

  // Array con el clima del día ACTUAL!
  const [weatherDay, setWeatherDay] = useState([]);

  const [dateCurrent, setDateCurrent] = useState("today");
  const { currentCity, setCurrentCity } = useContext(WeatherContext);

  const currentCCityData = GeoCoordinates.filter(
    (city) => city.name === currentCity
  );

  const img = imageCities[currentCity];

  const getWeatherPosition = () => {
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
  };

  const getWeatherCity = () => {
    setStateLat(currentCCityData[0].coord.lat);
    setStateLon(currentCCityData[0].coord.lon);
  };

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${stateLat}&lon=${stateLon}&appid=${WEATHER_API_KEY}`;

  const fetchData = async () => {
    setDirection(false);

    const data = await fetch(WEATHER_API);
    const dataJSON = await data.json();
    // console.log(dataJSON);
    // console.log("DENTRO DEL FETCH", dataJSON);
    setWeatherDay(dataJSON);

    console.log("ESTOY EN EL FETCH");

    setDirection(true);
  };


  return {
    img,
    direction,
    denied,
    weatherDay,
    setDateCurrent,
    setCurrentCity,
    currentCity,
    dateCurrent,
    stateLat,
    stateLon,
    getWeatherPosition,
    getWeatherCity,
    fetchData,
  };
};

export default usePetition;
