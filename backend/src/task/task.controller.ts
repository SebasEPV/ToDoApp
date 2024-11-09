import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';
import { identity } from 'rxjs';

@Controller('task')
export class TaskController {
    constructor(private taskService : TaskService) {};

    @Get()
    getAllTasks(){
        return this.taskService.getAllTasks()
    }

    @Get(':id')
    getTaskById(@Param('id') id : number){
        return this.taskService.getTaskById(id)
    }

    @Post(':id')
    createTask(@Body() data : Task){
        return this.taskService.createTask(data)
    }

    @Delete(':id')
    deleteTask(@Param('id') id : number) {
        return this.taskService.deleteTask(id)
    }

    @Patch(':id/:status')
    updateTaskStatus(@Param('id') id : number, @Param('status') status : number) {
        return this.taskService.updateStatus(id, status)
    }
}
