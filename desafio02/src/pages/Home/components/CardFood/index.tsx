import { FoodContainer, PriceQuantityControl, TextIngredients } from './styles'

export interface food {
  image: string
  ingredients: Array<string>
  title: string
  subtitle: string
  /*
  price: number */
}

export function CardFood({ image, ingredients, title, subtitle }: food) {
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
        <p>R</p>
      </PriceQuantityControl>
    </FoodContainer>
  )
}
