import React, { Component } from "react";
import { connect } from "react-redux";
import determineScreenSize from "./libs/determineScreenSize";
import debounce from "./libs/debounce";
import updateScreenSizes from "./actions/Core/updateScreenSizes";
import Desktop from "./components/Desktop";
import Tablet from "./components/Tablet";
import Mobile from "./components/Mobile";
import PhotoOfTheDay from "./components/Main/PhotoOfTheDay";
import InformationField from "./components/Main/InformationField";
import Wrapper from "./components/Main/Wrapper";

export class App extends Component {
  _debouncedScreenSizesUpdater = debounce(() => {
    const { updateScreenSizes } = this.props;
    const screenSizes = determineScreenSize();
    updateScreenSizes(screenSizes);
  }, 150);

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

  componentWillMount = () => {
    window.removeEventListener("resize", this._debouncedScreenSizesUpdater);
  };

  render() {
    const { screenSizes } = this.props;
    const deviceType = this._determineDeviceType();
    return (
      <div>
        screenSize
        <div>width: {screenSizes.viewPortWidth}</div>
        <div>height: {screenSizes.viewPortHeight}</div>
        <div>
          {deviceType === 1 && <Mobile />}
          {deviceType === 2 && <Tablet />}
          {deviceType === 3 && <Desktop />}
        </div>
        <div>
          <PhotoOfTheDay image="https://pp.userapi.com/c845321/v845321466/4ffc0/POC4p8QbgKU.jpg">
            <Wrapper>
              <div
                style={{ width: "100%", height: "100px", background: "yellow" }}
              >
                1
              </div>
            </Wrapper>
            <InformationField>
              <div>Unsplash-Clone by Aitkazy Yerassyl</div>
              <div>yerassyl@gmail.com</div>
              <div>+77774836984</div>
            </InformationField>
          </PhotoOfTheDay>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  screenSizes: state.core.screenSizes
});

export default connect(
  mapStateToProps,
  { updateScreenSizes }
)(App);
