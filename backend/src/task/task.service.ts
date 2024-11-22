import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  create(task: CreateTaskDto) {
    return this.prisma.task.create({data : task});
  }

  findAll() {
    const tasks = this.prisma.task.findMany();
    if (!tasks) {
      throw new NotFoundException('Tareas no encontradas');
    }
    return tasks;
  }

  async findOne(id: number) {
    if (!id) {
      throw new BadRequestException('El ID es obligatorio.');
    }
    const task = await this.prisma.task.findUnique({
      where: { id },
    });
  
    if (!task) {
      throw new NotFoundException('Tarea no encontrada');
    }
    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
