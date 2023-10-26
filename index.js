const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const port = 3011;
require('dotenv').config();
app.use(express.json());
app.use(bodyParser.urlencoded({ extend: true }));

const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };
  
app.use(cors(corsOptions));

const db = mysql.createPool({
    host: "195.179.238.1",
    user: "u611292494_paretra",
    password: "Css9393$$$",
    database: "u611292494_paretra"
  });

  app.get("/",(req,res)=>{
    res.send("Hola este es mi servidor")
  })


 
  app.post('/signup', (req, res) => {
    const formData = req.body; 
    const sql = 'INSERT INTO tbl_PRT_Users (st_Nombre,st_Apellidos,st_Email,st_Password,i_Celular,id_TipoUser ) VALUES (?, ?, ?, ?, ?,?)';
    db.query(sql, [formData.nombre,formData.apellidos,formData.email,formData.password,formData.celular,formData.userType], (err, result) => {
      if (err) {
        console.error('Error al insertar datos en la base de datos:', err);
        res.status(500).json({ message: 'Error en el registro' });
      } else {
        console.log('Registro exitoso');
        res.json({ message: 'Registro exitoso' });
      }
    });
  });

  app.post("/login", (req, res)     => {
    const { email, hashpass } = req.body;
  
    const sql = "SELECT * FROM tbl_PRT_Users WHERE st_Email = ? AND st_Password = ?";
    db.query(sql, [email, hashpass], (err, results) => {
      if (err) {
        console.error("Error en la consulta SQL:", err);
        res.status(500).json({ error: "Error en el servidor" });
      } else {

        if (results.length > 0) {
          const usuario = results[0];
          res.send(usuario)
          console.log(usuario)
        } else {
        
          res.status(401).json({ error: "Credenciales inválidas" });
        }
      }
    });
  });

  app.get("/posthistfam",(req,res) =>{
    res.send("Sube Historia Familiar")

  })




  


app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

if (db) {
    console.log("DB conectada");
  }