import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const userId = 'user123'; // Example user ID

  return (
    <CartProvider>
      <div>
        <h1>Cart Management System</h1>
        <ProductList />
        <Cart userId={userId} />
      </div>
    </CartProvider>
  );
};

export default App;
