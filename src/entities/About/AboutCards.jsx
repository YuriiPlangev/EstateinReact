const values = [
  {
    title: "Trust",
    description:
      "Trust is the cornerstone of every successful real estate transaction.",
    icon: "svg/star.svg",
  },
  {
    title: "Excellence",
    description:
      "We set the bar high for ourselves. From the properties we list to the services we provide.",
    icon: "svg/education.svg",
  },
  {
    title: "Client-Centric",
    description:
      "Your dreams and needs are at the center of our universe. We listen, understand.",
    icon: "svg/people.svg",
  },
  {
    title: "Our Commitment",
    description:
      "We are dedicated to providing you with the highest level of service and professionalism.",
    icon: "svg/star.svg",
  },
];

function AboutCards() {
  return (
    <div className="values__cards">
      {values.map((value, index) => (
        <article key={index} className="values__card">
          <img
            className="values__card-img"
            src={value.icon}
            alt={value.title}
          />
          <h3 className="values__card-title">{value.title}</h3>
          <p className="values__card-description">{value.description}</p>
        </article>
      ))}
    </div>
  );
}

export default AboutCards;
