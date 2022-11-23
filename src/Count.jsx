import React from 'react'
import {useState} from 'react'

export const Count = () => {

    const [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={() => { setCount(count + 1)}}>Increase</button>
        <button onClick={() => {setCount(count - 1)}}>Decrease</button>
        <button onClick={() => {setCount(0)}}>Set to zero</button>
        
      {count}
    </div>
  )
}
