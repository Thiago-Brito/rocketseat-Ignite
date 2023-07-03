import { Food } from '../..'
import {
  CartButton,
  Counter,
  FoodContainer,
  PriceQuantityControl,
  TextIngredients,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

export function CardFood({ image, ingredients, title, subtitle, price }: Food) {
  const formattedPrice = price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  const [quantity, setQuantity] = useState(1)

  function handleMoreQuantity() {
    setQuantity((state) => state + 1)
  }
  function handleLessQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

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
            <Minus size={14} onClick={handleLessQuantity} />
            {quantity}
            <Plus size={14} onClick={handleMoreQuantity} />
          </Counter>
          <CartButton>
            <ShoppingCart weight="fill" size={22} />
          </CartButton>
        </div>
      </PriceQuantityControl>
    </FoodContainer>
  )
}
