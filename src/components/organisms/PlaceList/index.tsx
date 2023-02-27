import { useRouter } from 'next/router'
import PlaceCard from '../../molecules/PlaceCard'

interface IPlaceList {
  places: any
}

const PlaceList = ({ places }: IPlaceList) => {
  const router = useRouter()

  return (
    <div className="grid gap-4">
      {places.map((element: any) => (
        <PlaceCard
          key={element.id}
          name={element.name}
          description={element.menuItems.length + ' pratos'}
          handleList={() => router.push(`/${element.id}`)}
          handleAdd={() => router.push(`/${element.id}/adicionar-item`)}
        />
      ))}
    </div>
  )
}

export default PlaceList
