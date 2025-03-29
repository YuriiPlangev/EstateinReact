const teamMembers = [
  { name: "Max Mitchell", position: "Founder", image: "max.webp" },
  { name: "Sarah Johnson", position: "Chief Real Estate Officer", image: "sarah.webp" },
  { name: "David Brown", position: "Head of Property Management", image: "david.webp" },
  { name: "Michael Turner", position: "Legal Counsel", image: "michael.webp" },
];

function TeamCards() {
  return (
    <div className="team__cards">
      {teamMembers.map((member, index) => (
        <article key={index} className="team__card">
          <img src={`/images/Team/${member.image}`} alt={member.name} className="team__card-img" />
          <p className="team__card-name">{member.name}</p>
          <p className="team__card-position">{member.position}</p>
          <form className="team__card-form">
            <input type="text" placeholder="Say hello" className="team__card-input" />
            <button className="team__card-button">
              <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="/svg/sprite.svg#send" />
              </svg>
            </button>
          </form>
        </article>
      ))}
    </div>
  );
}

export default TeamCards;
