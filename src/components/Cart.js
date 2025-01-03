import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/cart.css";
import { Link } from "react-router-dom";
import { services } from "../data";

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
      <h3 className="title">Carrito de Compras</h3>
      <div className="cart-container">
        <div className="cart-items">
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

              <div className="cart-actions">
                {cart.length > 0 && (
                  <div style={{ marginTop: "20px" }}>
                    <button onClick={clearCart} className="btn">
                      Vaciar Carrito
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <div className="cart-total">
          {cart.length > 0 && (
            <>
              <div className="subtotal">
                <p style={{ textAlign: "left" }}>Subtotal</p>
                <p>$ {calculateTotal()}</p>
              </div>
              <hr></hr>
              <table>
                <tbody>
                  <tr>
                    <td className="total">TOTAL:</td>
                    <td style={{ padding: "10px", fontWeight: "bold" }}>
                      $ {calculateTotal()}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{ marginTop: "20px" }}>
                <Link to="/ContinueShopping">
                  <button className="btn">Continuar la compra</button>
                </Link>
                <button className="btn">
                  <Link to={`http://localhost:3000/#inicio`}>
                    Volver a la tienda
                  </Link>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <hr></hr>
      <div className="section-center services-center services-container">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
