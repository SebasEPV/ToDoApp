import { IsEnum, IsNumber, IsString } from 'class-validator';

export enum Priority {
  TOP = 'TOP',
  DUMP = 'DUMP',
}

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(Priority)
  priority: Priority;

  @IsString()
  dueDate: string;

  @IsNumber()
  userId: number;
}
