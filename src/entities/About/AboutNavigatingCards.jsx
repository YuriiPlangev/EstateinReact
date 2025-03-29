const steps = [
  { step: "Step 01", title: "Discover a World of Possibilities", description: "Your journey begins with exploring our carefully curated property listings." },
  { step: "Step 02", title: "Narrowing Down Your Choices", description: "Save properties to your account and compare them before making a decision." },
  { step: "Step 03", title: "Personalized Guidance", description: "Our team of real estate experts is ready to answer your questions and provide insights." },
  { step: "Step 04", title: "See It for Yourself", description: "Arrange viewings of the properties you're interested in with our assistance." },
  { step: "Step 05", title: "Making Informed Decisions", description: "Our team helps you with due diligence, legal checks, and market analysis." },
  { step: "Step 06", title: "Getting the Best Deal", description: "We assist in negotiating the best terms and preparing your offer." },
];

function AboutNavigatingCards() {
  return (
    <div className="navigating__cards">
      {steps.map((step, index) => (
        <article key={index} className="navigating__card">
          <p className="navigating__card-step">{step.step}</p>
          <div className="navigating__card-content">
            <h3 className="navigating__card-title">{step.title}</h3>
            <p className="navigating__description">{step.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default AboutNavigatingCards;
