import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import determineScreenSize from "./libs/determineScreenSize";
import debounce from "./libs/debounce";
import updateScreenSizes from "./actions/Core/updateScreenSizes";
import updateDeviceType from "./actions/Core/updateDeviceType";
import Content from "./components/Main/Content";
import "./App.css";
import Header from "./components/Main/Header";
// import PhotoOfTheDay from './components/Main/PhotoOfTheDay'
// import InformationField from './components/Main/InformationField'

export class App extends Component {
  _debouncedScreenSizesUpdater = debounce(() => {
    const { updateScreenSizes } = this.props;
    const screenSizes = determineScreenSize();
    updateScreenSizes(screenSizes);
  }, 150);

  isBottom(el) {
    console.log(el);
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('header');
    if (this.isBottom(wrappedElement)) {
      console.log('header bottom reached');
    }
  };

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
    document.addEventListener('scroll', this.trackScrolling);
  };

  componentDidUpdate = prevProps => {
    const { screenSizes } = this.props;
    if (screenSizes !== prevProps.screenSizes) {
      this._deviceTypeUpdater();
    }
    document.removeEventListener('scroll', this.trackScrolling);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this._debouncedScreenSizesUpdater);
  };

  render() {
    const { deviceType } = this.props;
    return (
      <Fragment>
        <Header />
        <Content />
        <div id="header">header</div>
        <br />
        <br />
        <br />
        <br />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  screenSizes: state.core.screenSizes,
  deviceType: state.core.deviceType
});

export default connect(
  mapStateToProps,
  { updateScreenSizes, updateDeviceType }
)(App);
