import React, { Component } from 'react'
import determineScreenSize from './libs/determineScreenSize'
import debounce from './libs/debounce';

const debouncedScreenSize = debounce(determineScreenSize, 150);

export class App extends Component {
  componentDidMount = () => {
    window.addEventListener('resize', debouncedScreenSize)
  }

  componentWillMount = () => {
    window.removeEventListener('resize', debouncedScreenSize)
  }

  render() {
    return (
      <div>
        screenSize
      </div>
    )
  }
}

export default App
