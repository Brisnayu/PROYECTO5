const CardWeatherDates = ({ nameClass, title, formula, unit, imagen, description }) => {

  return (
    <div className={nameClass}>
      <h4>{title}</h4>
      <p>{formula} {unit}</p>
      <img src={imagen} alt={description} />
    </div>
  );
};

export default CardWeatherDates;
