import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner';

function FetchApi() {
   // const{ userId } = useParams(); //destructure userId from useParams()
    const [users, setUsers] = useState([ ]);// Initialize with empty array, not empty string
    const [loading, setLoading] = useState(true);//set loading to true
    const [error, setError] = useState(null);

    useEffect( () =>{
      const handleFetch= async() =>{//fn
        try {
          const response = await fetch(`http://localhost:3001/users`);
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.log("Error while fetching data ");
          setError(error);
        }finally{
          setLoading(false);
        }
      }//fetch fn end

      handleFetch();
    }, []);

    if (error) {
      return <div>Error: {error}</div>; // Display error message
    }

  return (
    <>
    <div> after fetching users data</div>

    {/* if loading then display spinner else data */}
     { loading ? ( <Spinner /> ) :

        users.map( u=>(
          <ul key={u.id}>
            <li>{ u.id } </li>
            <li>{ u.name } </li>
            <li>{ u.email } </li>
          </ul>
        ))
       }
    </>
    )
}

export default FetchApi