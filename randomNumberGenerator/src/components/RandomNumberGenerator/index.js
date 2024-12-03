// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onclickFunction = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({
      number: prevState.number + randomNumber,
    }))
  }

  render() {
    const {number} = this.state

    return (
      <div className="main-heading">
        <div className="sub-container">
          <h1 className="heading"> Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" type="submit" onClick={this.onclickFunction}>
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
