import React, { Component, Fragment } from 'react';
import getDisplayName from '../libs/getDisplayName'

const withSearchField = (MainComponent, SearchField) => {
  class WithSearchField extends Component {
    state = { isOpen: false}
  
    _handleOpenSearchField = () => this.setState({isOpen: true});
  
    _handleCloseSearchField = () => this.setState({isOpen: false});
  
    render() {
      const {isOpen} = this.state;
      return (
        <Fragment>
            {isOpen || <MainComponent onOpen={this._handleOpenSearchField} />}
            {isOpen && <SearchField onClose={this._handleCloseSearchField} />}
        </Fragment>
      )
    }
  }

  WithSearchField.displayName = `${getDisplayName(MainComponent)}-with-${getDisplayName(SearchField)}`;
  
  return WithSearchField;
}

export default withSearchField;