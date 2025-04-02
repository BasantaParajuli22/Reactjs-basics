import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function FetchApiId() {
    const{ id } = useParams(); //destructure userId from useParams()
    // Convert string ID to number if needed
    const numericId = Number(id);
    console.log("ID from URL:", id, typeof id);
    const [user, setUser] = useState([ ]);// Initialize with empty array, not empty string

    useEffect( () =>{
        const handleFetch= async() =>{
            const response = await fetch(`http://localhost:3001/users/${numericId}`)
            //const response = await fetch(`http://localhost:3001/users/1`)
            const data = await response.json();
            setUser(data);
        }
        handleFetch();
    }, [id]); //rerun effect when userId is changed

  return (
    <>
    <div> after fetching data using id</div>
      <div>

       {
          <ul>
            <li>{ user.id } </li>
            <li>{ user.name } </li>
            <li>{ user.email } </li>
          </ul>
       }
      </div>
    </>
    )
}

export default FetchApiId