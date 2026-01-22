// src/users/repositories/user.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  /**
   * Find a user by email (for login/registration)
   */
  async findByEmail(email: string): Promise<User | null> {
    return this.findOne({ where: { email } });
  }

  /**
   * Find a user by ID (for profile lookup)
   */
  async findById(id: string): Promise<User | null> {
    return this.findOne({ where: { id } });
  }

  /**
   * Create and save a new user (with hashed password already set)
   */
  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.create(userData);
    return this.save(user);
  }

  /**
   * Check if email is already taken
   */
  async isEmailTaken(email: string): Promise<boolean> {
    const user = await this.findByEmail(email);
    return !!user;
  }
}