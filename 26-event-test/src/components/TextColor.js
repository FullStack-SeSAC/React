import React, { useState } from 'react'

function TextColor() {
    const [color, setColor] = useState('black');
  return (
        <>
            {/* <div>TextColor</div> */}
            <h1 style={{ color: color }}>TextColor</h1>
            <button onClick={() => {
                setColor('red');
            }}>빨간색</button>
            <button onClick={() => {setColor('blue')}}
            >파란색</button>
        </>
  )
}

export default TextColor