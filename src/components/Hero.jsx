import React from 'react'

function Hero({title ='i am the king by default',subtitle='king is everybody'}) {
  return (
    <>
        <div>{title}</div>
        <div>{subtitle}</div>
    </>
  )
}

export default Hero