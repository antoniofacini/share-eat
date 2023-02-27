import { useRouter } from 'next/router'
import PlaceCard from '../../molecules/PlaceCard'

interface IPlaceList {
  places: any
}

const PlaceList = ({ places }: IPlaceList) => {
  const { push } = useRouter()

  return (
    <div className="grid gap-4">
      {places.map((element: any) => (
        <PlaceCard
          key={element.id}
          name={element.name}
          description={`${element.menuItems.length} pratos`}
          handleList={() => push(`/${element.id}`)}
          handleAdd={() => push(`/${element.id}/adicionar-item`)}
        />
      ))}
    </div>
  )
}

export default PlaceList
