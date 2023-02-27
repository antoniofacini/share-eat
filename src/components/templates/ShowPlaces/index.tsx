import { PlaceList } from '../../organisms'
import { Place } from '../../../../types/apiTypes'

interface IShowPlaces {
  places: Place[]
}

const ShowPlaces = ({ places }: IShowPlaces) => (
  <div className="grid gap-4">
    <h1 className="font-bold text-yellow text-4xl">Lugares</h1>
    <p className="text-white text-base font-light">{places.length} lugares cadastrados</p>
    <PlaceList places={places} />
  </div>
)

export default ShowPlaces
