import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import userRouter from './routes/userRoutes.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/users', userRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor de pruebas corriendo en puerto ${PORT}.`);
});
