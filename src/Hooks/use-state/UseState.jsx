import React, { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount((prev) => prev+1)
    }
  return (
    <div>
        <h1 className='font-bold text-6xl mb-6'>Count: {count}</h1>
        <button className='bg-white text-black px-2 font-bold py-1 rounded-sm cursor-pointer' onClick={increaseCount}>
            Increase Count
        </button>
    </div>
  )
}

export default UseState