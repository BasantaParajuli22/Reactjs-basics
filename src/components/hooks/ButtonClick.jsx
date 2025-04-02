import React from 'react'
import { useState } from 'react'

function ButtonClick() {
    const [click, setClick] = useState(0);

    const setButtonClick = () =>{
        setClick(click + 1)
    }
    return (
        <button onClick={setButtonClick}>{click}</button>
  )
}

export default ButtonClick