import "./ContinueShopping.css";

const ContinueShopping = () => {
  return (
    <>
      <br></br> <br></br> <br></br>
      <h1>Mi carrito</h1>
      <hr />
      <div className="main-container">
        <div className="left-section">
          <p className="email-label">
            Ingresa tu mail para continuar la compra
          </p>
          <p style={{ fontSize: "12px" }}>Rápido. Fácil. Seguro</p>
          <input
            type="email"
            className="email-input"
            placeholder="Correo electrónico"
            required
          />
          <button className="continue-button">Continuar</button>
        </div>
        <div className="right-section">
          <p>Guardamos su correo electrónico de manera 100% segura para:</p>
          <ul>
            <li>Identificar su perfil</li>
            <li>Notificar sobre los estados de su compra</li>
            <li>Guardar el historial de compras</li>
            <li>Facilitar el proceso de compras</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContinueShopping;
