import {AiOutlineDelete} from 'react-icons/ai'

const SongsItem = props => {
  const {songDetails, deleteItem} = props
  const {id, imageUrl, genre, name, duration} = songDetails

  const deleteAbleItem = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div>
        <img src={imageUrl} alt=" track" />
      </div>
      <div>
        <p>{name}</p>
        <p>{genre}</p>
      </div>
      <div>
        <p>{duration}</p>
        <button type="button" testid="delete" onClick={deleteAbleItem}>
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default SongsItem
