import React, { useState } from 'react';
import "../common/styles/Signup.css";
import md5 from 'md5';
import axios from "axios";

import { URLSIGNUP } from '../common/API/config';

const SignUpForm = () => {

  const [isDialysisPatient, setIsDialysisPatient] = useState(false);
  const [dialysisType, setDialysisType] = useState('');
  const [parentType, setParentType] = useState('');



  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    celular: '',
    userType: '',

  });

  const [emailError, setEmailError] = useState('');
  
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  }


const SendData=(formData)=>{


    axios.post(URLSIGNUP,formData)
    .then(response =>{
  
      console.log('Respuesta del servidor:', response.data);
  
  
    } )
    .catch(error => {
      // Maneja los errores aquí
      console.error('Error al enviar los datos:', error);
    });
  }





  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateEmail(formData.email)){
      setEmailError('Formato de correo invalido');
      return;
    }

    setEmailError('');

    const Md5pass = md5(formData.password);
    formData.password = Md5pass;



    switch (dialysisType) {
      case "dialisis":
        formData.userType = 2
        break;
      case "hemodialisis":
        formData.userType = 3
        break;

      case "trasplantado":
        formData.userType = 1
        break;

      case "en_protocolo":
        formData.userType = 6
        break;

    }


    if (parentType) {
      formData.userType = 5;
    }
    console.log(formData);

   SendData(formData);
   


  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleDialysisSelectChange = (e) => {
    setDialysisType(e.target.value);
  }

  const handleParentChange = (e) => {
    setParentType(e.target.value);
  }

  const handlePatientStatusChange = (e) => {
    const value = e.target.value === '1';
    setIsDialysisPatient(value);
  }


  return (
    <div className="container-fluid">
      <div className=''>
        <h2>Registrate ahora</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>

          <div>
            <label>Apellidos:</label>
            <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
          </div>

          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>


          <div>
            <label>Número de celular:</label>
            <input type="tel" name="celular" value={formData.celular} onChange={handleChange} required />
          </div>

          <div>
            <label>Soy paciente renal</label>
            <select className="form-select" name="patientStatus" onChange={handlePatientStatusChange} required>
              <option value="">Selecciona una opción</option>
              <option value="1">SI</option>
              <option value="2">NO</option>
            </select>
          </div>

          {isDialysisPatient == true ?
            (
              <div>
                <label>Tipo de paciente:</label>
                <select className="form-select" name="dialysisType" onChange={handleDialysisSelectChange} required>
                  
                <option value="insuficiencia">Insuficiencia renal</option>
                  <option value="dialisis">Diálisis</option>
                  <option value="hemodialisis">Hemodiálisis</option>
                  <option value="trasplantado">Trasplantado</option>
                  <option value="en_protocolo">En Protocolo</option>
                  <option value="rechazo_del_injerto">Rechazo del injerto</option>
                </select>
              </div>
            )
            :
            (
              <div>
                <label>Soy Familiar o amigo del paciente:</label>
                <select className="form-select" name="parentType" onChange={handleParentChange} required>

                <option value="Esposo">Esposo</option>
                <option value="Esposa">Esposa</option>
                  <option value="Madre">Madre</option>
                  <option value="Padre">Padre</option>
                  <option value="Hijo">Hijo</option>
                  <option value="Hija">Hija</option>
                  <option value="Hermano">Hermano</option>
                  <option value="Hermana">Hermana</option>
                </select>
              </div>

            )
          }


          <div>
            <label>Contraseña:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>


    </div>
  );
}

export default SignUpForm;
