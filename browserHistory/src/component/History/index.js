import './index.css'

const History = props => {
  const {getHistoryDetails, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = getHistoryDetails
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div className="list-con">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />

        <p className="history-title">{title}</p>
        <p className="">{domainUrl}</p>
      </div>
      <div>
        <button data-testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default History
