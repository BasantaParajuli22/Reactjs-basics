import React from 'react';
import AddNewProduct from './apis/AddNewProduct';

function ProductManagement() {
  const [error, setError] = React.useState(null);

  const handleAddProduct = async (newProduct) => {
    try {
      const API_URL = 'http://localhost:3001/products'; // json server port
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add product');
      }

      console.log('Product added successfully');
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Full error:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <div className="error">{error}</div>}
      {/* passing handleAddProduct fn as prop to AddNewProduct */}
      <AddNewProduct addNewProductSubmit={handleAddProduct} />

    </div>
  );
}

export default ProductManagement;