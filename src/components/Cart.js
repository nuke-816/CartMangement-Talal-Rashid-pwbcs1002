import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';  // Correct import
import { getCart } from '../api/api';  // Correct import for getCart

const Cart = ({ userId }) => {
  const { cart, setCart, removeFromCart, total, calculateTotal } = useCart();

  useEffect(() => {
    const fetchCart = async () => {
      const cartData = await getCart(userId);  // Fetch cart data for the given userId
      setCart(cartData.products);  // Assuming cartData contains products
    };
    fetchCart();
  }, [userId, setCart]);  // We use setCart here for the dependency

  useEffect(() => {
    calculateTotal();  // Calculate the total when cart changes
  }, [cart, calculateTotal]);  // Include calculateTotal in the dependency array

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.productId}>
          <h3>{item.product.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(item.productId)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
