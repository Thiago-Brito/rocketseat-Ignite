import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { MethodsPayment, PayoutFormContainer, TextPayOut } from './styles'
import { useState } from 'react'

export function PayoutForm() {
  const [payoutId, setPayoutId] = useState(0)
  return (
    <PayoutFormContainer>
      <TextPayOut>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </TextPayOut>
      <MethodsPayment>
        <div
          onClick={() => {
            setPayoutId(1)
          }}
          className={payoutId === 1 ? 'active' : ''}
        >
          <CreditCard size={18} />
          Cartão de crédito
        </div>
        <div
          onClick={() => {
            setPayoutId(2)
          }}
          className={payoutId === 2 ? 'active' : ''}
        >
          <Bank size={18} />
          cartão de débito
        </div>
        <div
          onClick={() => {
            setPayoutId(3)
          }}
          className={payoutId === 3 ? 'active' : ''}
        >
          <Money size={18} />
          dinheiro
        </div>
      </MethodsPayment>
    </PayoutFormContainer>
  )
}
