import { prisma } from '../prisma/connect';
import { Task, UpdateTask } from './Task.dto';

export async function getAll() {

    await prisma.$connect();
    
    const allUsers = await prisma.task.findMany();
    return allUsers;
}

export async function getOne(id: string) {

    await prisma.$connect();
    
    const oneUser = await prisma.task.findUnique({
        where: { id: id }
    });

    return oneUser;
    
}

export async function createTask(newTask: Task) {

    await prisma.$connect();

    const response = await prisma.task.create({
        data: newTask
    })

    return response;
}

export async function completeTask (id: string) {

    await prisma.$connect();

    const response = await prisma.task.update({
        where: { id: id },
        data: {
            complete: true
        }
    })

    return response;    
}

export async function updateTask (id: string, content: UpdateTask) {

    await prisma.$connect();

    const response = await prisma.task.update({
        where: { id: id },
        data: content
    })

    return response;    
}

export async function deleteTask (id: string) {

    await prisma.$connect();

    const deletedUser = await prisma.task.delete({
        where: { id: id }
    });

    return deletedUser;
}