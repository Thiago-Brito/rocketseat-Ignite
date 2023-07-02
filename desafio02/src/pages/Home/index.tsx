import {
  CartTag,
  CoffeeTag,
  Foods,
  HeaderContainer,
  IntroText,
  PackageTag,
  TagsItems,
  TimerTag,
} from './styles'
import mainImage from '../../assets/main-image.png'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { CardFood } from './components/CardFood'
import Coffee1 from '../../assets/coffee1.png'

export interface Food {
  id: number
  image: string
  ingredients: string[]
  title: string
  subtitle: string
  price: number
}

export function Home() {
  const foods: Food[] = [
    {
      id: 1,
      image: Coffee1,
      ingredients: ['Tradicional'],
      title: 'Expresso Tradicional',
      subtitle: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 2,
      image: Coffee1,
      ingredients: ['Tradicional'],
      title: 'Expresso Tradicional',
      subtitle: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 3,
      image: Coffee1,
      ingredients: ['Tradicional'],
      title: 'Expresso Tradicional',
      subtitle: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 4,
      image: Coffee1,
      ingredients: ['Tradicional'],
      title: 'Expresso Tradicional',
      subtitle: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 5,
      image: Coffee1,
      ingredients: ['Tradicional'],
      title: 'Expresso Tradicional',
      subtitle: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 6,
      image: Coffee1,
      ingredients: ['Tradicional'],
      title: 'Expresso Tradicional',
      subtitle: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
  ]

  return (
    <HeaderContainer>
      <IntroText>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <TagsItems>
            <p>
              <CartTag>
                <ShoppingCart weight="fill" />
              </CartTag>
              Compra simples e segura
            </p>
            <p>
              <PackageTag>
                <Package weight="fill" />
              </PackageTag>
              Embalagem mantém o café intacto
            </p>

            <p>
              <TimerTag>
                <Timer weight="fill" />
              </TimerTag>
              Entrega rápida e rastreada
            </p>
            <p>
              <CoffeeTag>
                <Coffee weight="fill" />
              </CoffeeTag>
              O café chega fresquinho até você
            </p>
          </TagsItems>
        </div>
        <div>
          <img src={mainImage} alt="" />
        </div>
      </IntroText>
      <Foods>
        <h2>Nossos cafés</h2>
        <div>
          {foods.map((food) => (
            <CardFood key={food.id} {...food} />
          ))}
        </div>
      </Foods>
    </HeaderContainer>
  )
}
