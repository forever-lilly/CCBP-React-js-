import './index.css'

const TableItem = props => {
  const {tableitem, clickItem} = props
  const {tabId, displayText} = tableitem

  const onClickFunction = () => {
    clickItem(tabId)
  }

  return (
    <li className="List">
      <button onClick={onClickFunction} className="select-btn">
        {displayText}
      </button>
    </li>
  )
}
export default TableItem
