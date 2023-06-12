import CardWeatherDates from "../CardWeatherDates/CardWeatherDates";

const WeatherCities = ({ resWeather, view }) => {

  return (
    <>
        <CardWeatherDates nameClass={`${view}-card`} title="Viento" 
            formula={Math.round(resWeather.wind.speed * 3.6)} unit="km/h" 
            imagen="./icon-wind.png" description="icon-wind"
        />
        <CardWeatherDates nameClass={`${view}-card`} title="Dirección del viento" 
            formula={resWeather.wind.deg} unit="º" 
            imagen="./icon-wind-direction.png" description="icon-wind-direction"
        />
        <CardWeatherDates nameClass={`${view}-card`} title="Humedad" 
            formula={resWeather.main.humidity} unit="%" 
            imagen="./icon-humidity.png" description="icon-humidity"
        />
        <CardWeatherDates nameClass={`${view}-card`} title="Visibilidad" 
            formula={resWeather.visibility / 1000} unit="km" 
            imagen="./icon-visibility.png" description="icon-visibility"
        />
        <CardWeatherDates nameClass={`${view}-card`} title="Nubes" 
            formula={resWeather.clouds.all} unit="%" 
            imagen="./icon-clouds.png" description="icon-clouds"
        />
    </>
  );
};

export default WeatherCities;