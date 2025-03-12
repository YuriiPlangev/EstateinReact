import ValueIcon from "../../shared/assets/svg/value.svg?react";
import HomeIcon from "../../shared/assets/svg/home.svg?react";
import ManageIcon from "../../shared/assets/svg/management.svg?react";
import SunIcon from "../../shared/assets/svg/sun.svg?react";
import TopRightArrow from "../../shared/assets/icon/TopRightArrow";


function Services() {
    return (
        <div className="intro__cards">
    <article className="intro__card">
      <HomeIcon />
      <p className="card__text">Find Your Dream Home</p>
      <TopRightArrow/>
    </article>
    <article className="intro__card">
      <ValueIcon />
      <p className="card__text">Unlock Property Value </p>
      <TopRightArrow/>
    </article>
    <article className="intro__card">
      <ManageIcon />
      <p className="card__text">Effortless Property Management</p>
      <TopRightArrow/>
    </article>
    <article className="intro__card">
      <SunIcon />
      <p className="card__text">Smart Investments, Informed Decisions</p>
      <TopRightArrow/>
    </article>
  </div>
    )
}
export default Services