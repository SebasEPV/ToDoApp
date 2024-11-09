import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { title } from 'process';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) {}

    async getAllTasks():Promise<Task[]> {
        return this.prisma.task.findMany();
    }

    async getTaskById(id : number):Promise<Task> {
        return this.prisma.task.findUnique({
            where : {id}
        });
    }

    async createTask(data : Task):Promise<string> {
        await this.prisma.task.create({
        data :{
            title: '',
            description: '',
            dueDate: '',
            userId: 1
        }
        })
        return `Se ha agregado una tarea con titulo de ${title}`
    }

    async deleteTask(id : number): Promise<string> {
        await this.prisma.task.delete({
            where : {id}
        })
        return `Se ha eliminado una tarea con id de ${id}`
    }

    async updateStatus(id : number, statusChange : number):Promise<string> {        
        await this.prisma.task.update({
            where : {id},
            data : {
                status : statusChange
            }
        })

        if (statusChange == 0){
            return `Se ha eliminado la tarea con id ${id}`
        } else if (statusChange == 1){
            return `Se ha eliminado la tarea con id ${id}`
        }
    }
}
