import React, { Component } from "react";
import { connect } from "react-redux";
import DesktopHeader from "./DesktopHeader";
import LaptopHeader from "./LaptopHeader";
import MobileHeader from '../../Mobile/MobileHeader'

export class Header extends Component {
  render() {
    const { deviceType } = this.props;
    return (
      <div>
        {deviceType === 1 && <MobileHeader />}
        {deviceType === 2 && <LaptopHeader />}
        {deviceType === 3 && <DesktopHeader />}
      </div>
    );
  }
}

export default connect(state => ({
  deviceType: state.core.deviceType
}))(Header);
