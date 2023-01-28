import express from 'express';
import './prisma/connect';
import CORS from 'cors';
// Variables de entorno
import { config } from 'dotenv';
config();
// Crear app
const app = express();
app.use(express.json());
app.use(CORS());

// TASK
import { TaskRouter } from './Task/task.controller';
app.use('/task', TaskRouter);

app.get('/', (req, res) => {
    res.send("Bienvenido a Hofeelday");
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo: http://localhost:${process.env.PORT}`);
})