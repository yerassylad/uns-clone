import React from 'react'
import withSearchField from '../../../HOCs/withSearchField'

const Open = props => {
  const {onOpen} = props;
  return (
    <div>
      <button onClick={onOpen}>Open</button>
    </div>
  );
}

const Close = props => {
  const {onClose} = props;
  return (
    <div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

const OpenWithSearchField = withSearchField(Open, Close);

const MobileHeader = () => {
  return (
    <div>
      <OpenWithSearchField></OpenWithSearchField>
    </div>
  )
}

export default MobileHeader
