import Today from "../Today/Today";

const ActualTemperature = ({
  styleInit,
  resWeather,
  styleSecond,
  styleImage,
}) => {
  return (
    <>
      <div className={styleInit}>
        <Today />
        <h2>{Math.round(resWeather.main.temp - 273.15)}º</h2>
        <img
          src="https://i.pinimg.com/originals/02/5f/29/025f29a640db04a067d7a540a7b4d004.gif"
          alt="plane and world gif"
        />
      </div>

      <div className={styleSecond}>
        <h3>
          Mínima {Math.round(resWeather.main.temp_min - 273.15)}º - Máxima{" "}
          {Math.round(resWeather.main.temp_max - 273.15)}º
        </h3>
        <img
          className={styleImage}
          src={`/icon-temps/${resWeather.weather[0].icon}.png`}
          alt={resWeather.weather[0].description}
        />
        <p>
          Sensación térmica {Math.round(resWeather.main.feels_like - 273.15)}º
        </p>
      </div>
    </>
  );
};

export default ActualTemperature;
