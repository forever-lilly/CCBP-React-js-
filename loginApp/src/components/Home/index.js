// Write your code here

import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  changeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let messageEle
    let btnEle

    if (isLogin) {
      messageEle = <Message content="Welcome User" />
      btnEle = <Logout changeStatus={this.changeStatus} />
    } else {
      messageEle = <Message content="Please Login" />
      btnEle = <Login changeStatus={this.changeStatus} />
    }
    return (
      <div className="login-bg">
        <div className="login-card">
          {messageEle}
          {btnEle}
        </div>
      </div>
    )
  }
}

export default Home
