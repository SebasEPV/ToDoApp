import { Injectable, ConflictException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async getUser(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async createUser(data: User): Promise<string> {
    // Verifica si el usuario ya existe
    const existingUser = await this.getUser(data.email);
    if (existingUser) {
      throw new ConflictException(
        `Ya existe un usuario con el correo ${data.email}.`,
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        startTime: data.startTime,
        endTime: data.endTime
      },
    });
    return `Se ha creado un usuario con el correo de ${data.email}.`;
  }
}
