import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaService) {}
  create(activity: CreateActivityDto) {
    return this.prisma.activity.create({data : activity});
  }

  async findAll() {
    const activities = this.prisma.activity.findMany();
    if (!activities) {
      throw new NotFoundException('Actividades no encontradas');
    }
  }

  async findOne(id: number) {
    if (!id) {
      throw new BadRequestException('El ID es obligatorio.');
    }
    const activity = this.prisma.activity.findUnique({
      where: { id },
    });

    if (!activity) {
      throw new NotFoundException('Actividad no encontrada');
    }
    return activity;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
