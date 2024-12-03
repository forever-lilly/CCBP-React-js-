const Logout = props => {
  const {changeStatus} = props

  return (
    <button type="button" className="logout-btn" onClick={changeStatus}>
      Logout
    </button>
  )
}

export default Logout
