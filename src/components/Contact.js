import Title from "./Title";

const Contact = () => {
  return (
    <section className="section" id="contacto">
      <Title title="Contacta" subTitle="conmigo" />
      <div className="contact">
        <p>
          Si deseas colaborar con nosotros, si tienes dudas, si necesitas ayuda,
          si te enfrentas al TEA por primera vez y si deseas contactar con
          nosotros, puedes utilizar este formulario.{" "}
        </p>
        <p>
          {" "}
          Si lo prefieres, puedes escribirnos a <b>
            info@fundacionconectea.es
          </b>{" "}
          o llamarnos al 916 587 378. Te responderemos a la mayor brevedad
          posible. Si deseas que te atendamos personalmente para aclarar tus
          dudas, podemos hacerlo presencialmente en nuestro despacho en el
          Centro ConecTEA C/ Jose Hierro 10, Local 2 28702 San Sebastian de los
          Reyes (Madrid), con cita previa.
        </p>
      </div>
    </section>
  );
};
export default Contact;
