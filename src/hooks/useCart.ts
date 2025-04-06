import { useState, useEffect } from 'react';
import { CartProduct, Product } from '@/types/product';
import { toast } from 'sonner';

export function useCart() {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  
  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
  }, []);
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, quantity: number = 1, variant?: string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => 
        item.id === product.id && item.variant === variant
      );
      
      if (existingItem) {
        // If item exists, update quantity
        return prevItems.map(item => 
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Otherwise, add new item
        return [...prevItems, { 
          ...product, 
          quantity,
          variant 
        }];
      }
    });
    
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success('Cart has been cleared');
  };

  // Calculate cart totals
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 
    0
  );
  
  const originalTotal = cartItems.reduce(
    (sum, item) => sum + (item.originalPrice || item.price) * item.quantity, 
    0
  );
  
  const itemCount = cartItems.reduce(
    (count, item) => count + item.quantity, 
    0
  );
  
  const discount = originalTotal - cartTotal;

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    originalTotal,
    discount,
    itemCount,
  };
}
