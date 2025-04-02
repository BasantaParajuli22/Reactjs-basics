import React, { useState } from 'react'
import { useEffect } from 'react'

function ChangeIntervalPage() {
    const [time,setTime] = useState(0);

    useEffect( () =>{
        const timer = setInterval(() =>{
          setTime((time)=>  time+1)
        },1000);
        return  () =>{
          clearInterval(timer);
        };
    },[]);

  return (
    <div>{time}</div>
  )
}

export default ChangeIntervalPage