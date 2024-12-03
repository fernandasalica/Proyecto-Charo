import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./cart.css";

const Cart = () => {
  window.scrollTo(0, 0);
  const { cart, removeFromCart, clearCart, updateQuantity } =
    useContext(CartContext);

  const handleIncrease = (id) => {
    updateQuantity(id, 1); // Aumenta la cantidad en 1
  };

  const handleDecrease = (id) => {
    updateQuantity(id, -1); // Disminuye la cantidad en 1
  };

  // Calcular el total del carrito
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>Carrito de Compras</h3>
      <div className="cart">
        <div>
          {cart.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <table style={{ margin: "0 auto" }}>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>$ {item.price.toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => handleDecrease(item.id)}
                        className="btn"
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        onClick={() => handleIncrease(item.id)}
                        className="btn"
                      >
                        +
                      </button>
                    </td>
                    <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {cart.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <button onClick={clearCart} className="btn">
                Vaciar Carrito
              </button>
            </div>
          )}
        </div>

        {/* Tabla de Total */}
        <div style={{ marginLeft: "20px" }}>
          <h3>Total</h3>
          <table style={{ margin: "0 auto" }}>
            <tbody>
              <tr>
                <td>Total:</td>
                <td>$ {calculateTotal()}</td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: "20px" }}>
            <button onClick={() => alert("Proceder al pago")} className="btn">
              Proceder al pago
            </button>
            <button
              onClick={() => alert("Elegir más productos")}
              className="btn"
            >
              Elegir más productos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
