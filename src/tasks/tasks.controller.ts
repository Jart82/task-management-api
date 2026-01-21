// src/tasks/tasks.controller.ts
import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskResponseDto } from './dto/task-response.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  create(@Body() dto: CreateTaskDto, @Req() req): Promise<TaskResponseDto> {
    return this.tasksService.create(dto, req.user.id);
  }

  @Get()
  findAll(@Req() req): Promise<TaskResponseDto[]> {
    return this.tasksService.findAll(req.user.id);
  }
}