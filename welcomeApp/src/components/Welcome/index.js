import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onclickfunction = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  render() {
    const {isSubscribe} = this.state
    const buttonText = isSubscribe ? 'Subscribe' : 'Subscribed'

    return (
      <div className="welcome-container">
        <h1 className="heading"> Welcome</h1>
        <h2 className="para">Thank you! Happy Learning</h2>
        <div>
          <button className="btn" type="submit" onClick={this.onclickfunction}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
