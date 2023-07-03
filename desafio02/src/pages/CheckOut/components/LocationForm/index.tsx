import { MapPinLine } from 'phosphor-react'
import {
  Input,
  LocationFormContainer,
  MinorsInput,
  OptionalInput,
  SectionInputs,
  TextLocation,
  ThreeColumns,
  TwoColumns,
} from './styles'

export function LocationForm() {
  return (
    <LocationFormContainer>
      <TextLocation>
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </TextLocation>
      <SectionInputs>
        <MinorsInput type="text" placeholder="CEP" />
        <Input type="text" placeholder="RUA" />
        <TwoColumns>
          <MinorsInput type="text" placeholder="Número" />
          <OptionalInput>
            <span>Opcional</span>
            <Input type="text" placeholder="Complemento" />
          </OptionalInput>
        </TwoColumns>
        <ThreeColumns>
          <MinorsInput type="text" placeholder="Bairro" />
          <div>
            <Input type="text" placeholder="Cidade" />
            <Input type="text" placeholder="UF" />
          </div>
        </ThreeColumns>
      </SectionInputs>
    </LocationFormContainer>
  )
}
