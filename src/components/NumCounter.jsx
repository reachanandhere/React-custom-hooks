import React, { useEffect, useState } from 'react'
import useCustomEffect from '../hooks/useCustomEffect'

const NumCounter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }

    useCustomEffect(() => {
        console.log('Use Effect Called:', count)
    }, [count])

    console.log("Component Rendered")

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default NumCounter
