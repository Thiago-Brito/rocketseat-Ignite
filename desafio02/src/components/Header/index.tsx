import { CartTag, HeaderContainer, LocationTag } from './styles'
import logo from '../../assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <LocationTag>
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </LocationTag>
        <NavLink to="checkout" title="carrinho">
          <CartTag>
            <ShoppingCart size={22} weight="fill" />
          </CartTag>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
