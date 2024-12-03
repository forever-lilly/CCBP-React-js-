import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import './App.css'

const IntiWordsList = []
class App extends Component {
  state = {
    inputByUser: '',
    WordsList: IntiWordsList,
  }

  onChangeInput = event => {
    this.setState({inputByUser: event.target.value})
  }

  onClickSearch = event => {
    event.preventDefault()

    const {inputByUser, WordsList} = this.state

    if (inputByUser !== '') {
      const newData = {
        id: uuidV4(),
        word: inputByUser,
        count: inputByUser.length,
      }
      this.setState(prevState => ({
        WordsList: [...prevState.WordsList, newData],
        inputByUser: '',
      }))
    }
  }

  render() {
    const {inputByUser, WordsList} = this.state
    console.log(inputByUser)
    console.log(WordsList)
    const lengthOfList = WordsList.length

    return (
      <div className="main_background">
        <div className="Box_background">
          <div className="yellowCard">
            <h1 className="count_heading">
              Count the characters like a Boss...
            </h1>
            {lengthOfList === 0 ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <ul>
                {WordsList.map(eachItems => (
                  <li key={eachItems.id}>
                    {eachItems.word} {eachItems.count}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="blue_card">
            <h1 className="character">Character Counter</h1>

            <form onSubmit={this.onClickSearch}>
              <input
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.onChangeInput}
                value={inputByUser}
              />
              <button className="addBtn">Add</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
