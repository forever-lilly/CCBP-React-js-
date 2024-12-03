const UserInfo = () => {
  const dummy = 'wade warren'
  return (
    <div className="user-profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="user-profile-img"
      />
      <h1 className="user-profile-heading">{dummy}</h1>
      <p className="sub-heading">Software developer at UK</p>
    </div>
  )
}

export default UserInfo
