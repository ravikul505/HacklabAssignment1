import * as React from 'react';

import Lights from './Lights'
const Yellow = ({ isOn }) => {
    return (
        <Lights style={{
            backgroundColor: isOn ? "#FFFF00" : "#b2b300",
            boxShadow: isOn && "0 0 6em #ffff33"
        }} input={10} />
    )
}

export default Yellow
