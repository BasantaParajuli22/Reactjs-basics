import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UpdateProduct() {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch existing product data
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3001/products/${id}`);
                const data = await response.json();
                if (!response.ok) {
                    throw new Error("Product not found");
                }
                setName(data.name);
                setPrice(data.price);
                setStock(data.stock);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchProduct();
    }, [id]);

    const submitForm = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const updatedProduct = { name, price, stock };

        try {
            const response = await fetch(`http://localhost:3001/products/${id}`, {
                method: 'PUT', // or 'PATCH'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct)
            });

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error("Product not found to update");
                }
                throw new Error("Failed to update product");
            }

            console.log("Product updated successfully");

        } catch (error) {
            setError(error.message);
            console.error(error.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="update-product">
            <h2>Update Product</h2>
            {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}

            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="name">Product Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                    {isSubmitting ? 'Updating...' : 'Update Product'}
                </button>
            </form>
        </div>
    )
}

export default UpdateProduct;