import express from 'express'
import dotenv from 'dotenv'
import connection from './connectionTomongoodb/connection.js'
import { login } from './login/login.js'
import cors from 'cors'





// import {Server} from 'socket.io'
// import{createServer} from 'http'

const app= express();
// const server=createServer(app);
// const io=new Server(server,{
//     cors:"http://localhost:8000",
//     methods:["GET",'POST'],
//     credentials:true,
// });

dotenv.config();
 const PORT=process.env.PORT||5000;


app.use(cors());

app.use(express.json());











app.post('/login',login);

// io.on('connection',(socket)=>{
//     console.log(`user connected ,andconnection id is ${socket.id} `)
// })

 

app.listen(PORT,()=>{
    connection();
    console.log(`server run on port ${PORT}`)    
})
