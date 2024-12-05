import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./cart.css";
import { Link } from "react-router-dom";

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
            <div>
              <p>El carrito está vacío</p>
              <button className="btn">
                <Link to={`http://localhost:3000/#inicio`}>
                  Volver a la tienda
                </Link>
              </button>
            </div>
          ) : (
            <>
              <table style={{ margin: "0 auto" }} className="cart-table">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th></th>
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
                        <i
                          className="fas fa-trash"
                          onClick={() => removeFromCart(item.id)}
                          style={{ cursor: "pointer", color: "#007bff" }} // Estilo para el ícono
                          title="Eliminar"
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ marginLeft: "20px" }}>
                <h3 style={{ marginTop: "25px" }}>Total</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Total:</td>
                      <td>$ {calculateTotal()}</td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ marginTop: "20px" }}>
                  <button
                    onClick={() => alert("Proceder al pago")}
                    className="btn"
                  >
                    Proceder al pago
                  </button>
                  <button className="btn">
                    <Link to={`http://localhost:3000/#inicio`}>
                      Volver a la tienda
                    </Link>
                  </button>
                </div>
              </div>
            </>
          )}
          {cart.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <button onClick={clearCart} className="btn">
                Vaciar Carrito
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
