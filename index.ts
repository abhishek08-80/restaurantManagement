import express from "express";
import dotenv from "dotenv";
import mysql from 'mysql2';
// import dbConfig from "./src/config/dbConfig";

import {routes} from './src/route/index'
const app:any = express();
app.use(express.json())

dotenv.config();
const PORT: number | string = process.env.PORT || 4444;

routes(app)

app.listen(PORT, ()=>{
  console.log(`Server is up and running on http://localhost:${PORT}`)
})

 
