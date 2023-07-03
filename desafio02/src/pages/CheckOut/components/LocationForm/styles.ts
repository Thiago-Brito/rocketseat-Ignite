import { styled } from 'styled-components'

export const LocationFormContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const TextLocation = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
  > div {
    > h3 {
      color: ${(props) => props.theme['base-subtitle']};
      /* Text/Regular M */
      font-size: 1.6rem;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
    > p {
      color: ${(props) => props.theme['base-text']};
      /* Text/Regular S */
      font-size: 1.4rem;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
    }
  }
  margin-bottom: 32px;
`

export const SectionInputs = styled.div`
  display: grid;
  gap: 15px;
  width: 56rem;
`

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  padding: 12px;

  color: ${(props) => props.theme['base-text']};
  font-size: 1.2rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-size: 1.2rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const MinorsInput = styled(Input)`
  max-width: 200px;
`

export const TwoColumns = styled.div`
  display: flex;
  gap: 12px;
`

export const ThreeColumns = styled.div`
  display: flex;
  gap: 12px;
  > div {
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    gap: 12px;
  }
`

export const OptionalInput = styled.div`
  width: 100%;
  position: relative;

  > span {
    position: absolute;
    right: 0;
    padding: 12px;

    color: ${(props) => props.theme['base-label']};
    font-size: 1.2rem;
    font-family: Roboto;
    font-style: italic;
    font-weight: 400;
    line-height: 130%;
  }
`
