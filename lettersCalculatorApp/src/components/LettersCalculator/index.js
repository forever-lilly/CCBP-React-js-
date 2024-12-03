import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChangeInput = event => {
    this.setState({
      count: event.target.value,
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="search-container">
          <h1>Calculate the Letters you enter</h1>
          <div className="text">
            <label htmlFor="input">Enter the phrase</label>
            <br />
            <input
              id="input"
              placeholder="calculator"
              type="text"
              onChange={this.onChangeInput}
            />
            <p>No.of letters: {count.length}</p>
          </div>
        </div>
        <div className="img-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
