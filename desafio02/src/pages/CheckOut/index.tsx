import { LocationForm } from './LocationForm'
import { CheckOutContainer } from './styles'

export function CheckOut() {
  return (
    <CheckOutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <LocationForm />
      </div>
      <div>
        <h2>Cafés selecionados</h2>
      </div>
    </CheckOutContainer>
  )
}
