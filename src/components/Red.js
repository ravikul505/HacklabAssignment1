import * as React from 'react';

import Lights from './Lights'
const Red = ({ isOn }) => {
    return (
        < Lights style={{
            backgroundColor: isOn ? "#FF0000" : "#b30000",
            boxShadow: isOn && "0 0 6em #ff3333"
        }} input={15} />
    )
}
export default Red
