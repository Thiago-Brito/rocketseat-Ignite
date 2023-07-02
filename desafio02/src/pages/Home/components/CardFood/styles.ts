import { styled } from 'styled-components'

export const FoodContainer = styled.div`
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};
  text-align: center;
  position: relative;
  > img {
    position: absolute;
    top: -30px;
    left: 70px;
  }
  > h3 {
    color: ${(props) => props.theme['base-subtitle']};
    text-align: center;
    /* Title/Title S */
    font-size: 2rem;
    font-family: Baloo 2;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-top: 2rem;
    margin-bottom: 0.8rem;
  }
  > p {
    color: ${(props) => props.theme['base-label']};

    font-size: 1.4rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    padding: 0 20px;
  }
`

export const TextIngredients = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  padding-top: 11rem;
  > div {
    font-size: 1rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 4px 8px;
    border-radius: 100px;
  }
`

export const PriceQuantityControl = styled.div`
  display: flex;
  gap: 2.3rem;
  justify-content: center;
  align-items: center;
  margin-top: 34px;
  > p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1.4rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    > span {
      font-weight: bold;
      font-size: 2rem;
    }
  }

  > div {
    display: flex;
    gap: 8px;
    align-items: stretch;
  }
`

export const Counter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  font-size: 1.6rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['base-title']};
  svg {
    cursor: pointer;
    color: ${(props) => props.theme.purple};
  }
`

export const CartButton = styled.button`
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};
  border: none;
  cursor: pointer;
  svg {
    color: ${(props) => props.theme.white};
  }
`
