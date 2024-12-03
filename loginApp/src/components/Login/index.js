const Login = props => {
  const {changeStatus} = props

  return (
    <button type="submit" className="login-btn" onClick={changeStatus}>
      Login
    </button>
  )
}

export default Login
