// src/tasks/tasks.service.ts
import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskRepository } from './repositories/task.repository';

@Injectable()
export class TasksService {
  constructor(
    private taskRepository: TaskRepository
  ) {}

  async create(dto: CreateTaskDto, userId: string): Promise<Task> {
    const task = this.taskRepository.create({
      ...dto,
      ownerId: userId,
    });
    return this.taskRepository.save(task);
  }

  async findAll(userId: string): Promise<Task[]> {
    return this.taskRepository.findByOwnerId(userId);
  }

  async findOne(id: string, userId: string): Promise<Task> {
    const task = await this.taskRepository.findOneByIdAndOwner(id, userId);
    if (!task) {
      throw new NotFoundException('Task not found or access denied');
    }
    return task;
  }

  async update(id: string, dto: UpdateTaskDto, userId: string): Promise<Task> {
    const task = await this.findOne(id, userId); // Reuses ownership check
    Object.assign(task, dto);
    return this.taskRepository.save(task);
  }

  async remove(id: string, userId: string): Promise<void> {
    const result = await this.taskRepository.delete({ id, ownerId: userId });
    if (result.affected === 0) {
      throw new NotFoundException('Task not found or access denied');
    }
  }
}