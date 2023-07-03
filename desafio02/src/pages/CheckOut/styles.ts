import { styled } from 'styled-components'

export const CheckOutContainer = styled.form`
  display: flex;
  gap: 3.2rem;
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    /* Title/Title XS */
    font-size: 1.8rem;
    font-family: Baloo 2;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 1.5rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`
