import { LocationForm } from './components/LocationForm'
import { OrderCoffee } from './components/OrderCoffee'
import { PayoutForm } from './components/PayoutForm'
import { CheckOutContainer } from './styles'

export function CheckOut() {
  return (
    <CheckOutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <LocationForm />
        <PayoutForm />
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <OrderCoffee />
      </div>
    </CheckOutContainer>
  )
}
