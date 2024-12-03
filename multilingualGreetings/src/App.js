import {Component} from 'react'
import './App.css'
import GetInput from './Component/GetInput'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
    currentImage: languageGreetingsList[0].imageUrl,
    currentImageText: languageGreetingsList[0].imageAltText,
  }

  updateClickId = (id, imageUrl, imageAltText) => {
    this.setState({
      activeId: id,
      currentImage: imageUrl,
      currentImageText: imageAltText,
    })
  }

  render() {
    const {activeId, currentImage, currentImageText} = this.state
    console.log(activeId)
    return (
      <div className="main-container">
        <h1>MUltilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(eachItems => (
            <GetInput
              key={eachItems.id}
              ListDetails={eachItems}
              updateClickId={this.updateClickId}
              activeIdTab={activeId === eachItems.id}
            />
          ))}
        </ul>
        <img src={currentImage} alt={currentImageText} />
      </div>
    )
  }
}
export default App
