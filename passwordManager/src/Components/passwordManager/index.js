import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import PasswordManagerList from '../passwordManagerList/index'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    username: '',
    password: '',
    website: '',
    search: '',
    isChanged: false,
  }

  onchangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChecked = () => {
    this.setState(prevState => ({isChanged: !prevState.isChanged}))
  }

  onchangeSearch = event => {
    this.setState({search: event.target.value})
  }

  ondelete = id => {
    const {passwordList} = this.state
    const updateList = passwordList.filter(each => each.id !== id)
    this.setState({passwordList: updateList})
  }

  onchangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  NoPasswordsView = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />

      <p>No Passwords</p>
    </div>
  )

  onsubmitForm = event => {
    event.preventDefault()
    const {password, website, username} = this.state
    const newlist = {
      id: v4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newlist],
      website: '',
      username: '',
      password: '',
    }))
  }

  render() {
    const {
      passwordList,
      search,
      website,
      username,
      password,
      isChanged,
    } = this.state
    const searchList = passwordList.filter(each =>
      each.website.toLowerCase().includes(search.toLowerCase()),
    )
    const count = searchList.length

    return (
      <div className="main-bg">
        <div className="appLogoImgCon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="appLogoImg"
          />
        </div>

        <div className="password-con">
          <div className="add-new-password">
            <h1 className="newPasswordHeading">Add New Password</h1>
            <form className="detailsForm" onSubmit={this.onsubmitForm}>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="fromLogo"
                />
                <input
                  type="text"
                  value={website}
                  placeholder="Enter Website"
                  onChange={this.onchangeWebsite}
                  className="input-password"
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="fromLogo"
                />
                <input
                  type="text"
                  value={username}
                  placeholder="Enter Username"
                  onChange={this.onchangeUsername}
                  className="input-password"
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="fromLogo"
                />
                <input
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  onChange={this.onchangePassword}
                  className="input-password"
                />
              </div>
              <div className="add-btn-container">
                <button type="submit" className="add-btn">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="password-manager-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="passwordMangerImg"
            />
          </div>
        </div>

        <div className="Your-password-con">
          <div className="your-password-navbar">
            <div className="your-password-heading-con">
              <h1 className="password">Your Passwords</h1>
              <p className="password-count">{count}</p>
            </div>
            <div className="your-password-search-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-img"
              />
              <input
                type="search"
                placeholder="search"
                onChange={this.onchangeSearch}
                className="search-input"
              />
            </div>
          </div>
          <hr />
          <div className="show-password-container">
            <input
              type="checkbox"
              id="showPassword"
              checked={isChanged}
              onChange={this.onChecked}
            />
            <label htmlFor="showPassword" className="showPassword">
              Show passwords
            </label>
          </div>
          <div>
            {count === 0 ? (
              this.NoPasswordsView()
            ) : (
              <ul>
                {searchList.map(eachItems => (
                  <PasswordManagerList
                    key={eachItems.id}
                    itemsDetails={eachItems}
                    isChanged={isChanged}
                    ondelete={this.ondelete}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
