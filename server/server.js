const express = require("express");
const app = express();
const mysql = require('mysql2');//isso pegara a versão mais atual do mysql que instalamos
const cors = require("cors")

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"catolica",
    database:"crudescola",
    port: 3307
})

app.use(cors());
app.use(express.json());

app.post("/register/aluno",(req, res)=>{
    const {nome} = req.body;
    const {idade} = req.body;
 
    let SQL = "INSERT INTO alunos(nome,idade) VALUES (?,?)";
    
    db.query(SQL,[nome,idade],(err, result)=>{
         console.log(err);
    })
 });

 app.post("/register/professor",(req, res)=>{
    const {nome} = req.body;
    const {idade} = req.body;
 
    let SQL = "INSERT INTO professores(nome,salario) VALUES (?,?)";
    
    db.query(SQL,[nome,idade],(err, result)=>{
         console.log(err);
    })
 });

app.listen(3001,()=>{
    console.log("rodando servidor");
});