// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // 👈 Import JwtModule
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module'; // 👈 Needed for UsersService
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule, // 
    PassportModule,
    JwtModule.register({ 
      secret: process.env.JWT_SECRET || 'your-super-secret-key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService], // 
})
export class AuthModule {}