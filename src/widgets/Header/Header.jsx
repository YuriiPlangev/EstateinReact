
import LogoIcon from '../../shared/assets/icon/LogoIcon'
import BurgerButton from '../../shared/ui/components/BurgerButton'
import ContactButton from './ui/ContactButton'
import HeaderNav from './ui/HeaderNav'
function Header () {
    return (
           <header className="header ">
      <LogoIcon />
      <HeaderNav />
      <ContactButton />
      <BurgerButton />
    </header>

    )
}
export default Header