import {Component} from 'react'
import './index.css'

class Table extends Component {
  state = {content: '', isSaved: false}

  onChangeSearchInput = event => {
    this.setState({content: event.target.value})
  }

  onButtonClick = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    const {content, isSaved} = this.state

    return (
      <div className="mainContainer">
        <div className="box">
          <h1 className="head">Editable Text Input</h1>
          <div className="mini">
            {isSaved ? (
              <>
                <p className="para">{content}</p>
                <button
                  type="button"
                  onClick={this.onButtonClick}
                  className="button"
                >
                  Edit
                </button>
              </>
            ) : (
              <>
                <input
                  className="input"
                  value={content}
                  onChange={this.onChangeSearchInput}
                />
                <button
                  type="button"
                  onClick={this.onButtonClick}
                  className="button"
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Table
