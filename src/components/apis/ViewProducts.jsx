import React from 'react'
import Spinner from '../Spinner';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DeleteProduct from './DeleteProduct';


function ViewProducts() {

  const navigate = useNavigate();
  const [products, setProducts] = useState( [] );
  const [error, setError] = useState( null );
  const [loading, setLoading] = useState(true);

  useEffect( () =>{
    const fetchProducts = async() =>{
      try {
        const response = await fetch(`http://localhost:3001/products`);
        const data = await response.json();

        setProducts(data);//loading data
      } catch (error) {
          setError(error);
      }finally{
        setLoading(false);
      }
  }
  fetchProducts();
  }, [] );

  //delete product
  // const handleDelete = async ( id ) =>{
  //   try {
  //       const response = await fetch(`http://localhost:3001/products/${id}`,{ method : 'DELETE' });
  //       const data = await response.json();
  //       if(!response.ok){
  //           if(response.status === 404){
  //               throw new Error("product not found to delete");
  //           }
  //           throw new Error("server not found ");
  //       }
  //       // Remove the deleted product from state
  //       setProducts(products.filter(product => product.id !== id));

  //   } catch (error) {
  //       setError(error.Message);
  //       console.log(error.Message);
  //   }
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
  <>
    <div>ViewProducts</div>
    {
      loading ? <Spinner /> :
      products.map( product => (
        <ul key={product.id}>
          <li>{product.id} {product.name} :: {product.price} stock :{product.stock}</li>
          <button onClick={ () => navigate(`/products/${product.id}`)}> View deatils</button>
          {/* <button onClick={ () => handleDelete(product.id) }> Delete</button> */}
          <DeleteProduct id={product.id} />
          <Link to={`/products/update/${product.id}`}>Edit</Link>

        </ul>
      ))
    }
  </>
  )
}

export default ViewProducts