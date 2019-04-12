import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import determineScreenSize from "./libs/determineScreenSize";
import debounce from "./libs/debounce";
import updateScreenSizes from "./actions/Core/updateScreenSizes";
import updateDeviceType from "./actions/Core/updateDeviceType";
import Desktop from "./components/Desktop";
import Tablet from "./components/Tablet";
import Mobile from "./components/Mobile";
import PhotoOfTheDay from "./components/Main/PhotoOfTheDay";
import InformationField from "./components/Main/InformationField";
import Wrapper from "./components/Main/Wrapper";
import "./App.css";
import Header from "./components/Main/Header";

export class App extends Component {
  _debouncedScreenSizesUpdater = debounce(() => {
    const { updateScreenSizes } = this.props;
    const screenSizes = determineScreenSize();
    updateScreenSizes(screenSizes);
  }, 150);

  _deviceTypeUpdater = () => {
    const { updateDeviceType } = this.props;
    const deviceType = this._determineDeviceType();
    updateDeviceType(deviceType);
  };

  _determineDeviceType = () => {
    const { screenSizes } = this.props;
    const screenWidth = screenSizes.viewPortWidth;
    if (screenWidth > 991) {
      return 3;
    } else if (screenWidth <= 991 && screenWidth > 479) {
      return 2;
    } else if (screenWidth <= 479) {
      return 1;
    }
  };

  componentDidMount = () => {
    window.addEventListener("resize", this._debouncedScreenSizesUpdater);
    this._debouncedScreenSizesUpdater();
  };

  componentDidUpdate = prevProps => {
    const { screenSizes } = this.props;
    if (screenSizes !== prevProps.screenSizes) {
      this._deviceTypeUpdater();
    }
  };

  componentWillMount = () => {
    window.removeEventListener("resize", this._debouncedScreenSizesUpdater);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div>content</div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  screenSizes: state.core.screenSizes
});

export default connect(
  mapStateToProps,
  { updateScreenSizes, updateDeviceType }
)(App);
