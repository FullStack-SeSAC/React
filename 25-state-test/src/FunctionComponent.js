import React, { useState } from 'react'

export default function FunctionComponent() {
    const [num, setnum] = useState(0);

    const increase = () => {
        setnum(num +1);
    }
    const decrease = () => {
        setnum(num - 2);
    }
    return (
    <>
        <div>FunctionComponent</div>
        <div>{num}</div>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-2</button>
    </>
    
  )
}
