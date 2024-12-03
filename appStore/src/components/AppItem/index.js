import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <li className="list">
      <img src={imageUrl} alt={appName} className="app-list-img" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
