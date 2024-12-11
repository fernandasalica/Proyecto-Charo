import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((i) => i.id === item.id);
      if (existingProduct) {
        // Si el producto ya existe, incrementa la cantidad
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Si no existe, agrega el nuevo producto
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // Si el producto ya existe en cartItems, incrementa la cantidad
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Si no existe, agrega el nuevo producto
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
    setCartItems(cartItems.filter((item) => item.id !== itemId)); // Actualiza cartItems
  };

  const clearCart = () => {
    setCart([]);
    setCartItems([]);
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) } // Asegúrate de que la cantidad no sea menor que 1
          : item
      )
    );
  };
  const itemCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
