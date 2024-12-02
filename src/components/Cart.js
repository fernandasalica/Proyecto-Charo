import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } =
    useContext(CartContext);
  const quantity = 1;
  const handleIncrease = (id) => {
    updateQuantity(id, 1); // Aumenta la cantidad en 1
  };

  const handleDecrease = (id) => {
    updateQuantity(id, -1); // Disminuye la cantidad en 1
  };
  return (
    <div className="cart">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>$ {item.price.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  {item.quantity}
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </td>
                <td>$ {(item.price * item.quantity).toFixed(2)}</td>{" "}
                {/* Calcular el subtotal */}
                <td>
                  <button onClick={() => removeFromCart(item.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cart.length > 0 && (
        <div>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
