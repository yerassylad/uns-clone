import React from 'react';
import Grid from '../../Main/Grid'
import SearchBar from '../../Main/SearchBar'

const MobileHeaderSearchBar = props => {
    const {onClose} = props;
    const handleCancelButtonClick = () => {
        console.log('====>', props);
        onClose && onClose();
    }
    return (
        <Grid alignContent="space-between" alignItems="center">
            <SearchBar />
            <button onClick={handleCancelButtonClick}>cancel</button>
        </Grid>
    )
}

export default MobileHeaderSearchBar;
