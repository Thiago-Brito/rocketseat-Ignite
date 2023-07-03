import { styled } from 'styled-components'

export const PayoutFormContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};
`

export const TextPayOut = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  svg {
    color: ${(props) => props.theme.purple};
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

export const MethodsPayment = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
  > div {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 13px;

    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    padding: 16px;
    border: 1px solid transparent;

    color: ${(props) => props.theme['base-text']};
    /* Components/Button S */
    font-size: 1.2rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    cursor: pointer;
    white-space: nowrap;
    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  .active {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`
