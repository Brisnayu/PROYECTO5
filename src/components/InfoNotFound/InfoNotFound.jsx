import "./InfoNotFound.css";

const InfoNotFound = ({ gifCat, alt, text}) => {
  return (
    <main>
      <img
        className="gifNotFound"
        src={gifCat}
        alt={alt}
      />
      <h2 className="infoNotFound">{text}</h2>
    </main>
  );
};

export default InfoNotFound;