import React from 'react'
import { useState,useEffect } from 'react'

// destructuring the prop 'addNewProductSubmit'
function AddNewProduct( {addNewProductSubmit} ) {

    const [name,setName] =useState('');
    const [price,setPrice] =useState('');
    const [stock,setStock] =useState('');
    const [error,setError] =useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = (e) =>{
        e.preventDefault();

        //initialize new product variables
        //value will be set from form
        const newProduct = { name, price, stock };

        addNewProductSubmit(newProduct);
        //after adding new product, removing their value in form
        setName('');
        setPrice('');
        setStock('');
        setIsSubmitting(false);
    }

  return (
    <div className="add-new-product">
    <h2>Add New Product</h2>
    {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}

    <form onSubmit={submitForm}>
        <div className="form-group">
            <label htmlFor="name">Product Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}//setting value
                placeholder="Enter product name"
            />
        </div>

        <div className="form-group">
            <label htmlFor="price">Price ($):</label>
            <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
                step="0.01"
                min="0"
            />
        </div>

        <div className="form-group">
            <label htmlFor="stock">Stock Quantity:</label>
            <input
                type="number"
                id="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="Enter stock quantity"
                min="0"
            />
        </div>

        <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
        >
            {isSubmitting ? 'Adding...' : 'Add Product'}
        </button>
    </form>
</div>
  )
}

export default AddNewProduct