import Services from "../../entities/services/Services";
import Statistics from "../../entities/statistics/Statistics";
import IntroLinkButtons from "./ui/IntroLinkButtons";
import build from "../../shared/assets/images/build.webp";
import discover from "../../shared/assets/images/discover-mob.webp";

function Intro() {
  return (
    <section className="intro">
      <div className="intro__content">
        <div className="content">
          <h2 className="intro__title">
            Discover Your Dream Property with Estatein
          </h2>
          <p className="intro__text">
            Your journey to finding the perfect property begins here. Explore our
            listings to find the home that matches your dreams.
          </p>
          <IntroLinkButtons />
          <Statistics />
        </div>
      </div>

      <div className="intro__img">
        <img src={build} alt="Modern building under construction" className="intro__img-build" />
        <img src={discover} alt="Discover more about our listings" className="intro__img-discover" />
      </div>

      <Services />
    </section>
  );
}

export default Intro;
