import React from 'react';
import "../styles/Home.css";
import { Link } from 'react-router-dom';
const  HomePage= () => {
  return (
<div className="container-fluid">
<div className="homepage">
      <h1>PARETRA</h1>
      <h2>Pacientes Renales y Trasplantados</h2>
      <p>Bienvenido a PARETRA, un espacio dedicado a pacientes renales y trasplantados. Aquí puedes compartir información, hacer preguntas y acceder a herramientas útiles para el control de diálisis.</p>
      <div className="dialysis-tools">
        <h3>Herramientas para el Control de Diálisis</h3>
        <ul>
          <li>Calculadora de Diálisis</li>
          <li>Registro de Datos Personales</li>
          <li>Comunidad de Apoyo</li>
        </ul>
      </div>
      <div className='actionbotons'>
        <Link to="/signup">
        <button className='btn btnsignup'> Registrarse</button>
        </Link>
        <Link to="/login">
        <button className='btn btnlogin'> Iniciar Sesi&oacute;n</button>
        </Link>
      </div>

    </div>


</div>
  );
}

export default HomePage;
