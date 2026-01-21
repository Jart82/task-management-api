// src/auth/auth.controller.ts
import {
  Controller,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from '../users/dto/register-user.dto';
import { UserResponseDto } from '../users/dto/user-response.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterUserDto): Promise<UserResponseDto> {
    const user = await this.authService.register(dto);
    return user; // Password auto-hidden by @Exclude
  }

  @Post('login')
  async login(@Body() dto: LoginUserDto) {
    const result = await this.authService.login(dto);
    return {
      access_token: result.access_token,
      user: result.user, // Safe due to @Exclude
    };
  }
}