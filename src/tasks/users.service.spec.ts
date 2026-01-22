// tasks.service.spec.ts
import { Test } from "@nestjs/testing";
import { TaskRepository } from "./repositories/task.repository";
import { TasksService } from "./tasks.service";

const mockTaskRepository = {
  findByOwnerId: jest.fn(),
  findOneByIdAndOwner: jest.fn(),
  save: jest.fn(),
};

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TaskRepository, useValue: mockTaskRepository },
      ],
    }).compile();

    service = module.get(TasksService);
  });

  it('should find all tasks', async () => {
    mockTaskRepository.findByOwnerId.mockResolvedValue([]);
    await service.findAll('user-1');
    expect(mockTaskRepository.findByOwnerId).toHaveBeenCalledWith('user-1');
  });
});