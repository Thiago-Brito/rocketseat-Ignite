import { styled } from 'styled-components'

export const HeaderContainer = styled.main`
  display: grid;
  gap: 11rem;
`

export const IntroText = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5.6rem;

  h1 {
    font-size: 4.8rem;
    font-family: Baloo 2;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1.6rem;
  }
  p {
    font-size: 2rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const TagsItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 5.6rem;
  gap: 3rem;

  > p {
    font-size: 1.6rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
    display: flex;
    gap: 0.8rem;
    align-items: center;
    white-space: nowrap;
  }
`
export const TagsImage = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;

  border-radius: 1000px;
`

export const CartTag = styled(TagsImage)`
  background: ${(props) => props.theme['yellow-dark']};
  svg {
    color: ${(props) => props.theme.white};
  }
`
export const TimerTag = styled(TagsImage)`
  background: ${(props) => props.theme.yellow};
  svg {
    color: ${(props) => props.theme.white};
  }
`
export const PackageTag = styled(TagsImage)`
  background: ${(props) => props.theme['base-text']};
  svg {
    color: ${(props) => props.theme.white};
  }
`

export const CoffeeTag = styled(TagsImage)`
  background: ${(props) => props.theme.purple};
  svg {
    color: ${(props) => props.theme.white};
  }
`

export const Foods = styled.div`
  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 3.2rem;
    font-family: Baloo 2;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 5.4rem;
  }
`
