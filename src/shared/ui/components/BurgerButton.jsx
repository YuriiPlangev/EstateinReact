

      import { useState, useEffect } from "react";
      import MobileMenu from "../../../widgets/mobile-menu/MobileMenu"

function BurgerButton() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  // Блокируем/разблокируем скролл при изменении showMobileMenu
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMobileMenu]);

  return (
    <>
      <button
        onClick={toggleMobileMenu}
        className={`${showMobileMenu ? "open" : ""} button__burger`}
      >
        <span className="button__burger--item"></span>
      </button>

      {showMobileMenu && (
        <MobileMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      )}
    </>
  );
}

export default BurgerButton;
