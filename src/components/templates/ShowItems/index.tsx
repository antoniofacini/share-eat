import ItemDescription from '../../atoms/ItemDescription'

interface IShowItems {
  items: any
}

const ShowItems = ({ items }: IShowItems) => (
  <div className="grid gap-4">
    {items.map((element: any) => (
      <ItemDescription
        name={element.name}
        description={element.description}
        price={element.price.toFixed(2).replace('.', ',')}
      />
    ))}
  </div>
)

export default ShowItems
