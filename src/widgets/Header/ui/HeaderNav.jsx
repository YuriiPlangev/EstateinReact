import { NavLink } from "react-router-dom";

function HeaderNav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="list__item">
          <NavLink to="/" className="list__link" id="home">
            Home
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/about" className="list__link" id="about">
            About Us
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/properties" className="list__link" id="properties">
            Properties
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink to="/services" className="list__link" id="services">
            Services
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;