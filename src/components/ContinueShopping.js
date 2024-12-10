import "./ContinueShopping.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContinueShopping = () => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email inválido")
      .required("El email es requerido"),
  });

  const handleSubmit = (values) => {
    console.log("Formulario enviado:", values);
    // Aquí puedes manejar el envío del formulario
  };

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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="email-input"
                    placeholder="Correo electrónico"
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="msg-error"
                  />
                </div>

                <button className="continue-button">Continuar</button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="right-section">
          <p>Guardamos su correo electrónico de manera 100% segura para:</p>
          <ul>
            <li>
              <i class="fas fa-check"></i> Identificar su perfil
            </li>
            <li>
              <i class="fas fa-check"></i> Notificar sobre los estados de su
              compra
            </li>
            <li>
              <i class="fas fa-check"></i> Guardar el historial de compras
            </li>
            <li>
              <i class="fas fa-check"></i> Facilitar el proceso de compras
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContinueShopping;
