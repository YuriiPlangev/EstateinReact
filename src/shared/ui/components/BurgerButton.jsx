import MobileMenu from "../../../widgets/mobile-menu/MobileMenu"
import { useState } from "react"
function BurgerButton () {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  console.log(showMobileMenu);
  
        return (
          <>
            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className={`${showMobileMenu === true ? "open" : ""} button__burger`}>
            <span className="button__burger--item">
            </span>  
        </button>
        {showMobileMenu && <MobileMenu showMobileMenu={showMobileMenu }  />}
        </>
        )
      }
      export default BurgerButton