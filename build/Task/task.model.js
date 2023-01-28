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
exports.deleteTask = exports.updateTask = exports.completeTask = exports.createTask = exports.getOne = exports.getAll = void 0;
const connect_1 = require("../prisma/connect");
function getAll() {
    return __awaiter(this, void 0, void 0, function* () {
        yield connect_1.prisma.$connect();
        const allUsers = yield connect_1.prisma.task.findMany();
        return allUsers;
    });
}
exports.getAll = getAll;
function getOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connect_1.prisma.$connect();
        const oneUser = yield connect_1.prisma.task.findUnique({
            where: { id: id }
        });
        return oneUser;
    });
}
exports.getOne = getOne;
function createTask(newTask) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connect_1.prisma.$connect();
        const response = yield connect_1.prisma.task.create({
            data: newTask
        });
        return response;
    });
}
exports.createTask = createTask;
function completeTask(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connect_1.prisma.$connect();
        const response = yield connect_1.prisma.task.update({
            where: { id: id },
            data: {
                complete: true
            }
        });
        return response;
    });
}
exports.completeTask = completeTask;
function updateTask(id, content) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connect_1.prisma.$connect();
        const response = yield connect_1.prisma.task.update({
            where: { id: id },
            data: content
        });
        return response;
    });
}
exports.updateTask = updateTask;
function deleteTask(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield connect_1.prisma.$connect();
        const deletedUser = yield connect_1.prisma.task.delete({
            where: { id: id }
        });
        return deletedUser;
    });
}
exports.deleteTask = deleteTask;
