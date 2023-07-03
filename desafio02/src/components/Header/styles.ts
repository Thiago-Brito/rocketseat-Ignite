import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 3.2rem 0;
  margin-bottom: 9.4rem;
  > img {
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 1.2rem;
    align-items: center;
  }
`

export const Tag = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`

export const LocationTag = styled(Tag)`
  gap: 4px;
  font-size: 1.4rem;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const CartTag = styled(Tag)`
  cursor: pointer;
  background: ${(props) => props.theme['yellow-light']};
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
