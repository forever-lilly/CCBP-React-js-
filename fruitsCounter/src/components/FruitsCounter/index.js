// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangos: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mangos, banana} = this.state

    return (
      <div className="main-fruit-background">
        <div className="fruit-background">
          <h1 className="heading">
            Bob ate<span className="spanElement"> {mangos} </span>mangoes
            <span className="spanElement"> {banana} </span>bananas
          </h1>
          <div className="think-background">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img-fruit"
                alt="mango"
              />
              <button type="submit" className="btn" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img-fruit"
                alt="banana"
              />
              <button type="submit" className="btn" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
