import { CartTag, HeaderContainer, LocationTag } from './styles'
import logo from '../../assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <LocationTag>
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </LocationTag>
        <CartTag>
          <ShoppingCart size={22} weight="fill" />
        </CartTag>
      </nav>
    </HeaderContainer>
  )
}
