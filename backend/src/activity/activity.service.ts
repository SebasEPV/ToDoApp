import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActivityService {
  constructor (private prisma : PrismaService) {}
  create(createActivityDto: CreateActivityDto) {
    return 'This action adds a new activity';
  }

  async findAll() {
    return this.prisma.activity.findMany();
  }

  async findOne(id: number) {
    const activity = this.prisma.activity.findUnique({
      where: { id },
    });


    return activity;  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
