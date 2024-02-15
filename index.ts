import express from "express";
import dotenv from "dotenv";
import mysql from 'mysql2';
// import dbConfig from "./src/config/dbConfig";

import router from './src/route/restaurant/restaurant'
const app = express();
app.use(express.json())

dotenv.config();
const PORT: number | string = process.env.PORT || 4444;

router(app)

app.listen(PORT, ()=>{
  console.log(`Server is up and running on http://localhost:${PORT}`)
})

 
