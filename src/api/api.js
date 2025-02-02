import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Make sure this is correct

// Fetch all products
export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

// Fetch the cart data for a specific user
export const getCart = async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/cart/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw error; // Throw to handle error properly in the component
    }
  };

// Add product to cart
export const addToCart = async (userId, productId, quantity) => {
  const response = await axios.post(`${API_URL}/cart`, { userId, productId, quantity });
  return response.data;
};
