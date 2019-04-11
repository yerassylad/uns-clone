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

  _determineDeviceType = () => {
    const {screenSizes} = this.props;
    const screenWidth = screenSizes.viewPortWidth;
    if (screenWidth > 991) {
      return 3;
    } else if (screenWidth <= 991 && screenWidth > 479) {
      return 2;
    } else if (screenWidth <= 479) {
      return 1
    }
  }

  componentDidMount = () => {
    window.addEventListener('resize', this._debouncedScreenSizesUpdater)
    this._debouncedScreenSizesUpdater()
  }

  componentWillMount = () => {
    window.removeEventListener('resize', this._debouncedScreenSizesUpdater)
  }

  render() {
    const {screenSizes} = this.props;
    const deviceType = this._determineDeviceType();
    return (
      <div>
        screenSize
        <div>
          width: {screenSizes.viewPortWidth}
        </div>
        <div>
          height: {screenSizes.viewPortHeight}
        </div>
        <div>
          {deviceType === 1 && "mobile"}
          {deviceType === 2 && "tablet"}
          {deviceType === 3 && "desktop"}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  screenSizes: state.core.screenSizes
})


export default connect(mapStateToProps, {updateScreenSizes})(App);
