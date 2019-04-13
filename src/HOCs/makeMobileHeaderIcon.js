import React from 'react';
import styled from 'styled-components';
import getDisplayName from '../libs/getDisplayName'

const makeMobileHeaderIcon = Icon => {
    const MakeMobileHeaderIcon = styled(({active, size, color, ...rest}) => <Icon {...rest} />)`
        color: ${props => props.active ? 'black' : 'grey'};
        font-size: ${props => props.size};
        cursor: ${props => props.active ? 'auto' : 'pointer'};
    `;

    MakeMobileHeaderIcon.displayName = `MobileHEaderIcon(${getDisplayName(Icon)})`;

    return MakeMobileHeaderIcon;
}

export default makeMobileHeaderIcon;