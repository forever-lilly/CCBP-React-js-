import './index.css'

const PasswordManagerList = props => {
  const {itemsDetails, ondelete, isChanged} = props
  const {website, password, username, id} = itemsDetails

  const firstLetter = website[0].toUpperCase()

  const onClickDelete = () => {
    ondelete(id)
  }

  const passwordItem = isChanged ? (
    <p className="para">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  return (
    <li className="list-item-container">
      <div className="initial-section">{firstLetter}</div>
      <div className="text-cont">
        <p className="heading">{website}</p>
        <p className="para">{username}</p>
        {passwordItem}
      </div>
      <div className="button-cont">
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordManagerList
