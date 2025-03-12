import { NavLink } from "react-router-dom"


function MobileMenu ( {showMobileMenu}) {
    return (
        <div class= {`${showMobileMenu === true ? "visible" : ""} mobile-menu`}>
        <nav class="mobile-menu__nav">
          <ul class="mobile-menu__list">
            <li class="mobile-menu__item">
            <NavLink to="/" class="mobile-menu__link">Home</NavLink>
            </li>
            <li class="mobile-menu__item">
            <NavLink to="about" class="mobile-menu__link">About Us</NavLink>
            </li>
            <li class="mobile-menu__item">
            <NavLink to="/properties" class="mobile-menu__link">Properties</NavLink>
            </li>
            <li class="mobile-menu__item">
            <NavLink to="/" class="mobile-menu__link">Services</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
}
export default MobileMenu
