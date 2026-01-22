// src/tasks/tasks.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TaskRepository } from './repositories/task.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Task,
      TaskRepository,
    ]), 

  ],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}