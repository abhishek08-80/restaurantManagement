import express from "express";
import dotenv from "dotenv";
import mysql from 'mysql2';
// import PORT from './src/config/env'
// import {PORT}from "./src/config/env"
 
import swaggerUi from "swagger-ui-express";
import {routes} from './src/route/index'
import swaggerDocument from "./swagger.json";

import stripe from "stripe"
import { PORT } from "./src/config/env";

const app:any = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

app.use(express.json())


routes(app)

app.listen(PORT, ()=>{
  console.log(`Server is up and running on http://localhost:${PORT}`)
})






// const options = {
//   definition: {
//     openapi: "3.0.1",
//     info: {
//       title: "restaurant management",
//       version: "1.0.0",
//     },
//     schemes: ["http", "https"],
//     servers: [{ url: "http://localhost:3000/" }],
//   },
//   apis: [
//     `${__dirname}/route/employee.ts`,
//     "./src/route/employee.ts",
//   ],
// };
// const swaggerSpec = swaggerJSDoc(options);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));