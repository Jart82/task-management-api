// src/users/users.service.ts
import { Injectable, BadRequestException, NotFoundException, PreconditionFailedException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UserRepository
  ) {}

  async create(dto: RegisterUserDto): Promise<User> {
    const existing = await this.findByEmail(dto.email);
    if (existing) {
      throw new PreconditionFailedException('Email already registered');
    }

    const user = this.usersRepository.create({
      firstName: dto.firstName,
      lastName: dto.lastName,
      email: dto.email,
    });
    await user.setPassword(dto.password);
    return this.usersRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOne({ where: { email } });
  }

  async findById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  // Optional: get profile (for /me endpoint)
  async getProfile(userId: string): Promise<User> {
    return this.findById(userId);
  }
}