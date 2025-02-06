import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors'; 
import Login from './Components/Login.js'
import Signup from './Components/signup.js'
import Email from './Components/email/SendMail.js'
import UpdatePassword from './Components/UpdatePassword.js';
import DatabaseConnection from './DabaseConnection.js';
import Events from './Components/Events.js'
const app = express();
configDotenv();
DatabaseConnection()
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.get('/', (req,res)=>{
   res.send('hello world')
})
app.use(Login)
app.use(Signup)
app.use(Email)
app.use(UpdatePassword)
app.use('/event',Events)
app.listen(4000,()=>{
    console.log('Server is running on port 4000')  
})
