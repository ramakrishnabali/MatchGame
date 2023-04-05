import './index.css'

const ThumbnailImage = props => {
  const {thumbnail, isSameImage} = props

  const {thumbnailUrl, imageUrl} = thumbnail

  const matchImage = () => {
    isSameImage(imageUrl)
  }

  return (
    <li className="thumbnailListContainer">
      <button onClick={matchImage} type="button" className="thumbnailButton">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnailImage" />
      </button>
    </li>
  )
}

export default ThumbnailImage
