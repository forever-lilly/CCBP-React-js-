// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedbackGiven: false}

  onClickFeedback = () => {
    this.setState({feedbackGiven: true})
  }

  render() {
    const {feedbackGiven} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    if (feedbackGiven) {
      return (
        <div className="container">
          <img src={loveEmojiUrl} className="image" alt="love emoji" />
          <h1 className="heading">Thank You!</h1>
          <p className="desc">
            We will use your feedback to improve our customer support experience
          </p>
        </div>
      )
    }
    return (
      <div className="container">
        <div className="feedback-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="emojis-container">
            {emojis.map(eachItem => (
              <li className="button" key={eachItem.id}>
                <img
                  src={eachItem.imageUrl}
                  className="emoji"
                  alt={eachItem.name}
                  onClick={this.onClickFeedback}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
