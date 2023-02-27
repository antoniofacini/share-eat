import { AddButton } from '../../atoms'

interface IPlaceCard {
  name?: string
  description?: string
  handleList: () => void
  handleAdd: () => void
}

const PlaceCard = ({ name = 'Silva', description = '31 pratos', handleList, handleAdd }: IPlaceCard) => (
  <div className="flex gap-5 items-center">
    <div className="bg-gray-dark p-4 rounded-md text-white w-full" onClick={handleList}>
      <p>{name}</p>
      <p>{description}</p>
    </div>
    <AddButton handler={handleAdd} />
  </div>
)

export default PlaceCard
