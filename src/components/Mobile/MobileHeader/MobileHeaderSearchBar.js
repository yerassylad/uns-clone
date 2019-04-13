import React from 'react'

const MobileHeaderSearchBar = props => {
    const {onClose} = props;
    const handleCancelButtonClick = () => {
        console.log('====>', props);
        onClose && onClose();
    }
    return (
        <div>
            <span>asdasd</span>
            <span><button onClick={handleCancelButtonClick}>asdasd</button></span>
        </div>
    )
}

export default MobileHeaderSearchBar
