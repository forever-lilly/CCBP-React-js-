import './index.css'

const Thumbnailltem = props => {
  const {imagesList, clickedItem, isClicked} = props
  const {thumbnailUrl, thumbnailAltText, id} = imagesList

  const onClickFunction = () => {
    clickedItem(id)
  }
  const ImgClassName = isClicked ? 'img-clicked' : ''

  return (
    <li className={`listItem ${ImgClassName}`}>
      <button onClick={onClickFunction} className="btn">
        <img src={thumbnailUrl} alt={thumbnailAltText} className="list-img " />
      </button>
    </li>
  )
}

export default Thumbnailltem
