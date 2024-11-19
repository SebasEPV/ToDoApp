import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor (private prisma : PrismaService){}
  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {
    const tasks = this.prisma.task.findMany() 
    if (tasks !== null) {
      return tasks;
    }
    return "No hay usuarios registrados"
  }

  findOne(id: number) {
    const task = this.prisma.task.findUnique({
      where : {id}
    });


    return task;

  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where : {id},
      data : updateTaskDto
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({
      where : {id}
    });
  }
}
