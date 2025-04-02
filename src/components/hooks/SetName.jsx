import React from 'react'
import { useState } from 'react'

function SetName() {
  const [name, setName] =useState("");

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value) } />
    </>
  )
}

export default SetName