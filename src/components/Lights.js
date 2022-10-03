import React, { useState, useEffect } from 'react';


const Lights = ({ style, input }) => {

    const [value, setValue] = useState(input);
    useEffect(() => {
        const timer = value > 0 && setInterval(() => setValue(value - 1), 1000);
        return () => clearInterval(timer)
    }, [value])
    return (
        <button
            style={{
                position: 'relative',
                left: "50%",
                marginTop: 20,
                marginLeft: -40,
                marginBottom: 20,
                width: 80,
                height: 80,
                display: 'block',
                //backgroundColor: '#24046a',
                borderRadius: "100%",
                border: 'none',
                ...style
            }}>
            <h1> {value} </h1>
        </button>
    )
};
export default Lights;