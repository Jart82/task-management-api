// users.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UserRepository } from './repositories/user.repository';
import { RegisterUserDto } from './dto/register-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: UserRepository;

  const mockUserRepository = {
    isEmailTaken: jest.fn(),
    createUser: jest.fn(),
    findById: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UserRepository,
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should throw if email is taken', async () => {
    mockUserRepository.isEmailTaken.mockResolvedValue(true);
    const dto: RegisterUserDto = {
      firstName: 'Test',
      lastName: 'User',
      email: 'taken@example.com',
      password: 'Pass1234',
    };

    await expect(service.create(dto)).rejects.toThrow('Email already registered');
  });

  it('should create user if email is available', async () => {
    mockUserRepository.isEmailTaken.mockResolvedValue(false);
    mockUserRepository.createUser.mockResolvedValue({
      id: 'uuid',
      email: 'new@example.com',
    } as any);

    const dto: RegisterUserDto = {
      firstName: 'New',
      lastName: 'User',
      email: 'new@example.com',
      password: 'Pass1234',
    };

    const result = await service.create(dto);
    expect(result.email).toBe('new@example.com');
  });
});