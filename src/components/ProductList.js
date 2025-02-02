import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/api';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
