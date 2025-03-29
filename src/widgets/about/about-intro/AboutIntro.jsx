import Statistics from "../../../entities/statistics/Statistics"

function AboutIntro() {
    return (
        <section className="intro">
  <div className="intro__content">
    <h2 className="intro__title">Our Journey</h2>
    <p className="intro__text">
      Our story is one of continuous growth and evolution. We started as a small
      team with big dreams, determined to create a real estate platform that
      transcended the ordinary. Over the years, we've expanded our reach, forged
      valuable partnerships, and gained the trust of countless clients.
    </p>
    <Statistics />
  </div>
  <div className="intro__img">
    <img src="images/build2.webp" alt="Modern building construction" className="intro__img-build" />
  </div>
</section>
    )
}
export default AboutIntro