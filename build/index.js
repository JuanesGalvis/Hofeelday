"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./prisma/connect");
const cors_1 = __importDefault(require("cors"));
// Variables de entorno
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// Crear app
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// TASK
const task_controller_1 = require("./Task/task.controller");
app.use('/task', task_controller_1.TaskRouter);
app.get('/', (req, res) => {
    res.send("Bienvenido a Hofeelday");
});
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo: http://localhost:${process.env.PORT}`);
});
