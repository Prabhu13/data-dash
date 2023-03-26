import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      description: 'Description of product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      description: 'Description of product 2',
    },
    // Add more products here
  ];

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;