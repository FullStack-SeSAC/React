import React, { useState } from 'react'

function Visible() {
    const [state, setState] = useState('사라져라');

  return (
    <>
        {state && <h1>안녕하세요</h1>}
        <button onClick={() => {
            setState(!state);
        }}>
            {state ? '사라져라' : '보여라'}
        </button>
    </>
  )
}

export default Visible