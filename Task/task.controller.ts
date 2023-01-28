import { Router } from 'express';

import { createTask, getAll, getOne, completeTask, deleteTask, updateTask } from './task.model';

export const TaskRouter = Router();

TaskRouter.get('/', async (req, res) => {

    const allTask = await getAll();

    res.status(200).json({
        message: "TODAS LAS TAREAS DE UN USUARIO",
        tasks: [...allTask]
    })
})

TaskRouter.get('/:task_id', async (req, res) => {

    const { task_id } = req.params;

    const task = await getOne(task_id);

    res.status(200).json({
        message: `TAREA CON EL ID: ${task_id}`,
        task: task
    })
})

TaskRouter.post('/', async (req, res) => {

    const TaskBody = req.body;

    const respose = await createTask(TaskBody);

    res.status(201).json({
        message: `NUEVA TAREA CREADA CON ÉXITO`,
        task: respose
    })
})

TaskRouter.patch('/complete/:task_id', async (req, res) => {

    const { task_id } = req.params;

    const response = await completeTask(task_id)

    res.status(201).json({
        message: `TAREA CON EL ID: ${task_id} MODIFICADA CON ÉXITO`,
        task: response
    })
})

TaskRouter.patch('/:task_id', async (req, res) => {

    const { task_id } = req.params;
    const BodyTask = req.body;

    const response = await updateTask(task_id, BodyTask);

    res.status(201).json({
        message: `TAREA CON EL ID: ${task_id} MODIFICADA CON ÉXITO`,
        task: response
    })
})

TaskRouter.delete('/:task_id', async (req, res) => {

    const { task_id } = req.params;

    const respose = await deleteTask(task_id);

    res.status(200).json({
        message: `TAREA CON EL ID: ${task_id} ELIMINADA CON ÉXITO`,
        task: respose
    })
})