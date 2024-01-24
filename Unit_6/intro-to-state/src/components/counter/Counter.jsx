import React from 'react'

function Counter({count, increment, decrement}) {
    return (
        <span>
            Counter Value: {count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </span>
    )
}

export default Counter