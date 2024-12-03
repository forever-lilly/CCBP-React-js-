import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {className, description, title, imgUrl} = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-paragraph">{description}</p>
      <div>
        <img src={imgUrl} className="card-img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
