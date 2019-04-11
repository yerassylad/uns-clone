import React, { Component } from 'react';
import {connect} from 'react-redux';
import determineScreenSize from './libs/determineScreenSize';
import debounce from './libs/debounce';
import updateScreenSizes from './actions/Core/updateScreenSizes';

export class App extends Component {
  _debouncedScreenSizesUpdater = debounce(() => {
    const {updateScreenSizes} = this.props;
    const screenSizes = determineScreenSize();
    updateScreenSizes(screenSizes);
  }, 150)

  componentDidMount = () => {
    window.addEventListener('resize', this._debouncedScreenSizesUpdater)
    this._debouncedScreenSizesUpdater()
  }

  componentWillMount = () => {
    window.removeEventListener('resize', this._debouncedScreenSizesUpdater)
  }

  render() {
    const {screenSizes} = this.props;
    return (
      <div>
        screenSize
        <div>
          width: {screenSizes.viewPortWidth}
        </div>
        <div>
          width: {screenSizes.viewPortHeight}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  screenSizes: state.core.screenSizes
})


export default connect(mapStateToProps, {updateScreenSizes})(App);
