import { NavLink } from "react-router-dom"


function MobileMenu ( {showMobileMenu, setShowMobileMenu} ) {

  const hideMobileMenu = () => {
    setShowMobileMenu(false)
  }
    return (
        <div className= {`${showMobileMenu === true ? "visible" : ""} mobile-menu`}>
        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__list">
            <li className="mobile-menu__item">
            <NavLink to="/" onClick={hideMobileMenu} className="mobile-menu__link">Home</NavLink>
            </li>
            <li className="mobile-menu__item">
            <NavLink to="about" onClick={hideMobileMenu} className="mobile-menu__link">About Us</NavLink>
            </li>
            <li className="mobile-menu__item">
            <NavLink to="/properties" onClick={hideMobileMenu} className="mobile-menu__link">Properties</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
}
export default MobileMenu
