import { PlaceList } from '../../organisms'

interface IShowPlaces {
  places: any
}

const ShowPlaces = ({ places }: IShowPlaces) => {
  //   console.log(places)
  return (
    <div>
      <p>Lugares</p>
      <p>6 lugares cadastrados</p>
      <PlaceList places={places} />
    </div>
  )
}

export default ShowPlaces
