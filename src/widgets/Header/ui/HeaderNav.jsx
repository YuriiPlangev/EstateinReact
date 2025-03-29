import { NavLink, useLocation } from "react-router-dom";

function HeaderNav() {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="list__item">
          <NavLink
            to="/"
            className={`list__link ${location.pathname === "/" ? "current-page" : ""}`}
          >
            Home
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            to="/about"
            className={`list__link ${location.pathname === "/about" ? "current-page" : ""}`}
          >
            About Us
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            to="/properties"
            className={`list__link ${location.pathname === "/properties" ? "current-page" : ""}`}
          >
            Properties
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
}

export default HeaderNav;
