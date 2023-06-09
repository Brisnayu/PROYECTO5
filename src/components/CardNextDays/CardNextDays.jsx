import "./CardNextDays.css";

const CardNextDays = ({ weatherArray }) => {
  return (
    <>
      {weatherArray.map((weather) => (
        <section key={weather.dt} className="info-days">
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

          <p>
            Sensación térmica {Math.round(weather.main.feels_like - 273.15)}º
          </p>
          <h3>
            Mínima {Math.round(weather.main.temp_min - 273.15)}º - Máxima{" "}
            {Math.round(weather.main.temp_max - 273.15)}º
          </h3>
          <div className="dates-next-day">
            {/* <h4>Viento {Math.round(weather.wind.speed * 3.6)} km/h </h4>
              <h4>Dirección del viento {weather.wind.deg}º </h4> */}
            <h4>Humedad {weather.main.humidity}% </h4>
            <h4>Visibilidad {weather.visibility / 1000}km </h4>
            <h4>nubes {weather.clouds.all}% </h4>
          </div>
        </section>
      ))}
    </>
  );
};

export default CardNextDays;
