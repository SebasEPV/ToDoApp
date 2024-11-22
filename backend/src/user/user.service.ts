import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(user: CreateUserDto) {
    const { password, ...userNoPass } = user;
    const hashedPassword = await hash(password, 10)
    return await this.prisma.user.create({
      data: {
        ...userNoPass,
        password: hashedPassword,
      },
    });
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    if (!users) {
      throw new NotFoundException('Usuarios no encontrados');
    }
    return users;
  }

  async findOne(id: number) {
    if (!id) {
      throw new BadRequestException('El ID es obligatorio.');
    }
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
