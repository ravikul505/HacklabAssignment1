import React, { useState, useEffect } from 'react';

const Counter = () => {

    const [value, setValue] = useState(15);

    return (
        <div>
            <h1>{value}</h1>
        </div>
    )
}

export default Counter