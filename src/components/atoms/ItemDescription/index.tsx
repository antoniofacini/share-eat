interface IItemDescription {
  name?: string
  price?: string
  description?: string
  currency?: string
}

const ItemDescription = ({
  name = 'X Bacon',
  price = '20,50',
  description = 'Cat ipsum dolor sit amet, caticus cuteicus bathe private parts with tongue then lick',
  currency = 'R$',
}: IItemDescription) => (
  <div className="bg-gray-dark p-5 rounded-md text-white border-l-6 border-yellow inline-grid grid-cols-3 gap-2">
    <p className="font-bold	col-span-2">{name}</p>
    <p className="col-start-3 font-bold	text-end">
      {currency} {price}
    </p>
    <p className="col-span-3 font-light">{description}</p>
  </div>
)

export default ItemDescription
