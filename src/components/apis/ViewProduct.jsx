import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner';

function ViewProduct() {

  const { id } = useParams();
  const [product, setProduct] = useState( null );//single product so null or empty object
  const [error, setError] = useState( null );
  const [loading, setLoading] = useState(true);

  console.log(id);
  console.log(typeof(id));

  useEffect( () =>{
    const fetchProducts = async() =>{
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        // if error in response like id not matching to respond
        if(!response.ok){
          if(response.status === 404){
            throw new Error("no product found ");
          }
          throw new Error(`Server Error ${response.status}`)
        }

        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
          setError(error);
      }finally{
        setLoading(false);
      }
  }
  fetchProducts();
  }, [id] );


  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
    <div>ViewProduct</div>
    {
      loading ? <Spinner /> :
      <ul key={product.id}>
        <li> {product.name}</li>
        <li> {product.price}</li>
        <li> {product.stock}</li>
      </ul>
    }
    </>
  )
}

export default ViewProduct