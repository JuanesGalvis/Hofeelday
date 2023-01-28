"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRouter = void 0;
const express_1 = require("express");
const task_model_1 = require("./task.model");
exports.TaskRouter = (0, express_1.Router)();
exports.TaskRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allTask = yield (0, task_model_1.getAll)();
    res.status(200).json({
        message: "TODAS LAS TAREAS DE UN USUARIO",
        tasks: [...allTask]
    });
}));
exports.TaskRouter.get('/:task_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { task_id } = req.params;
    const task = yield (0, task_model_1.getOne)(task_id);
    res.status(200).json({
        message: `TAREA CON EL ID: ${task_id}`,
        task: task
    });
}));
exports.TaskRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const TaskBody = req.body;
    const respose = yield (0, task_model_1.createTask)(TaskBody);
    res.status(201).json({
        message: `NUEVA TAREA CREADA CON ÉXITO`,
        task: respose
    });
}));
exports.TaskRouter.patch('/complete/:task_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { task_id } = req.params;
    const response = yield (0, task_model_1.completeTask)(task_id);
    res.status(201).json({
        message: `TAREA CON EL ID: ${task_id} MODIFICADA CON ÉXITO`,
        task: response
    });
}));
exports.TaskRouter.patch('/:task_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { task_id } = req.params;
    const BodyTask = req.body;
    const response = yield (0, task_model_1.updateTask)(task_id, BodyTask);
    res.status(201).json({
        message: `TAREA CON EL ID: ${task_id} MODIFICADA CON ÉXITO`,
        task: response
    });
}));
exports.TaskRouter.delete('/:task_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { task_id } = req.params;
    const respose = yield (0, task_model_1.deleteTask)(task_id);
    res.status(200).json({
        message: `TAREA CON EL ID: ${task_id} ELIMINADA CON ÉXITO`,
        task: respose
    });
}));
