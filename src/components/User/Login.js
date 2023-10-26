import React, { useState } from 'react';
import "../common/styles/Login.css";
import { URLLOGIN } from '../common/API/config';
import md5 from 'md5';
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate =useNavigate();


  const SendData=(email,password)=>{

    const hashpass=md5(password);
    axios
    .post(URLLOGIN,{
        email,
        hashpass,
    })
    .then((response) =>{
  
        const userData =response.data[0];
       


    
    
      } )
      .catch(error => {
        // Maneja los errores aquí
        console.error('Error al enviar los datos:', error);
      });
  }


    const handleSubmit = (e) => {
        e.preventDefault();

        SendData(email,password);

    };

    return (
        <div className="container-fluid con-login">
            <div className="login-form">
                <h2>Iniciar sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input
                            className="input-login"
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            className="input-login"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
