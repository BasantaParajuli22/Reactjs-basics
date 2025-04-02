import React from 'react'
import { useState } from 'react'

function SetActive() {
  const [active, setActive] = useState(true);

  return (
    <>
      <button onClick={ ()=> setActive(!active)}>{active ? 'hello' : 'goodbye' }</button>
    </>
  )
}

export default SetActive