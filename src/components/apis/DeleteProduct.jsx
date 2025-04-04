import React from 'react'
import { useState } from 'react';

function DeleteProduct( {id} ) {

  const [product, setProduct] = useState( [] );
  const [error, setError] = useState( null );

    const handleDelete = async (  ) =>{
        try {
            const response = await fetch(`http://localhost:3001/products/${id}`,{ method : 'DELETE' });
            const data = await response.json();
            if(!response.ok){
                if(response.status === 404){
                    throw new Error("product not found to delete");
                }
                throw new Error("server not found ");
            }

        } catch (error) {
            setError(error.Message);
            console.log(error.Message);
        }
      }
  return (
    <button onClick={ () => handleDelete(product.id) }> Delete</button>
  )
}

export default DeleteProduct