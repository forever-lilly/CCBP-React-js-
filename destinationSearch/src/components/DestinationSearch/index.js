// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  getInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state

    const filterSearch = destinationsList.filter(eachDestinationList =>
      eachDestinationList.name
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    console.log(filterSearch)

    return (
      <div className="main-bg">
        <div className="search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="inside-search-container">
            <input
              className="input"
              onChange={this.getInput}
              value={searchInput}
              type="search"
              placeholder="search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-img"
              alt="search icon"
            />
            <ul className="listCon">
              {filterSearch.map(eachDestinationList => (
                <DestinationItem
                  destinationItem={eachDestinationList}
                  key={eachDestinationList.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
