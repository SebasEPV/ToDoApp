import { IsNumber, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  startTime: string;

  @IsString()
  endTime: string;

  @IsNumber()
  taskId: number;
}
