import * as React from 'react';
import Lights from './Lights'
const Green = ({ isOn }) => {
    return (
        <Lights style={{
            backgroundColor: isOn ? "#00FF00" : "#00b300",
            boxShadow: isOn && "0 0 6em #33ff33"
        }} input={5} />
    )
}

export default Green
