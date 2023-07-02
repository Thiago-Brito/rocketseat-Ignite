import { Food } from '../..'
import {
  CartButton,
  Counter,
  FoodContainer,
  PriceQuantityControl,
  TextIngredients,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function CardFood({ image, ingredients, title, subtitle, price }: Food) {
  const formattedPrice = price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return (
    <FoodContainer>
      <img src={image} alt="" />

      <TextIngredients>
        {ingredients.map((ingredient) => (
          <div key={ingredient}>{ingredient}</div>
        ))}
      </TextIngredients>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <PriceQuantityControl>
        <p>
          R$ <span>{formattedPrice}</span>
        </p>
        <div>
          <Counter>
            <Minus size={14} />
            1
            <Plus size={14} />
          </Counter>
          <CartButton>
            <ShoppingCart weight="fill" size={22} />
          </CartButton>
        </div>
      </PriceQuantityControl>
    </FoodContainer>
  )
}
