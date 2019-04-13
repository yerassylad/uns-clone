import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import makeMobileHeaderIcon from '../../../HOCs/makeMobileHeaderIcon'
import Grid from '../../Main/Grid';

const MobileHeaderHomeIcon = makeMobileHeaderIcon(FaHome);
const MobileHeaderSearchIcon = makeMobileHeaderIcon(FaSearch);

const DefaultMobileHeader = props => {
  const {onOpen} = props;
  const handleSearchIconClick = () => {
    console.log('asdads', props);
    onOpen && onOpen();
  }
  return (
      <Grid alignItems="center" justifyContent="space-around">
        <MobileHeaderHomeIcon size="2em" active />
        <MobileHeaderSearchIcon size="1.5em" onClick={handleSearchIconClick} />
      </Grid>
  )
}

export default DefaultMobileHeader
