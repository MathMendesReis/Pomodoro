import Logo from '../../../../assets/react.svg'
import Clock from '../../../../assets/clock.svg'
import MenuItem from '../../../../assets/menuItem.svg'
import { NavLink } from "react-router-dom";
import { HeaderContainer } from './styles';
export default function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
         <NavLink
          to="/">
            <img src={Clock} alt="" />
         </NavLink>
         <NavLink
          to="/hystory">
            <img  src={MenuItem} alt="" />
          </NavLink>
      </nav>
    </HeaderContainer>
  )
}
