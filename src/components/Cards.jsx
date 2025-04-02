import React, { useEffect } from 'react'
import Card from './Card'
import { useState } from 'react'
import Spinner from './Spinner';


function Cards() {

  const [loading, setLoading] = useState(true);//set loading to true
  const [error, setError] = useState(null);
  const [customers, setCustomers] = useState([]);

  useEffect( () =>{

    const fetchCustomerOrder =  async() =>{
      try {
        const response = await fetch(`http://localhost:3001/orders`);
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        setError(error);
      } finally{
        setLoading(false);
      }
    }

    fetchCustomerOrder();
  }, [] )

  if(error){
    return <div>error during fetching{error}</div>
  }
  return(
   <>
    {
      loading ? ( <Spinner /> ) :
      customers.map( (customer) => (
          <Card key={customer.orderId} card={customer} />
      ))
    }
   </>
  )
}


export default Cards