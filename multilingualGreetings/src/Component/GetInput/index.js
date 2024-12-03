import './index.css'

const GetInput = props => {
  const {ListDetails, updateClickId, activeIdTab} = props
  const {id, buttonText, imageUrl, imageAltText} = ListDetails

  const updateTheId = () => {
    updateClickId(id, imageUrl, imageAltText)
  }
  const activeId = activeIdTab ? 'active-tab' : ''
  return (
    <li>
      <button type="button" onClick={updateTheId} className={activeId}>
        {buttonText}
      </button>
    </li>
  )
}

export default GetInput
