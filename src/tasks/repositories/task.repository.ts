// src/tasks/repositories/task.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Task } from '../entities/task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async findByOwnerId(ownerId: string): Promise<Task[]> {
    return this.find({ where: { ownerId } });
  }

  async findOneByIdAndOwner(id: string, ownerId: string): Promise<Task | null> {
    return this.findOne({ where: { id, ownerId } });
  }

  async markAsCompleted(id: string, ownerId: string): Promise<boolean> {
    const result = await this.update(
      { id, ownerId },
      { completed: true }
    );
    return result.affected === 1;
  }
}