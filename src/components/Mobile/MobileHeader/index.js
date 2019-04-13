import React from 'react';
import DefaultMobileHeader from './DefaultMobileHeader'
import MobileHeaderSearchBar from './MobileHeaderSearchBar'
import withSearchField from '../../../HOCs/withSearchField'

const MobileHeader = withSearchField(DefaultMobileHeader, MobileHeaderSearchBar);

export default MobileHeader;
