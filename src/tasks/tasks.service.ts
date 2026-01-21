// src/tasks/tasks.service.ts
import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepo: Repository<Task>,
  ) {}

  async create(dto: CreateTaskDto, userId: string): Promise<Task> {
    const task = this.tasksRepo.create({
      ...dto,
      ownerId: userId,
    });
    return this.tasksRepo.save(task);
  }

  async findAll(userId: string): Promise<Task[]> {
    return this.tasksRepo.find({ where: { ownerId: userId } });
  }

  async findOne(id: string, userId: string): Promise<Task> {
    const task = await this.tasksRepo.findOne({ where: { id, ownerId: userId } });
    if (!task) {
      throw new NotFoundException('Task not found or access denied');
    }
    return task;
  }

  async update(id: string, dto: UpdateTaskDto, userId: string): Promise<Task> {
    const task = await this.findOne(id, userId); // Reuses ownership check
    Object.assign(task, dto);
    return this.tasksRepo.save(task);
  }

  async remove(id: string, userId: string): Promise<void> {
    const result = await this.tasksRepo.delete({ id, ownerId: userId });
    if (result.affected === 0) {
      throw new NotFoundException('Task not found or access denied');
    }
  }
}