import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import DesktopHeader from "./DesktopHeader";
import LaptopHeader from "./LaptopHeader";
import MobileHeader from "./MobileHeader";

export class Header extends Component {
  render() {
    const { width } = this.props;
    return (
      <Fragment>
        {width <= 479 && <MobileHeader />}
        {width > 479 && width <= 991 && <LaptopHeader />}
        {width > 991 && <DesktopHeader />}
      </Fragment>
    );
  }
}

export default connect(state => ({
  width: state.core.screenSizes.viewPortWidth
}))(Header);
