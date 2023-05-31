import "./Home.css";

const Home = () => {
  return (
    <main>
      <article className="container-home">
        <section className="weather-today">
          <h1>Barcelona</h1>
          <p>11:30 - Martes 30 Jun 2023</p>
          <h2>25º</h2>
          <h3>Mínima 20º - Máxima 26º</h3>
          <h3>Sensación térmica 22ª</h3>
          <img
            src="https://cdn.icon-icons.com/icons2/571/PNG/512/clouds-outlined-weather-symbol_icon-icons.com_54695.png"
            alt=""
          />
        </section>

        <section className="weather-chart">
          <div className="card">
            <h4>Viento</h4>
            <p>19 km/h</p>
            <img src="./icon-wind.png" alt="icon-wind" />
          </div>
          <div className="card">
            <h4>Dirección del viento</h4>
            <p>19º</p>
            <img src="./icon-wind-direction.png" alt="icon-wind-direction" />
          </div>
          <div className="card">
            <h4>Humedad</h4>
            <p>19%</p>
            <img src="./icon-humidity.png" alt="icon-humidity" />
          </div>
          <div className="card">
            <h4>Visibilidad</h4>
            <p>19 km</p>
            <img src="./icon-visibility.png" alt="icon-visibility" />
          </div>
          <div className="card">
            <h4>Nubes</h4>
            <p>19%</p>
            <img src="./icon-clouds.png" alt="icon-clouds" />
          </div>
        </section>
      </article>
    </main>
  );
};

export default Home;
