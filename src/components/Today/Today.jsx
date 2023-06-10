import "./Today.css";

const Today = () => {
  const hours = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const today = new Date().toLocaleDateString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="today-hours">
      <p>{today}</p>
      <p className="hours">{hours}</p>
    </div>
  );
};

export default Today;
