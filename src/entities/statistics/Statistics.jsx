const stats = [
  { number: "200+", text: "Happy Customers" },
  { number: "10k+", text: "Properties For Clients" },
  { number: "16+", text: "Years of Experience" },
];

function Statistics() {
  return (
    <div className="statistics">
      {stats.map((stat, index) => (
        <div key={index} className={`stat stat-num${index + 1}`}>
          <p className="stat__number">{stat.number}</p>
          <p className="stat__text">{stat.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Statistics;
