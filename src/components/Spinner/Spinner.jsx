import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="container-spinner">
      <h2>Cargando información 🫠</h2>
      <br />
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
