import ItemDescription from '../../atoms/ItemDescription'
import { Item } from '../../../../types/apiTypes'

interface IShowItems {
  items: Item[]
}

const ShowItems = ({ items }: IShowItems) => (
  <div className="grid gap-4">
    {items.map((element: Item) => (
      <ItemDescription
        key={element.name}
        name={element.name}
        description={element.description}
        price={element.price.toFixed(2).replace('.', ',')}
      />
    ))}
  </div>
)

export default ShowItems
