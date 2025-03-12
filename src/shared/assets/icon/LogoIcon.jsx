import { Link } from "react-router-dom"
function LogoIcon() {
    return (
      <Link to="/"
      className="header__logo">
        <svg width={48} height={48} xmlns="http://www.w3.org/2000/svg">
          <use xlinkHref="svg/sprite.svg#logo-lap" />
        </svg>
        Estatein
      </Link>
    )
  }
  export default LogoIcon