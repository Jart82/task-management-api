// src/tasks/dto/create-task.dto.ts
import { Expose } from 'class-transformer';

export class TaskResponseDto {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  description?: string | null;

  @Expose()
  completed: boolean;

  @Expose()
  ownerId: string;

  @Expose()
  createdAt: Date;
}